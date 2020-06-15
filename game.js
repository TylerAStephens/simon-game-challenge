var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

var userClickedPattern = [];

// Set game state before playing
var started = false;
var level = 0;

// Start Game with keypress
$(document).keypress(function () {
  if (!started) {
    //Change title once game starts
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});


$(".btn").click(function() {
  // Find selected id
  var userChosenColour = $(this).attr("id");
  //Add selected button id to array
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

});


function nextSequence() {
  // Update level
  level++;
  $("#level-title").text("Level " + level);

  // Random Number Generator
  var randomNumber = Math.floor(Math.random() * 4);
  console.log(randomNumber);
  //Add random Colour to array
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  // Animation
  $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
  // Audio
  playSound(randomChosenColour);

}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  // Add animation
  $("#" + currentColour).addClass("pressed");
  // Remove animation
  setTimeout(function(){
    $("#" + currentColour).removeClass("pressed");
  }, 100);

}
