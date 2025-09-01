
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Button extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		// ButtonImage
		const buttonImage = scene.add.nineslice(0, 0, "UiAtlas", 4, 120, 55, 8, 11, 25, 25);
		this.add(buttonImage);

		// ButtonText
		const buttonText = scene.add.text(0, -5, "", {});
		buttonText.setOrigin(0.5, 0.5);
		buttonText.setStyle({ "fontFamily": "Quantico-Regular", "fontSize": "19px" });
		this.add(buttonText);

		this.buttonImage = buttonImage;
		this.buttonText = buttonText;

		/* START-USER-CTR-CODE */
		this.buttonInitialSize = this.buttonImage.scale;
		/* END-USER-CTR-CODE */
	}

	public buttonImage: Phaser.GameObjects.NineSlice;
	private buttonText: Phaser.GameObjects.Text;
	public buttonTexture: {key:string,frame?:string|number} = {"key":"UiAtlas","frame":4};

	/* START-USER-CODE */

	private onPointerUpcallback;
	public setUp(text, callback)
	{

		
		this.onPointerUpcallback = callback;
		this.buttonText.text = text;
		this.buttonImage.setInteractive();
		this.buttonImage.on("pointerdown",()=>this.onPointerDown());
		this.buttonImage.on("pointerup",()=>this.onPointerUp());
		this.buttonImage.setFrame(this.buttonTexture.frame);
	}

	onHover()
	{

	}
	onPointerDown()
	{
		const downTween = this.scene.tweens.add(
			{
				targets: this.buttonImage,
				scale:{from: 1,to : 1.2},
				duration: 200,
        		ease:  Phaser.Math.Easing.Back.In,
				yoyo : false,
    			paused: false,
		}
		)
		downTween.play();
	}
	onPointerUp()
	{
		
		this.buttonImage.disableInteractive();
		const upTween = this.scene.tweens.add(
			{
				targets:this.buttonImage,
				scale:{from: this.buttonImage.scale,to :1},
				duration: 200,
				yoyo : false,
				paused: false,
				ease:  Phaser.Math.Easing.Back.In,
				onComplete: ()=>
				{
					this.onPointerUpcallback.call(this.scene);
					this.buttonImage.setInteractive();
				}
			}
		)
		upTween.play();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
