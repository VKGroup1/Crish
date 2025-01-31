// Countdown to Valentine's Day
function countdown() {
    let today = new Date();
    let valentines = new Date(today.getFullYear(), 1, 14); // Feb 14

    if (today > valentines) {
        valentines.setFullYear(today.getFullYear() + 1); 
    }

    let diff = valentines - today;
    let daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));

    document.getElementById("countdown").innerText = `Only ${daysLeft} days left! 💕`;
}

countdown();

// Reveal Love Message
document.getElementById("revealMessage").addEventListener("click", function() {
    document.getElementById("loveMessage").classList.remove("hidden");
});

// Generate Floating Hearts
function createHeart() {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 500);