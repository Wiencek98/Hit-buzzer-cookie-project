let cookieCount = 0;
let chances = 3;
let level = 1;

document.getElementById('buzzer').addEventListener('click', function(){
    // this reduce chances by 1
    chances--;

    //no more chances end the game
    if(changes === 0) {
        endGame();
        return;
    }
    cookieCount++ // inccreases cookie count by 1 when buzzer is clicked
    
    document.getElementById('cookieCount').innerText = cookieCount;
    if(Math.random() < 0.5) {
        //increases lvl
        level++;

        //updated chances
        chances = 3;

        alert("Congratulations! You hit the buzzer with a cookie and reached level" + level + "!")

        document.getElementById("chances").innerText = chances;

    }
});

function endGame() {
    alert("Game over! You've used up all your chances. Your final score is" + cookieCount + "cookies!");
        cookieCount = 0;
        chances = 3;
        level = 1;
    document.getElementById("cookieCount").innerText - cookieCount;
    document.getElementById("chances").innerText = changed;
}


endGame()