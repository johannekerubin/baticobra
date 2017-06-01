var game = new Phaser.Game(400, 600, Phaser.CANVAS, 'gameDiv');

var background;
var quit;
var maj;
var jk;

var mainState = {

    preload:function(){
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;

    game.load.image("background","img/bg.png")
    game.load.image("quit","img/quit.png")
    game.load.image("maj","img/maj.png")
    game.load.image("jk","img/jk.png")



    },

    create:function(){

    game.add.sprite(0,0,"background");

    quit = game.add.button(340,15,"quit",quit);
    quit.scale.x= .3;
    quit.scale.y= .3;

    maj = game.add.button(50,115,"maj");
    maj.scale.x= .1;
    maj.scale.y= .1;

    jk = game.add.button(200,250,"jk");
    jk.scale.x= .1;
    jk.scale.y= .1;

    maj = game.add.text(20,85,'Ma. Angelique Janica De Vera',{fill:"black",font:"18px Times New Roman"});
    jk = game.add.text(190,220,'Johanne Kerubin Agustin',{fill:"black",font:"18px Times New Roman"});
    BSIT = game.add.text(150,420,'III BSIT A',{fill:"black",font:"18px Times New Roman"});
    rufo = game.add.text(105,515,'Mr. Rufo N. Gabrillo Jr.',{fill:"black",font:"18px Times New Roman"});
    instructor = game.add.text(113,530,'Gwapong Instructor',{fill:"black",font:"18px Times New Roman"});

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