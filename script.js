// ===== Multi-Language Support System =====
const translations = {
    ar: {
        nav: {
            home: 'الرئيسية',
            biography: 'السيرة',
            discography: 'الألبومات',
            contact: 'التواصل'
        },
        hero: {
            title: 'MUSTAPHA ZYAN',
            subtitle: 'الصوت الحديث للراي الكلاسيكي',
            explore: 'استكشف الألبومات',
            follow: 'تابعني'
        },
        biography: {
            title: 'من هو موسطفى زيان؟',
            text1: 'موسطفى زيان هو فنان راي حديث يجمع بين التقاليد الكلاسيكية والصوت المعاصر.',
            text2: 'من خلال ألبوماته المتعددة، يقدم موسطفى تجربة موسيقية فريدة تعكس الروح الشرقية.',
            years: 'سنة في الفن',
            albums: 'ألبومات',
            followers: 'متابع'
        },
        discography: {
            title: 'الألبومات'
        },
        contact: {
            title: 'تابعني على'
        },
        player: {
            playlist: 'قائمة الأغاني',
            track: 'الأغنية',
            duration: 'المدة'
        },
        album: {
            year: 'السنة',
            description: 'الوصف',
            songs: 'قائمة الأغاني'
        }
    },
    en: {
        nav: {
            home: 'Home',
            biography: 'Biography',
            discography: 'Albums',
            contact: 'Contact'
        },
        hero: {
            title: 'MUSTAPHA ZYAN',
            subtitle: 'Modern Voice of Classic Rai',
            explore: 'Explore Albums',
            follow: 'Follow Me'
        },
        biography: {
            title: 'Who is Mustapha Zyan?',
            text1: 'Mustapha Zyan is a modern Rai artist who blends classical traditions with contemporary sound.',
            text2: 'Through his multiple albums, Mustapha offers a unique musical experience that reflects Eastern spirit.',
            years: 'Years in Music',
            albums: 'Albums',
            followers: 'Followers'
        },
        discography: {
            title: 'Albums'
        },
        contact: {
            title: 'Follow Me On'
        },
        player: {
            playlist: 'Playlist',
            track: 'Track',
            duration: 'Duration'
        },
        album: {
            year: 'Year',
            description: 'Description',
            songs: 'Songs'
        }
    },
    fr: {
        nav: {
            home: 'Accueil',
            biography: 'Biographie',
            discography: 'Albums',
            contact: 'Contact'
        },
        hero: {
            title: 'MUSTAPHA ZYAN',
            subtitle: 'Voix Moderne du Raï Classique',
            explore: 'Explorer les Albums',
            follow: 'Me Suivre'
        },
        biography: {
            title: 'Qui est Mustapha Zyan?',
            text1: 'Mustapha Zyan est un artiste de raï moderne qui mélange les traditions classiques avec le son contemporain.',
            text2: 'À travers ses nombreux albums, Mustapha offre une expérience musicale unique qui reflète l\'esprit oriental.',
            years: 'Ans de Musique',
            albums: 'Albums',
            followers: 'Abonnés'
        },
        discography: {
            title: 'Albums'
        },
        contact: {
            title: 'Me Suivre Sur'
        },
        player: {
            playlist: 'Liste de Lecture',
            track: 'Piste',
            duration: 'Durée'
        },
        album: {
            year: 'Année',
            description: 'Description',
            songs: 'Chansons'
        }
    }
};

// Current language state
let currentLanguage = localStorage.getItem('language') || 'ar';

// Get translation
function t(path) {
    const keys = path.split('.');
    let value = translations[currentLanguage];
    for (let key of keys) {
        value = value[key];
    }
    return value;
}

// Change language
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    updatePageLanguage();
}

// Update page content with new language
function updatePageLanguage() {
    // This will be called by individual pages to update their content
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: currentLanguage } }));
}

// ===== Navigation & Scroll Effects =====
document.addEventListener('DOMContentLoaded', () => {
    // Set initial language
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';

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

// ===== Album Player Data Structure (Enhanced) =====
const albumsData = {
    album1: {
        title: 'نداء الروح',
        titleEn: 'Soul\'s Call',
        titleFr: 'L\'Appel de l\'Âme',
        artist: 'موسطفى زيان',
        year: 2024,
        cover: './covers/album1.jpg',
        description: 'ألبوم حديث يجمع بين الأصالة والحداثة في تناغم فريد',
        descriptionEn: 'A modern album that blends authenticity with modernity in unique harmony',
        descriptionFr: 'Un album moderne qui mélange l\'authenticité avec la modernité dans une harmonie unique',
        songs: [
            { title: 'أغنية 1', titleEn: 'Song 1', titleFr: 'Chanson 1', file: './music/album1/song1.mp3', duration: '3:45' },
            { title: 'أغنية 2', titleEn: 'Song 2', titleFr: 'Chanson 2', file: './music/album1/song2.mp3', duration: '4:20' }
        ]
    },
    album2: {
        title: 'ليالي الذكريات',
        titleEn: 'Nights of Memories',
        titleFr: 'Nuits de Souvenirs',
        artist: 'موسطفى زيان',
        year: 2023,
        cover: './covers/album1.jpg',
        description: 'رحلة عاطفية عبر الزمن والموسيقى',
        descriptionEn: 'An emotional journey through time and music',
        descriptionFr: 'Un voyage émotionnel à travers le temps et la musique',
        songs: [
            { title: 'أغنية 1', titleEn: 'Song 1', titleFr: 'Chanson 1', file: './music/album1/song1.mp3', duration: '3:45' },
            { title: 'أغنية 2', titleEn: 'Song 2', titleFr: 'Chanson 2', file: './music/album1/song2.mp3', duration: '4:20' }
        ]
    },
    album3: {
        title: 'صوت الشارع',
        titleEn: 'Street Voice',
        titleFr: 'Voix de la Rue',
        artist: 'موسطفى زيان',
        year: 2022,
        cover: './covers/album1.jpg',
        description: 'الحياة اليومية بألحان الراي الأصيل',
        descriptionEn: 'Daily life with authentic Rai melodies',
        descriptionFr: 'La vie quotidienne avec des mélodies de raï authentiques',
        songs: [
            { title: 'أغنية 1', titleEn: 'Song 1', titleFr: 'Chanson 1', file: './music/album1/song1.mp3', duration: '3:45' },
            { title: 'أغنية 2', titleEn: 'Song 2', titleFr: 'Chanson 2', file: './music/album1/song2.mp3', duration: '4:20' }
        ]
    }
};

// ===== Global Audio Player State =====
let currentAlbum = null;
let currentSongIndex = 0;
let isPlaying = false;
let audioElement = null;

// ===== Get Localized Title =====
function getLocalizedTitle(album, field) {
    const fieldKey = field + (currentLanguage === 'en' ? 'En' : currentLanguage === 'fr' ? 'Fr' : '');
    return album[fieldKey] || album[field];
}

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
                <h3 id="playlistTitle"></h3>
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
    document.getElementById('playerTitle').textContent = getLocalizedTitle(album, 'title');
    document.getElementById('playerArtist').textContent = album.artist;
    document.getElementById('playerYear').textContent = album.year;
    document.getElementById('playerDescription').textContent = getLocalizedTitle(album, 'description');
    document.getElementById('playlistTitle').textContent = t('player.playlist');

    // Render songs list
    const songsList = document.getElementById('songsList');
    songsList.innerHTML = '';
    album.songs.forEach((song, index) => {
        const songDiv = document.createElement('div');
        songDiv.className = `song-item ${index === currentSongIndex ? 'active' : ''}`;
        const songTitle = currentLanguage === 'en' ? song.titleEn : currentLanguage === 'fr' ? song.titleFr : song.title;
        songDiv.innerHTML = `
            <span class="song-number">${index + 1}</span>
            <span class="song-title">${songTitle}</span>
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
window.changeLanguage = changeLanguage;
window.t = t;
