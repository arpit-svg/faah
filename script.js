const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const proposal = document.getElementById('proposal-content');
const success = document.getElementById('success-content');
const hearts = document.getElementById('hearts-container');

let noCount = 0;
const scaleIncrement = 0.5;

noBtn.addEventListener('click', () => {
    noCount++;

    // Grow the Yes button
    const currentScale = 1 + (noCount * scaleIncrement);
    yesBtn.style.transform = `scale(${currentScale})`;

    // Funny texts for No button
    const phrases = [
        "No", "Are you sure?", "Really?", "Pookie please?",
        "Don't do this!", "I'm gonna cry...", "You're breaking my heart!",
        "Look at the sad panda!", "PLEASE!", "Okay last chance!"
    ];
    noBtn.textContent = phrases[Math.min(noCount, phrases.length - 1)];

    // Move No button slightly to make it annoyed
    const randomX = (Math.random() - 0.5) * 50;
    const randomY = (Math.random() - 0.5) * 50;
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

yesBtn.addEventListener('click', () => {
    proposal.classList.add('hidden');
    success.classList.remove('hidden');

    // Celebration
    createConfetti();
});

// Create slow background hearts
function spawnHeart() {
    const h = document.createElement('div');
    h.classList.add('heart');
    h.innerHTML = Math.random() > 0.5 ? '🐼' : '❤️';
    h.style.left = Math.random() * 100 + 'vw';
    h.style.fontSize = (Math.random() * 20 + 20) + 'px';
    h.style.animationDuration = (Math.random() * 10 + 15) + 's'; // 15-25s duration
    hearts.appendChild(h);

    setTimeout(() => h.remove(), 25000);
}
setInterval(spawnHeart, 500);

function createConfetti() {
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const c = document.createElement('div');
            c.classList.add('heart');
            c.innerHTML = '🎉';
            c.style.left = Math.random() * 100 + 'vw';
            c.style.top = '-10px';
            c.style.animation = `float 5s linear forwards`;
            hearts.appendChild(c);
        }, i * 50);
    }
}
