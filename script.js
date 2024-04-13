let cookieCount = 0;
let chances = 3;
let level = 1;


document.addEventListener("DOMContentLoaded", function() {
// ------------------------------- FUNCTIONS

function playSound(soundId) {
    var sound = document.getElementById(soundId);
    if (sound) {
        sound.currentTime = 0; // Reset sound to start
        sound.play();
    } else {
        console.error("Audio element with ID '" + soundId + "' not found.");
    }
}




function playBuzzerSound() {
    var buzzerSound = document.getElementById("buzzerSound");
    buzzerSound.currentTime  // Reset sound to start
    buzzerSound.play();
}

function throwCookie() {
    // Reduce chances by 1
    chances--;

    // If no more chances left, end the game
    if (chances === 0) {
        endGame();
        return;
    }

    // Increase cookie count by 1 when cookie hits the buzzer
    if (cookieHitsBuzzer()) {
        cookieCount++;
        
        // Update the cookie count displayed on the page
        document.getElementById("cookieCount").innerText = cookieCount;

        // Check if the player has hit the buzzer with a cookie
        if (Math.random() < 0.5) {
            // Player successfully hit the buzzer with a cookie
            // Increase level
            level++;

            // Update chances
            chances = 3;

            // Show current level
            alert("Congratulations! You hit the buzzer with a cookie and reached level " + level + "!");

            // Update chances displayed on the page
            document.getElementById("chances").innerText = chances;
        }
    }
};

function cookieHitsBuzzer() {
    // Simulate the chance of hitting the buzzer with a cookie
    // For simplicity, let's assume a 50% chance of hitting the buzzer
    return Math.random() < 0.5;
}

function endGame() {
    // Game over
    alert("Game over! You've used up all your chances. Your final score is " + cookieCount + " cookies!");
    // Reset variables
    cookieCount = 0;
    chances = 3;
    level = 1;
    // Update UI
    document.getElementById("cookieCount").innerText = cookieCount;
    document.getElementById("chances").innerText = chances;
}

document.addEventListener("click", function(event) {
    if (event.target.id === "buzzer") return; // Ignore clicks on the buzzer itself
    throwCookie();
});

document.getElementById("buzzer").addEventListener("click", function() {
    playBuzzerSound();
})})
