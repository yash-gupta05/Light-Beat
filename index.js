let pattern = [];
let patternEntered = [];
const colors = ["green", "red", "yellow", "blue"];
let started = false;
let level = 1;
let highScore = parseInt(localStorage.getItem("highScore")) || 0;

function startGame() {
    patternEntered = [];
    $("#level-title").text("Level " + level);
    updateScore();
    const num = Math.floor(Math.random() * 4);
    const color = colors[num];
    playSound(color);
    animatePress(color);
    pattern.push(color);
}

function playSound(color) {
    const audio = new Audio(`sounds/${color}.mp3`);
    audio.play();
}

function animatePress(color) {
    $(`#${color}`).addClass("pressed");
    setTimeout(() => {
        $(`#${color}`).removeClass("pressed");
    }, 100);
}

$(document).on("keydown", function() {
    if (!started) {
        startGame();
        started = true;
    }
});

$(".btn").on("click", function() {
    const color = this.id;
    playSound(color);
    patternEntered.push(color);
    animatePress(color);
    checkPattern(patternEntered.length - 1);
});

function checkPattern(index) {
    if (pattern[index] === patternEntered[index]) {
        if (pattern.length === patternEntered.length) {
            level++;
            if (level > highScore) {
                highScore = level-1;
                localStorage.setItem("highScore", highScore);
            }
            setTimeout(startGame, 1000);
        }
    } else {
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver() {
    pattern = [];
    patternEntered = [];
    started = false;
    level = 1;
    updateScore();
}

function updateScore() {
    $("#score-display").text("Score: " + (level - 1) + " | High Score: " + highScore);
}

// Initialize high score display
$(document).ready(function() {
    $("#score-display").text("Score: 0 | High Score: " + highScore);
});
