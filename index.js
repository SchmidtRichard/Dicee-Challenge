/****** FIRST DICEE ******/

//Generates a random number between 1 and 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

//Generates a name for the dice images based on the variable randomNumber1
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;

//Add the image to the src attribute of the img element in the HTML file
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

/****** SECOND DICEE ******/

//Generates a random number between 1 and 6
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

//Generates a name for the dice images based on the variable randomNumber2
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

//Add the image to the src attritube of the img element in the HTML file
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//Display message for the winner
//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🥇 Player 1 Wins!";
}
//else if player 2 wins
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🥇";
}
//else both get the same number
else {
  document.querySelector("h1").innerHTML = "🥇 Draw! 🥇";
}