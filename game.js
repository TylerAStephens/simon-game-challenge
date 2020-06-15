var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];


function nextSequence() {
  // Random Number Generator
  var randomNumber = Math.floor(Math.random() * 4);
  console.log(randomNumber);
  //Add random Colour to array
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  // Animation
  $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
  // Audio
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}
