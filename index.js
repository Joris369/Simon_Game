let buttonColours = ["red","blue","green","yellow"];
let randomChosenColour;
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let started = false;
// -- GAME FUNCTIONS ------------------------------
//  FUNCTION THAT GETS A RANDOM SEQUENCE
function nextSequence(){
  
  level++;
  $("h1").text(`level ${level}`);


  let randomNumber = Math.floor(Math.random() * 4);
  randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $(`.${randomChosenColour}`).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  
  // var audio = new Audio(`sounds/${randomChosenColour}.mp3`);
  // audio.play();
  // $(`.${randomChosenColour}`).fadeIn();

  //changes the level of the game
  
  
  userClickedPattern = []
}
// -------------------------------------------------------
// function that plays the sound of the chosen color
function playSound(chosenColor){
  var audio = new Audio(`sounds/${chosenColor}.mp3`);
  audio.play();
}
// --------------------------------------------------------
//function that animates the button pressed
function animatePress(buttonClicked){
  $(`.${buttonClicked}`).addClass("pressed");
  setTimeout(function(){
    $(`.${buttonClicked}`).removeClass("pressed");
  },100)
}
// --------------------------------------------------------

// ---- function to check the user answer

function CheckAnswer(currentLevel){
  if (currentLevel === gamePattern[userClickedPattern.length-1]){
  }else{
    $("body").addClass("game-over");
    playSound("wrong");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200)
    startOver();
    
  }
}

function startOver(){
  $("h1").text("game over, press any key to restart");
  gamePattern = [];
  level = 0;
  started = false;
}

// ---------------------------------------

$(".btn").on("click",function(){

  let userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  console.log(userClickedPattern);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  CheckAnswer(userChosenColor);
  if (userClickedPattern.length === level && started){
    setTimeout(function(){
      nextSequence();
    },1000)
    
  }


});

//press any key to start

$(document).keydown(function(){
  if(!started){

    $("h1").text("level" + level);
    nextSequence();
    started = true;

  }
})





