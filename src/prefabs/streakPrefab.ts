
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class streakPrefab extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		// StreakBackground
		const streakBackground = scene.add.image(0, 0, "UiAtlas", 0);
		streakBackground.scaleX = 0.4;
		streakBackground.scaleY = 0.4;
		this.add(streakBackground);

		// counter
		const counter = scene.add.text(-14, -8, "", {});
		counter.text = "0";
		counter.setStyle({ "align": "center", "fixedWidth": 25, "fixedHeight": 25, "fontFamily": "Quantico-Regular", "fontSize": "20px" });
		this.add(counter);

		this.streakBackground = streakBackground;
		this.counter = counter;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	private streakBackground: Phaser.GameObjects.Image;
	private counter: Phaser.GameObjects.Text;

	/* START-USER-CODE */


	// Write your code here.

	public  updateCounter(count :number)
	{
		const tween1 = this.scene.tweens.add(
			{targets: this.streakBackground,
				scale : {from : this.streakBackground.scale , to : this.streakBackground.scale *1.25},
				
				duration: 200,
        		ease: Phaser.Math.Easing.Bounce.Out,
				yoyo : true,
    			paused: false,
				onComplete: ()=>
				{
					this.counter.text = count;
				}
   			}
		)
		tween1.play();
	
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
