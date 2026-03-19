// 1. Generate Twinkling Stars
function createStars() {
    const container = document.getElementById('stars');
    const starCount = 150;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 3 + 'px';
        star.style.width = size;
        star.style.height = size;
        star.style.top = Math.random() * 100 + '%';
        star.style.left = Math.random() * 100 + '%';
        star.style.setProperty('--duration', Math.random() * 3 + 2 + 's');
        container.appendChild(star);
    }
}

// 2. Typing Text Effect
const message = "Every Eid becomes more meaningful when I have you by my side. You are the most beautiful 'Chand' (moon) I have ever seen. Thank you for filling my life with love, laughter, and endless happiness. I can't wait to celebrate many more Eids together. You are my forever blessing. ❤️";
let index = 0;

function typeEffect() {
    if (index < message.length) {
        document.getElementById("typing-text").innerHTML += message.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}

// 3. Music Control
const bgMusic = document.getElementById("bgMusic");
let isPlaying = false;

function toggleMusic() {
    if (isPlaying) {
        bgMusic.pause();
        document.getElementById("musicIcon").innerText = "🔇";
    } else {
        bgMusic.play();
        document.getElementById("musicIcon").innerText = "🎵";
    }
    isPlaying = !isPlaying;
}

// 4. Surprise Modal
function showSurprise() {
    document.getElementById("overlay").style.display = "flex";
}

function closeSurprise() {
    document.getElementById("overlay").style.display = "none";
}

// Initialize
window.onload = () => {
    createStars();
    // Start typing after a short delay
    setTimeout(typeEffect, 1000);
};