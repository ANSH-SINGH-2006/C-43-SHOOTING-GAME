class Game{
    constructor(){


    }

    getState(){
        var gameStateRef= database.ref('gameState');
        gameStateRef.on("value",(data)=>{
            gameState=data.val();
        })
        


    }

    update(state){

        database.ref('/').update({
            gameState:state

        })

    }

    async start(){
        if(gameState===0){
            player=new Player();
            var playerCountRef=await database.ref('playerCount').once("value");

            if(playerCountRef.exists()){

                playerCount=playerCountRef.val();
                player.getCount();
            }
            
            form=new Form();
            form.display();
        }

        car1=createSprite(100,200);
        //car1.addImage("car1",car1_img);
        car2=createSprite(300,200);
        //car2.addImage("car2",car2_img);
        car3=createSprite(500,200);
        //car3.addImage("car3",car3_img);
        car4=createSprite(700,200);
        //car4.addImage("car4",car4_img);

        cars=[car1,car2,car3,car4];
    }
    play(){

        form.hide();
        //textSize(30);
        //text("GAME START",120,100);
        Player.getPlayerInfo();
        Player.getCarsAtEnd();

        if(allPlayers!==undefined){
            //var display_position=130;

            background(gg1);
            


                var index=0;
                var x=175;
                var y;


            for(var plr in allPlayers){

                index=index+1;

                x=x+200;

                y=displayHeight-allPlayers[plr].distance;
                
                cars[index-1].x=x;
                cars[index-1].y=y;

                


               // if(plr==="player"+player.index)
                //fill("red");
                //else
                //fill("black");

               // display_position+=30;
                //textSize(15);
                //text(allPlayers[plr].name+" : "+allPlayers[plr].distance,120,display_position)

                
            }
        }

        if(keyDown("UP_ARROW")&&player.index!==null){

            player.distance+=50;
            player.update();
        }

if(player.distance>5000){

    gameState=2;
    Player.rank+=1;
    Player.updateCarsAtEnd(Player.rank);
   // game.update(2);
}

        //drawSprites();
    }

end(){

    console.log("gameEnded");
    console.log(Player.rank);
    //game.update(2);
   // drawSprites();
}

}