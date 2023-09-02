var buttonColors = ["red","blue","green","yellow"];

var gamePattern =[];

var userClickedPattern =[];






function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4 );

    var randomChoosenColor =buttonColors[randomNumber];

    gamePattern.push(randomChoosenColor);

    
    $("#"+ randomChoosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/"+randomChoosenColor+".mp3");
    audio.play()
}

function userClick(){
    $(".btn").click(function(){
        var userChosenColor = $(this).attr("id");
        userClickedPattern.push(userChosenColor);
    
        $("#"+ userChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
        var audio = new Audio("./sounds/"+userChosenColor+".mp3");
        audio.play()
    
    })
} 

var eve = true;

var level = 0;


$(document).keypress(function() {
    var eve = true;

    if(eve==true){
        level++;
        $("h1").text("Level"+level);
    }
    
  });



