var buttonColours=["red", "blue", "green", "yellow"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;
var pressed=false;
$(document).keypress(function(event){
    pressed=true;
    if(level===0){
    newSequence();
}
});
$(".btn").click(function(){
    if(pressed)
    {
        var userChosenColour=$(this).attr("id");
        userClickedPattern.push(userChosenColour);
        playSound(userChosenColour);
        animations(userChosenColour);
        // console.log(userClickedPattern);
        checkAnswer(userClickedPattern.length-1);
    }
})
function checkAnswer(currentIndex) {
    if(gamePattern[currentIndex]===userClickedPattern[currentIndex]){
        if (userClickedPattern.length === gamePattern.length){
        setTimeout(function(){
            newSequence();
        },1000);
    }   
    }
    else if(gamePattern[currentIndex]!==userClickedPattern[currentIndex]){
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over. Press any key to restart");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        startOver();
    }
}
function newSequence() {
    // console.log('newSequence');
    userClickedPattern=[]
    level++;
    $("#level-title").text("Level "+level);
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenButton=buttonColours[randomNumber];
    gamePattern.push(randomChosenButton);
    $("#"+randomChosenButton).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenButton);
}
function playSound(Color) {
    var audio=new Audio(Color+".mp3");
    audio.play();
}
function animations(Color) {
    $("#"+Color).addClass("pressed");
    setTimeout(function(){
        $("#"+Color).removeClass("pressed");
    },100)
}
function startOver() {
    level=0;
    gamePattern=[];
    userClickedPattern=[];
    pressed=false;
}
