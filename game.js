var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

var userClickedPattern = [];

// Set game state before playing
var started = false;
var level = 0;

// Start Game with keypress
$(document).keypress(function() {
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

  // Check users answer
  checkAnswer(userClickedPattern.length - 1);
});


function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("Success");

    if (userClickedPattern.length === gamePattern.length) {

      setTimeout(function() {
      nextSequence();
      }, 1000);

    }

  } else {
    console.log("Wrong");

    playSound("wrong");

    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("gamer-over")
    }, 200);

    $("#level-title").text("Game Over, Press Any Key to Restart");
  }

}

function nextSequence() {

  userClickedPattern = [];
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
  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100);

}
