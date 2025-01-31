function showMessage() {
    document.getElementById('hiddenMessage').classList.remove('hidden');
    alert("Happy Valentine's Day, Chrish! ❤️ With love, Vinay");
}

// Generate floating hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);
