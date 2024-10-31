function celebrateDiwali() {
    // Text-to-speech for "Happy Diwali"
    const message = new SpeechSynthesisUtterance("Happy diwali to all from vishal");
    window.speechSynthesis.speak(message);

    // Show fireworks
    const fireworksContainer = document.getElementById("fireworks");
    fireworksContainer.style.display = "block";

    // Generate and animate fireworks
    for (let i = 0; i < 20; i++) {
        createFirework(fireworksContainer);
    }

    // Hide fireworks after 3 seconds
    setTimeout(() => {
        fireworksContainer.innerHTML = "";
        fireworksContainer.style.display = "none";
    }, 3000);
}

function createFirework(container) {
    const firework = document.createElement("div");
    firework.classList.add("firework");
    firework.style.left = Math.random() * 100 + "vw";
    firework.style.top = Math.random() * 100 + "vh";

    const size = Math.random() * 10 + 10 + "px";
    firework.style.width = size;
    firework.style.height = size;
    firework.style.animation = "explode 1s ease-out forwards";

    container.appendChild(firework);
}

// CSS for Fireworks Animation
const styleSheet = document.createElement("style");
styleSheet.textContent = `
@keyframes explode {
    0% { opacity: 1; transform: scale(1); }
    100% { opacity: 0; transform: scale(2.5); }
}

.firework {
    position: absolute;
    background-color: #ffeb3b;
    border-radius: 50%;
    opacity: 0.9;
}`;
document.head.appendChild(styleSheet);
