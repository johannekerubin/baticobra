var game = new Phaser.Game(400, 600, Phaser.CANVAS, 'gameDiv');

var background;
var quit;

var mainState = {

    preload:function(){
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;

    game.load.image("background","img/bg.png")
    game.load.image("quit","img/quit.png")

    },

    create:function(){

    game.add.sprite(0,0,"background");

    quit = game.add.button(340,15,"quit",quit);
    quit.scale.x= .3;
    quit.scale.y= .3;

    instructions = game.add.text(90,85,'INSTRUCTIONS',{fill:"black",font:"30px Times New Roman"});
    instructions1 = game.add.text(90,220,'This game is played by two players.',{fill:"black",font:"18px Times New Roman"});
    instructions2 = game.add.text(50,240,'As the mechanics of our game, each player',{fill:"black",font:"18px Times New Roman"});
    instructions3 = game.add.text(50,260,'holds a stick. There is a small stick that',{fill:"black",font:"18px Times New Roman"});
    instructions4 = game.add.text(50,280,'must toss by the player. The game is over if',{fill:"black",font:"18px Times New Roman"});
    instructions5 = game.add.text(50,300,'the character did not catch the small stick.',{fill:"black",font:"18px Times New Roman"});


    },


    update: function() {
    },
}

function quit ()
{
     window.location.href="bati1.html";
  {quit.frame=0}  
setTimeout(function(){
    
quit.frame=0;
game._paused=false;
},50);
}

    game.state.add("mainState",mainState);
    game.state.start("mainState");