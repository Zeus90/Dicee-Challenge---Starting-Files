var randomNum1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNum1 + ".png";

var randomImageSource = "./images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randNum2 = Math.floor(Math.random() * 6) +1;

var ranImageSource2 = "./images/dice" + randNum2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", ranImageSource2);