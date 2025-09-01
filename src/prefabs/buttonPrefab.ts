
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class buttonPrefab extends Phaser.GameObjects.Image {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string,) {
		super(scene, x ?? 0, y ?? 0, texture || "UiAtlas", frame ?? 1);

		this.scaleX = 0.5;
		this.scaleY = 0.5;
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		
		/* END-USER-CTR-CODE */
	}
	
	public setUp(callback?)
	{
		this.visible = true;
		this.setInteractive();
		this.callback = callback;
		this.on('pointerup',()=>{
		this.onClick();
		});
}
public disable()
{
	this.disableInteractive();
}
public enable()
{
	this.visible = true;
	this.setInteractive();
}
	private callback;

	onClick():void
	{
		this.callback.call(this.scene);
		const tween1 = this.scene.tweens.add(
			{targets: this,
				scale : {from : this.scale , to : this.scale *1.2},
				
				duration: 200,
        		ease:  Phaser.Math.Easing.Back.In,
				yoyo : true,
    			paused: false,
				onComplete: ()=>
				{
					// this.callback.call(this.scene);
				}
   			}
		)
		tween1.play();
	
	}
	/* START-USER-CODE */

	// Write your code here.


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
