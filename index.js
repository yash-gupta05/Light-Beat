const images = [
    "./images/dice1.png",
    "./images/dice2.png",
    "./images/dice3.png",
    "./images/dice4.png",
    "./images/dice5.png",
    "./images/dice6.png",
];


function RollDices() {
    const randomIndex1 = Math.floor(Math.random() * images.length);
    const randomIndex2 = Math.floor(Math.random() * images.length);
    const selectedImage1 = images[randomIndex1];
    const selectedImage2 = images[randomIndex2];
    document.querySelector('.img1').src = selectedImage1;
    document.querySelector('.img2').src = selectedImage2;

    let winnerText = "";

    if (randomIndex1 > randomIndex2) {
        winnerText = "Player 1 Wins!";
    } else if (randomIndex2 > randomIndex1) {
        winnerText = "Player 2 Wins!";
    } else {
        winnerText = "It's a Draw!";
    }
    document.getElementById('winnerText').textContent = winnerText;
    showModal();
}

function showModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}
