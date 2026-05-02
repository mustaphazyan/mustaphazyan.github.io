document.addEventListener('DOMContentLoaded', () => {
    // --- العناصر الأساسية ---
    const mainAudio = document.getElementById('mainAudio');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const shuffleBtn = document.getElementById('shuffleBtn');
    const repeatBtn = document.getElementById('repeatBtn');
    const progressBar = document.getElementById('progressBar');
    const progressArea = document.getElementById('progressArea');
    const currentTimeEl = document.getElementById('currentTime');
    const durationEl = document.getElementById('duration');
    const volumeSlider = document.getElementById('volumeSlider');
    const volumeIcon = document.getElementById('volumeIcon');
    const playlistItems = document.getElementById('playlist-items');
    const searchSongs = document.getElementById('searchSongs');
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    const fullPlayer = document.getElementById('fullPlayer');
    const closeFullPlayer = document.getElementById('closeFullPlayer');
    
    // عناصر معلومات الأغنية
    const miniAlbumArt = document.getElementById('miniAlbumArt');
    const miniSongTitle = document.getElementById('miniSongTitle');
    const miniArtistName = document.getElementById('miniArtistName');
    const mainAlbumArt = document.getElementById('mainAlbumArt');
    const mainSongTitle = document.getElementById('mainSongTitle');
    const mainArtistName = document.getElementById('mainArtistName');
    
    // الإشعارات
    const notification = document.getElementById('notification');
    const notifImg = document.getElementById('notifImg');
    const notifTitle = document.getElementById('notifTitle');
    const notifArtist = document.getElementById('notifArtist');

    let songs = [];
    let musicIndex = 0;
    let isShuffle = false;
    let isRepeat = false;

    // --- 1. تحميل الأغاني من جدول HTML (النظام السهل للمستخدم) ---
    function loadSongsFromHTML() {
        const rows = document.querySelectorAll('#raw-song-data tr');
        songs = Array.from(rows).map(row => {
            const cols = row.querySelectorAll('td');
            return {
                title: cols[0].innerText,
                file: cols[1].innerText,
                artist: cols[2] ? cols[2].innerText : "فنان غير معروف",
                cover: cols[3] ? cols[3].innerText : "default.jpg"
            };
        });
        renderPlaylist(songs);
    }

    // --- 2. عرض قائمة التشغيل ---
    function renderPlaylist(songsToRender) {
        playlistItems.innerHTML = '';
        songsToRender.forEach((song, index) => {
            const div = document.createElement('div');
            div.className = `song-item ${index === musicIndex ? 'playing' : ''}`;
            div.innerHTML = `
                <img src="covers/${song.cover}" alt="${song.title}">
                <div class="song-item-info">
                    <h4>${song.title}</h4>
                    <p>${song.artist}</p>
                </div>
            `;
            div.onclick = () => {
                musicIndex = songs.indexOf(song);
                loadTrack(musicIndex);
                playTrack();
            };
            playlistItems.appendChild(div);
        });
    }

    // --- 3. وظائف المشغل الأساسية ---
    function loadTrack(index) {
        const song = songs[index];
        mainAudio.src = `music/${song.file}`;
        
        // تحديث المعلومات في الواجهة
        miniSongTitle.innerText = song.title;
        miniArtistName.innerText = song.artist;
        miniAlbumArt.src = `covers/${song.cover}`;
        
        mainSongTitle.innerText = song.title;
        mainArtistName.innerText = song.artist;
        mainAlbumArt.src = `covers/${song.cover}`;

        // تحديث قائمة التشغيل لتمييز الأغنية الحالية
        renderPlaylist(songs);
        showNotification(song);
    }

    function playTrack() {
        mainAudio.play();
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        playPauseBtn.classList.add('playing');
    }

    function pauseTrack() {
        mainAudio.pause();
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        playPauseBtn.classList.remove('playing');
    }

    playPauseBtn.addEventListener('click', () => {
        const isPlaying = playPauseBtn.classList.contains('playing');
        isPlaying ? pauseTrack() : playTrack();
    });

    nextBtn.addEventListener('click', () => {
        if (isShuffle) {
            musicIndex = Math.floor(Math.random() * songs.length);
        } else {
            musicIndex = (musicIndex + 1) % songs.length;
        }
        loadTrack(musicIndex);
        playTrack();
    });

    prevBtn.addEventListener('click', () => {
        musicIndex = (musicIndex - 1 + songs.length) % songs.length;
        loadTrack(musicIndex);
        playTrack();
    });

    // --- 4. شريط التقدم والوقت ---
    mainAudio.addEventListener('timeupdate', (e) => {
        const { currentTime, duration } = e.srcElement;
        if (duration) {
            const progressPercent = (currentTime / duration) * 100;
            progressBar.style.width = `${progressPercent}%`;

            // تحديث الوقت الحالي
            let currentMin = Math.floor(currentTime / 60);
            let currentSec = Math.floor(currentTime % 60);
            if (currentSec < 10) currentSec = `0${currentSec}`;
            currentTimeEl.innerText = `${currentMin}:${currentSec}`;
        }
    });

    mainAudio.addEventListener('loadeddata', () => {
        let audioDuration = mainAudio.duration;
        let totalMin = Math.floor(audioDuration / 60);
        let totalSec = Math.floor(audioDuration % 60);
        if (totalSec < 10) totalSec = `0${totalSec}`;
        durationEl.innerText = `${totalMin}:${totalSec}`;
    });

    progressArea.addEventListener('click', (e) => {
        let progressWidth = progressArea.clientWidth;
        let clickedOffsetX = e.offsetX;
        let songDuration = mainAudio.duration;
        mainAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
        playTrack();
    });

    // --- 5. التحكم في الصوت ---
    volumeSlider.addEventListener('input', (e) => {
        mainAudio.volume = e.target.value;
        if (e.target.value == 0) {
            volumeIcon.className = 'fas fa-volume-mute';
        } else if (e.target.value < 0.5) {
            volumeIcon.className = 'fas fa-volume-down';
        } else {
            volumeIcon.className = 'fas fa-volume-up';
        }
    });

    // --- 6. خلط وتكرار ---
    shuffleBtn.addEventListener('click', () => {
        isShuffle = !isShuffle;
        shuffleBtn.style.color = isShuffle ? 'var(--primary-color)' : 'var(--text-dim)';
    });

    repeatBtn.addEventListener('click', () => {
        isRepeat = !isRepeat;
        repeatBtn.style.color = isRepeat ? 'var(--primary-color)' : 'var(--text-dim)';
    });

    mainAudio.addEventListener('ended', () => {
        if (isRepeat) {
            loadTrack(musicIndex);
            playTrack();
        } else {
            nextBtn.click();
        }
    });

    // --- 7. البحث عن الأغاني ---
    searchSongs.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredSongs = songs.filter(song => 
            song.title.toLowerCase().includes(searchTerm) || 
            song.artist.toLowerCase().includes(searchTerm)
        );
        renderPlaylist(filteredSongs);
    });

    // --- 8. اختصارات لوحة المفاتيح ---
    window.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
            e.preventDefault();
            playPauseBtn.click();
        } else if (e.code === 'ArrowRight') {
            mainAudio.currentTime += 5;
        } else if (e.code === 'ArrowLeft') {
            mainAudio.currentTime -= 5;
        }
    });

    // --- 9. وضع الشاشة الكاملة ---
    fullscreenBtn.addEventListener('click', () => {
        fullPlayer.classList.add('active');
        initVisualizer();
    });

    document.querySelector('.close-full-player').addEventListener('click', () => {
        fullPlayer.classList.remove('active');
    });

    // --- 10. الإشعارات ---
    function showNotification(song) {
        notifTitle.innerText = song.title;
        notifArtist.innerText = song.artist;
        notifImg.src = `covers/${song.cover}`;
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }

    // --- 11. Audio Visualizer (المحلل الصوتي البصري) ---
    let visualizerInited = false;
    function initVisualizer() {
        if (visualizerInited) return;
        const canvas = document.getElementById('visualizer');
        const ctx = canvas.getContext('2d');
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const analyzer = audioCtx.createAnalyser();
        const source = audioCtx.createMediaElementSource(mainAudio);
        source.connect(analyzer);
        analyzer.connect(audioCtx.destination);
        analyzer.fftSize = 64;
        const bufferLength = analyzer.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        function draw() {
            requestAnimationFrame(draw);
            analyzer.getByteFrequencyData(dataArray);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const barWidth = (canvas.width / bufferLength) * 2.5;
            let barHeight;
            let x = 0;
            for (let i = 0; i < bufferLength; i++) {
                barHeight = dataArray[i] / 2;
                ctx.fillStyle = `rgb(29, 185, 84)`;
                ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
                x += barWidth + 1;
            }
        }
        draw();
        visualizerInited = true;
    }

    // إخفاء شاشة التحميل
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.getElementById('loader').style.opacity = '0';
            setTimeout(() => {
                document.getElementById('loader').style.display = 'none';
            }, 500);
        }, 1500);
    });

    // التشغيل الأولي
    loadSongsFromHTML();
    loadTrack(musicIndex);
});
