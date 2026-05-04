// ===== Global Variables =====
let currentLanguage = 'en';
let currentSongIndex = 0;
let currentAlbum = null;

// ===== Change Language Function =====
function changeLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.lang-btn[onclick="changeLanguage('${lang}')"]`).classList.add('active');
    
    // Dispatch custom event for page-specific updates
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: currentLanguage } }));
}

// ===== Performance Optimization: Debounce Function =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===== Navigation & Scroll Effects =====
document.addEventListener('DOMContentLoaded', () => {
    // Set initial language
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';

    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    // Update active nav link on scroll (debounced for performance)
    const handleScroll = debounce(() => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });

        // Parallax effect (using requestAnimationFrame for smooth performance)
        const parallaxBg = document.querySelector('.parallax-bg');
        if (parallaxBg) {
            requestAnimationFrame(() => {
                parallaxBg.style.backgroundPosition = `center ${window.scrollY * 0.5}px`;
            });
        }
    }, 100);
    
    window.addEventListener('scroll', handleScroll, { passive: true });

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

// ===== Performance: Cache DOM Elements =====
const domCache = {};
function getCachedElement(selector) {
    if (!domCache[selector]) {
        domCache[selector] = document.querySelector(selector);
    }
    return domCache[selector];
}

// ===== Album Player Data Structure (Enhanced) =====
const albumsData = {
    album1: {
        id: 'album1',
        title: 'Soul\'s Call',
        titleEn: 'Soul\'s Call',
        artist: 'Mustapha Zyan',
        year: 2024,
        description: 'An emotional journey through modern Rai music',
        descriptionEn: 'An emotional journey through modern Rai music',
        cover: '../covers/album1.jpg',
        songs: [
            { title: 'Track 1', titleEn: 'Track 1', file: '../music/album1/song1.mp3', duration: '3:45' },
            { title: 'Track 2', titleEn: 'Track 2', file: '../music/album1/song2.mp3', duration: '4:20' }
        ]
    },
    album2: {
        id: 'album2',
        title: 'Nights of Memory',
        titleEn: 'Nights of Memory',
        artist: 'Mustapha Zyan',
        year: 2023,
        description: 'A soulful exploration of memories and emotions',
        descriptionEn: 'A soulful exploration of memories and emotions',
        cover: '../covers/album1.jpg',
        songs: [
            { title: 'Track 1', titleEn: 'Track 1', file: '../music/album2/song1.mp3', duration: '3:50' },
            { title: 'Track 2', titleEn: 'Track 2', file: '../music/album2/song2.mp3', duration: '4:15' }
        ]
    },
    album3: {
        id: 'album3',
        title: 'Street Voice',
        titleEn: 'Street Voice',
        artist: 'Mustapha Zyan',
        year: 2022,
        description: 'Authentic street sounds with traditional Rai roots',
        descriptionEn: 'Authentic street sounds with traditional Rai roots',
        cover: '../covers/album1.jpg',
        songs: [
            { title: 'Track 1', titleEn: 'Track 1', file: '../music/album3/song1.mp3', duration: '3:40' },
            { title: 'Track 2', titleEn: 'Track 2', file: '../music/album3/song2.mp3', duration: '4:10' }
        ]
    }
};

// ===== Initialize Album Player =====
function initializeAlbumPlayer(albumId) {
    currentAlbum = albumsData[albumId];
    currentSongIndex = 0;
    updatePlayerUI();
}

// ===== Update Player UI =====
function updatePlayerUI() {
    if (!currentAlbum) return;
    
    const album = currentAlbum;
    const playerCover = document.getElementById('playerCover');
    const albumTitle = document.getElementById('albumTitle');
    const artistName = document.getElementById('artistName');
    const albumYear = document.getElementById('albumYear');
    const albumDescription = document.getElementById('albumDescription');
    const playlistTitle = document.getElementById('playlistTitle');
    const trackHeader = document.getElementById('trackHeader');
    const durationHeader = document.getElementById('durationHeader');
    const songsList = document.getElementById('songsList');

    if (playerCover) playerCover.src = album.cover;
    if (albumTitle) albumTitle.textContent = album.title;
    if (artistName) artistName.textContent = album.artist;
    if (albumYear) albumYear.textContent = album.year;
    if (albumDescription) albumDescription.textContent = album.description;
    if (playlistTitle) playlistTitle.textContent = 'Playlist';
    if (trackHeader) trackHeader.textContent = 'Track';
    if (durationHeader) durationHeader.textContent = 'Duration';

    if (songsList) {
        songsList.innerHTML = '';
        album.songs.forEach((song, index) => {
            const tr = document.createElement('tr');
            tr.className = `song-row ${index === currentSongIndex ? 'active' : ''}`;
            tr.innerHTML = `
                <td class="col-number">${index + 1}</td>
                <td class="col-title">${song.title}</td>
                <td class="col-duration">${song.duration}</td>
            `;
            tr.addEventListener('click', () => {
                currentSongIndex = index;
                loadSong(index);
                play();
            });
            songsList.appendChild(tr);
        });
    }
}

// ===== Load Song =====
function loadSong(index) {
    if (!currentAlbum || !currentAlbum.songs[index]) return;
    
    const song = currentAlbum.songs[index];
    const audioPlayer = document.getElementById('audioPlayer');
    if (audioPlayer) {
        audioPlayer.src = song.file;
    }
    
    currentSongIndex = index;
    updateNowPlayingInfo();
    updateActivePlaylistItem();
}

// ===== Update Now Playing Info =====
function updateNowPlayingInfo() {
    if (!currentAlbum || !currentAlbum.songs[currentSongIndex]) return;
    
    const song = currentAlbum.songs[currentSongIndex];
    const nowPlayingTitle = document.getElementById('nowPlayingTitle');
    const nowPlayingArtist = document.getElementById('nowPlayingArtist');
    
    if (nowPlayingTitle) nowPlayingTitle.textContent = song.title;
    if (nowPlayingArtist) nowPlayingArtist.textContent = currentAlbum.artist;
}

// ===== Update Active Playlist Item =====
function updateActivePlaylistItem() {
    document.querySelectorAll('.song-row').forEach((row, index) => {
        row.classList.toggle('active', index === currentSongIndex);
    });
}

// ===== Play Function =====
function play() {
    const audioPlayer = document.getElementById('audioPlayer');
    if (audioPlayer) {
        audioPlayer.play();
        const playPauseBtn = document.getElementById('playPauseBtn');
        if (playPauseBtn) {
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        }
    }
}

// ===== Pause Function =====
function pause() {
    const audioPlayer = document.getElementById('audioPlayer');
    if (audioPlayer) {
        audioPlayer.pause();
        const playPauseBtn = document.getElementById('playPauseBtn');
        if (playPauseBtn) {
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
    }
}

// ===== Get Localized Title =====
function getLocalizedTitle(obj, key) {
    if (currentLanguage === 'en' && obj[key + 'En']) {
        return obj[key + 'En'];
    }
    return obj[key] || '';
}

// ===== Translation Helper =====
function t(key) {
    return key; // Placeholder for future translations
}
