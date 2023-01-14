const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();
ASSET_MANAGER.queueDownload("./spritesheets.png");
ASSET_MANAGER.queueDownload("./spritesheet.png");
ASSET_MANAGER.queueDownload("./shooting.png");
ASSET_MANAGER.queueDownload("./RL.png");
ASSET_MANAGER.queueDownload("./BL.png");
ASSET_MANAGER.queueDownload("./BR.png");
ASSET_MANAGER.queueDownload("./dead.png");
ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	gameEngine.addEntity(new zombie(gameEngine));
	gameEngine.addEntity(new shooter(gameEngine));
	gameEngine.init(ctx);

	gameEngine.start();
});
