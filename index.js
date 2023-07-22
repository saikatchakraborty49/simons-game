var buttonColours=["red", "blue", "green", "yellow"];
var gamePattern=[];
var userClickedPattern=[];
$(".btn").click(function(){
    var userChosenColour=$(this).attr("id");
    userClickedPattern.push(userChosenColour);
})
// function newSequence() {
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenButton=buttonColours[randomNumber];
    gamePattern.push(randomChosenButton);
    $("#"+randomChosenButton).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio=new Audio("sounds/"+randomChosenButton+".mp3");
    audio.play();
    
// }