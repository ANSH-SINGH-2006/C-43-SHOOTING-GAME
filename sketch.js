//var ball;
var database;
var gameState=0;
var playerCount;
var form,player,game;
var allPlayers;
var distance=0;

var car1,car2,car3,car4,cars;
var car1_img, car2_img, car3_img, car4_img, track;

function preload(){

    gg=loadImage("js/b1.png");
    gg1=loadImage("js/b2.png");
}

function setup(){
    createCanvas(displayWidth,displayHeight);

    database=firebase.database();
    console.log(database);

    game=new Game();
    game.getState();
    game.start();
    

}




function draw(){
    background(gg);
    //image(gg1,200,300);
    if(playerCount===4){
        game.update(1);
    }

    if(gameState===1){

        clear();
        game.play();
    }

    if(gameState===2){

        game.end();
    }
}






   




