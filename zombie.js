class zombie{
    constructor(game){
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./spritesheets.png"),0, 0, 49.06, 62, 15, 0.2);

		this.x = 0;
		this.y = 85;
		this.speed = 150;
    };
    update(){
       this.x += this.speed * this.game.clockTick;
	   if (this.y >1024) this.y = 0;
    };
    draw(ctx){
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
        //ctx.drawImage(ASSET_MANAGER.getAsset("./spritesheets.png"),0,0);
    };
}