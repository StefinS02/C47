class game{
    constructor(){
        this.resetTitle = createElement("h2");
        this.resetButton = createButton("");

        this.leaderboardTitle = createElement("h2");

        this.leader1 = createElement("h2");
        this.leader2 = createElement("h2");

        this.playerMoving = false;
        this.leftKeyActive = false;
    }

    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data){
            gameState = data.val();
        });
    }

    update(state){
        database.ref("/").update({
            gameState: state
        });
    }

    start(){
        player = new Player();
        playerCount = player.getCount();

        form = new Form();
        form.display();

        Jet1 = createSprite(550, 750);
        Jet1.addImage("car1",Jet1Img);
        Jet1.scale = 0.8;

        Jet2 = createSprite(width/2+100, height-100);
        Jet2.addImage("car2", Jet2Img);
        Jet2.scale = 0.8;
  


    }
}