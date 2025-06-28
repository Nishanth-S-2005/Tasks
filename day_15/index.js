// Generate random number for Player 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", randomDiceImage1);

// Generate random number for Player 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", randomDiceImage2);

// Change the heading based on winner
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "Player 1 Wins! 🚩";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").textContent = "Draw!";
}