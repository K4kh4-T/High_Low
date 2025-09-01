import Phaser from "phaser";
import Level from "./scenes/Level";
import Preload from "./scenes/Preload";
import GameMain from "./scenes/Gameplay"

class Boot extends Phaser.Scene {

    constructor() {
        super("Boot");
    }

    preload() {

        this.load.pack("pack", "assets/preload-asset-pack.json");
    }

    create() {

       this.scene.start("Preload");
    }
}

window.addEventListener('load', function () {
	
	const game = new Phaser.Game({
		width: 340,
		height: 340,
		backgroundColor: "#2f2f2f",
		parent: "game-container",
		scale: {
			
			mode: Phaser.Scale.NONE,
			autoCenter: Phaser.Scale.Center.CENTER_BOTH
		},
		scene: [Boot, Preload, Level,GameMain]
	});

	game.scene.start("Boot");
});