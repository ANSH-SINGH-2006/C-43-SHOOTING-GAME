class Form{
    constructor(){
        this.input=createInput("name");
        
        this.button=createButton('PLAY');
        
        this.greeting=createElement('h3');

        this.reset=createButton('Reset');

        //this.img=loadImage(gg);
    }
    hide(){

        this.greeting.hide();
        this.input.hide();
        this.button.hide();
    }

    display(){
   var title=createElement('h2');
   //fill("red");
   title.html("MULTIPLAYER SHOOTING GAME");
   title.position(displayWidth/2-50,0);
   this.input.position(displayWidth/2-40,displayHeight/2-80);
   this.button.position(displayWidth/2+30,displayHeight/2);
   this.reset.position(displayWidth-100,20);
   //this.img(displayWidth,displayHeight*5);

   

   this.button.mousePressed(()=>{   
       this.input.hide();
       this.button.hide();

       player.name=this.input.value();

       playerCount+=1;
       player.index=playerCount;

       player.update();
       player.updateCount(playerCount);

       this.greeting.html("Hello!! "+player.name + ", Invite your other friends");
       this.greeting.position(displayWidth/2-50,50);
   })

   this.reset.mousePressed(()=>{

    player.updateCount(0);
    game.update(0);
    Player.updateCarsAtEnd(0);
   })
   
    }

}