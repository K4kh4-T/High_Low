
// You can write more code here

/* START OF COMPILED CODE */

import Button from "./Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class gameOverPanel extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		// GameOverPanel
		const gameOverPanel = scene.add.nineslice(0, 0, "UiAtlas", 7, 400, 400, 35, 35, 35, 35);
		gameOverPanel.alpha = 0.7;
		gameOverPanel.tintFill = true;
		gameOverPanel.tint = 0;
		this.add(gameOverPanel);

		// window
		const window = scene.add.nineslice(0, 0, "UiAtlas", 7, 300, 200, 30, 30, 30, 30);
		this.add(window);

		// RiskItAll
		const riskItAll = new Button(scene, 65, 37);
		riskItAll.visible = false;
		this.add(riskItAll);

		// Header
		const header = scene.add.text(2, -31, "", {});
		header.setOrigin(0.5, 0.5);
		header.text = "Player Wins!";
		header.setStyle({ "align": "center", "fixedWidth": 246, "fixedHeight": 55, "fontFamily": "Quantico-Regular", "fontSize": "30px" });
		this.add(header);

		// nextGameMessage
		const nextGameMessage = scene.add.text(0, 36, "", {});
		nextGameMessage.setOrigin(0.5, 0.5);
		nextGameMessage.visible = false;
		nextGameMessage.text = "next game 00:59:59";
		nextGameMessage.setStyle({ "align": "center", "fixedWidth": 246, "fixedHeight": 55, "fontFamily": "Quantico-Regular", "fontSize": "21px" });
		this.add(nextGameMessage);

		// CashOut
		const cashOut = new Button(scene, -58, 37);
		cashOut.visible = false;
		this.add(cashOut);

		// cashOut (prefab fields)
		cashOut.buttonTexture = {"key":"UiAtlas","frame":3};

		this.gameOverPanel = gameOverPanel;
		this.window = window;
		this.riskItAll = riskItAll;
		this.header = header;
		this.nextGameMessage = nextGameMessage;
		this.cashOut = cashOut;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	private gameOverPanel: Phaser.GameObjects.NineSlice;
	private window: Phaser.GameObjects.NineSlice;
	private riskItAll: Button;
	private header: Phaser.GameObjects.Text;
	private nextGameMessage: Phaser.GameObjects.Text;
	private cashOut: Button;

	/* START-USER-CODE */
	public setUp(callback?,callback2,)
	{

		this.riskItAll.setUp("Risk it ALL!",callback);
		this.cashOut.setUp("Cash OUT!",this.onCashOut)
		this.callback2 = callback2;




	}


	public onGameOver(playerIsWiner : boolean)
	{
		this.header.text = (playerIsWiner)?"Player won!":"Dealer won!";
		this.deactivateButtons();
		const openTween = this.scene.tweens.add(
			{
				targets:[this.gameOverPanel],
				alpha :{from : 0 ,to: 0.7 },
				yoyo :false,
				duration : 150
			}
		)

		this.window.setSize(300,0)
		const openTween2 = this.scene.tweens.add(
			{
				targets:[this.window],
				height :{from : 0 ,to: 200 },
				yoyo :false,
				duration : 150,
				onComplete:()=>
				{
					if (playerIsWiner)
						{this.activateButtons();}
					else
					{
						this.nextGameMessage.visible = true;
						this.nextGameMessage.text = "next Game in 00:59:00";
						this.deactivateButtons();
					}
				}
			}
		)
		openTween.play();
		openTween2.play();

	}
	activateButtons()
	{
		this.cashOut.visible = true;
		this.riskItAll.visible = true;
	

	}
	public deactivateButtons()
	{
		this.cashOut.visible = false;
		this.riskItAll.visible = false;
	}


 	onCashOut = ():void => 
	{
		this.deactivateButtons();
		this.nextGameMessage.visible = true;
		this.nextGameMessage.text = "next Game in 00:59:00";
		this.callback2.call(this.scene);
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
