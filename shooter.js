class shooter{
    constructor(game){
        this.game = game;
        this.running = new Animator(ASSET_MANAGER.getAsset("./spritesheet.png"),0, 0, 45, 41, 10, 0.1);
        this.shoot = new Animator(ASSET_MANAGER.getAsset("./shooting.png"),0, 0, 45, 41, 1, 0.1);
        this.dead = new Animator(ASSET_MANAGER.getAsset("./dead.png"),0, 0, 44, 32, 12, 0.3);
		this.x1 = 0;
        this.y1 = 0;

        this.x2 = 0;
        this.y2 = 555;
		
        this.x3 = 0;
        this.y3 = 200;
		this.speed = 435;
    };
    update() {
        if(this.x1 < 0) {
            this.running = new Animator(ASSET_MANAGER.getAsset("./spritesheet.png"),0, 0, 45, 41, 10, 0.1);
            this.speed +=100;
        }else if(this.x1>900){
            this.running = new Animator(ASSET_MANAGER.getAsset("./RL.png"),0, 0, 45, 41, 10, 0.1);
            this.speed -=100;
        }
        this.x1 += this.speed*this.game.clockTick;
        //this.game.addEntity(new bullet(this.game,this.x2,this.y2,0))
    };

    
    draw(ctx){
        this.running.drawFrame(this.game.clockTick, ctx, this.x1, this.y1);
        this.shoot.drawFrame(this.game.clockTick, ctx, this.x2, this.y2);
        this.dead.drawFrame(this.game.clockTick, ctx, this.x3, this.y3);
    };
}