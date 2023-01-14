class bullet{

    constructor(game,Ex,Ey,facingDir){
        this.game = game;

        this.x = Ex + 90;
        this.y = Ey + 20;


        this.speed = 300;
        this.anamation = facingDir;

        this.animationList = [];
        this.animationIndex = 0;

        this.animationList[0] = new Animator(ASSET_MANAGER.getAsset("./BR.png"),0,0,45,21,1,0.1);  
        this.animationList[1] = new Animator(ASSET_MANAGER.getAsset("./BL.png"),0,0,45,17,1,0.1);

        
        
    };

    update(){ 
        if(this.anamation==0){
            this.x += this.speed*this.game.clockTick;
        }else if(this.anamation==1){
            this.x -= this.speed*this.game.clockTick;
        }
        if(this.x>1024){
            //try repeat shooting

        }

        
    };

    draw(ctx){
        this.animationList[this.animationIndex].drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };


}