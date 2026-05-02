// ===== Navigation & Scroll Effects =====
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    // Update active nav link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });

        // Parallax effect
        const parallaxBg = document.querySelector('.parallax-bg');
        if (parallaxBg) {
            parallaxBg.style.backgroundPosition = `center ${window.scrollY * 0.5}px`;
        }
    });

    // Smooth scroll for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// ===== Album Player Data Structure =====
const albumsData = {
    album1: {
        title: 'نداء الروح',
        artist: 'موسطفى زيان',
        year: 2024,
        cover: './covers/album1.jpg',
        description: 'ألبوم حديث يجمع بين الأصالة والحداثة في تناغم فريد',
        songs: [
            { title: 'أغنية 1', file: './music/album1/song1.mp3', duration: '3:45' },
            { title: 'أغنية 2', file: './music/album1/song2.mp3', duration: '4:20' }
        ]
    },
    album2: {
        title: 'ليالي الذكريات',
        artist: 'موسطفى زيان',
        year: 2023,
        cover: './covers/album1.jpg',
        description: 'رحلة عاطفية عبر الزمن والموسيقى',
        songs: [
            { title: 'أغنية 1', file: './music/album1/song1.mp3', duration: '3:45' },
            { title: 'أغنية 2', file: './music/album1/song2.mp3', duration: '4:20' }
        ]
    },
    album3: {
        title: 'صوت الشارع',
        artist: 'موسطفى زيان',
        year: 2022,
        cover: './covers/album1.jpg',
        description: 'الحياة اليومية بألحان الراي الأصيل',
        songs: [
            { title: 'أغنية 1', file: './music/album1/song1.mp3', duration: '3:45' },
            { title: 'أغنية 2', file: './music/album1/song2.mp3', duration: '4:20' }
        ]
    }
};

// ===== Global Audio Player State =====
let currentAlbum = null;
let currentSongIndex = 0;
let isPlaying = false;
let audioElement = null;

// ===== Initialize Album Player =====
function initializeAlbumPlayer(albumId) {
    const album = albumsData[albumId];
    if (!album) return;

    currentAlbum = album;
    currentSongIndex = 0;

    // Create player HTML if it doesn't exist
    if (!document.getElementById('album-player')) {
        createPlayerUI();
    }

    updatePlayerUI();
    loadSong(0);
}

// ===== Create Player UI =====
function createPlayerUI() {
    const playerHTML = `
        <div id="album-player" class="album-player">
            <div class="player-header">
                <img id="playerCover" src="" alt="Album Cover" class="player-cover">
                <div class="player-info">
                    <h2 id="playerTitle"></h2>
                    <p id="playerArtist"></p>
                    <p id="playerYear"></p>
                </div>
            </div>

            <div class="player-description">
                <p id="playerDescription"></p>
            </div>

            <div class="social-suite">
                <a href="https://youtube.com" target="_blank" class="social-icon">
                    <i class="fab fa-youtube"></i>
                </a>
                <a href="https://instagram.com" target="_blank" class="social-icon">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="https://tiktok.com" target="_blank" class="social-icon">
                    <i class="fab fa-tiktok"></i>
                </a>
                <a href="https://spotify.com" target="_blank" class="social-icon">
                    <i class="fab fa-spotify"></i>
                </a>
            </div>

            <div class="visualizer-container">
                <canvas id="visualizer"></canvas>
            </div>

            <div class="playlist">
                <h3>قائمة الأغاني</h3>
                <div id="songsList" class="songs-list"></div>
            </div>

            <div class="player-controls">
                <div class="progress-container">
                    <span id="currentTime">0:00</span>
                    <div class="progress-bar" id="progressBar">
                        <div class="progress-fill" id="progressFill"></div>
                    </div>
                    <span id="duration">0:00</span>
                </div>

                <div class="control-buttons">
                    <button id="prevBtn" class="control-btn"><i class="fas fa-step-backward"></i></button>
                    <button id="playPauseBtn" class="control-btn play-btn"><i class="fas fa-play"></i></button>
                    <button id="nextBtn" class="control-btn"><i class="fas fa-step-forward"></i></button>
                </div>

                <div class="volume-container">
                    <i class="fas fa-volume-up"></i>
                    <input type="range" id="volumeSlider" min="0" max="1" step="0.1" value="0.8">
                </div>
            </div>

            <audio id="audioPlayer"></audio>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', playerHTML);
    attachPlayerEvents();
}

// ===== Update Player UI =====
function updatePlayerUI() {
    const album = currentAlbum;
    document.getElementById('playerCover').src = album.cover;
    document.getElementById('playerTitle').textContent = album.title;
    document.getElementById('playerArtist').textContent = album.artist;
    document.getElementById('playerYear').textContent = album.year;
    document.getElementById('playerDescription').textContent = album.description;

    // Render songs list
    const songsList = document.getElementById('songsList');
    songsList.innerHTML = '';
    album.songs.forEach((song, index) => {
        const songDiv = document.createElement('div');
        songDiv.className = `song-item ${index === currentSongIndex ? 'active' : ''}`;
        songDiv.innerHTML = `
            <span class="song-number">${index + 1}</span>
            <span class="song-title">${song.title}</span>
            <span class="song-duration">${song.duration}</span>
        `;
        songDiv.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(index);
            play();
        });
        songsList.appendChild(songDiv);
    });
}

// ===== Load Song =====
function loadSong(index) {
    if (!currentAlbum || !currentAlbum.songs[index]) return;

    const song = currentAlbum.songs[index];
    audioElement = document.getElementById('audioPlayer');
    audioElement.src = song.file;

    // Update active song in list
    document.querySelectorAll('.song-item').forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });

    // Update duration display
    audioElement.addEventListener('loadedmetadata', () => {
        const duration = audioElement.duration;
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration % 60);
        document.getElementById('duration').textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    });
}

// ===== Play/Pause Functions =====
function play() {
    if (!audioElement) return;
    audioElement.play();
    isPlaying = true;
    document.getElementById('playPauseBtn').innerHTML = '<i class="fas fa-pause"></i>';
    initVisualizer();
}

function pause() {
    if (!audioElement) return;
    audioElement.pause();
    isPlaying = false;
    document.getElementById('playPauseBtn').innerHTML = '<i class="fas fa-play"></i>';
}

// ===== Player Events =====
function attachPlayerEvents() {
    const playPauseBtn = document.getElementById('playPauseBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const progressBar = document.getElementById('progressBar');
    const volumeSlider = document.getElementById('volumeSlider');
    audioElement = document.getElementById('audioPlayer');

    playPauseBtn.addEventListener('click', () => {
        if (isPlaying) {
            pause();
        } else {
            play();
        }
    });

    prevBtn.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex - 1 + currentAlbum.songs.length) % currentAlbum.songs.length;
        loadSong(currentSongIndex);
        play();
    });

    nextBtn.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex + 1) % currentAlbum.songs.length;
        loadSong(currentSongIndex);
        play();
    });

    // Progress bar
    audioElement.addEventListener('timeupdate', () => {
        const percent = (audioElement.currentTime / audioElement.duration) * 100;
        document.getElementById('progressFill').style.width = `${percent}%`;

        const currentMin = Math.floor(audioElement.currentTime / 60);
        const currentSec = Math.floor(audioElement.currentTime % 60);
        document.getElementById('currentTime').textContent = `${currentMin}:${currentSec < 10 ? '0' : ''}${currentSec}`;
    });

    progressBar.addEventListener('click', (e) => {
        const rect = progressBar.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        audioElement.currentTime = percent * audioElement.duration;
    });

    // Volume control
    volumeSlider.addEventListener('input', (e) => {
        audioElement.volume = e.target.value;
    });

    // Auto-play next song
    audioElement.addEventListener('ended', () => {
        nextBtn.click();
    });
}

// ===== Audio Visualizer =====
let visualizerInitialized = false;

function initVisualizer() {
    if (visualizerInitialized) return;

    const canvas = document.getElementById('visualizer');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const analyzer = audioContext.createAnalyser();
        const source = audioContext.createMediaElementSource(audioElement);
        source.connect(analyzer);
        analyzer.connect(audioContext.destination);
        analyzer.fftSize = 256;

        const bufferLength = analyzer.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        function draw() {
            requestAnimationFrame(draw);
            analyzer.getByteFrequencyData(dataArray);

            ctx.fillStyle = 'rgba(10, 10, 10, 0.2)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const barWidth = (canvas.width / bufferLength) * 2.5;
            let barHeight;
            let x = 0;

            for (let i = 0; i < bufferLength; i++) {
                barHeight = (dataArray[i] / 255) * canvas.height;

                const hue = (i / bufferLength) * 60;
                ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;
                ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);

                x += barWidth + 1;
            }
        }

        draw();
        visualizerInitialized = true;
    } catch (e) {
        console.log('Visualizer not supported');
    }
}

// ===== Export for Album Pages =====
window.initializeAlbumPlayer = initializeAlbumPlayer;
