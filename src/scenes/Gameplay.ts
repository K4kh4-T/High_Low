
// You can write more code here

/* START OF COMPILED CODE */

import buttonPrefab from "../prefabs/buttonPrefab";
import gameOverPanel from "../prefabs/gameOverPanel";
import streakPrefab from "../prefabs/streakPrefab";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Gameplay extends Phaser.Scene {

	constructor() {
		super("Gameplay");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	preload(): void {

		this.load.pack("asset-pack", "assets/asset-pack.json");
	}

	editorCreate(): void {

		// dealer_1
		const dealer_1 = this.add.text(240, 86.03200054168701, "", {});
		dealer_1.setOrigin(0.5, 0.5);
		dealer_1.text = "Player";
		dealer_1.setStyle({ "align": "center", "fixedWidth": 106, "fontFamily": "Quantico-Regular", "fontStyle": "italic" });

		// dealer
		const dealer = this.add.text(100, 85.03200054168701, "", {});
		dealer.setOrigin(0.5, 0.5);
		dealer.text = "Dealer";
		dealer.setStyle({ "align": "center", "fixedWidth": 106, "fontFamily": "Quantico-Regular", "fontStyle": "italic" });

		// Dealer_PlaceHolder
		const dealer_PlaceHolder = this.add.image(100, 170, "Card_Sheet", 52);
		dealer_PlaceHolder.scaleX = 1.6;
		dealer_PlaceHolder.scaleY = 1.6;
		dealer_PlaceHolder.alpha = 0.46;
		dealer_PlaceHolder.alphaTopLeft = 0.46;
		dealer_PlaceHolder.alphaTopRight = 0.46;
		dealer_PlaceHolder.alphaBottomLeft = 0.46;
		dealer_PlaceHolder.alphaBottomRight = 0.46;
		dealer_PlaceHolder.tintFill = true;
		dealer_PlaceHolder.tintTopLeft = 143688;
		dealer_PlaceHolder.tintTopRight = 143688;
		dealer_PlaceHolder.tintBottomLeft = 143688;
		dealer_PlaceHolder.tintBottomRight = 143688;

		// placeHolder
		const placeHolder = this.add.image(240, 170, "Card_Sheet", 52);
		placeHolder.scaleX = 1.6;
		placeHolder.scaleY = 1.6;
		placeHolder.alpha = 0.46;
		placeHolder.alphaTopLeft = 0.46;
		placeHolder.alphaTopRight = 0.46;
		placeHolder.alphaBottomLeft = 0.46;
		placeHolder.alphaBottomRight = 0.46;
		placeHolder.tintFill = true;
		placeHolder.tintTopLeft = 143688;
		placeHolder.tintTopRight = 143688;
		placeHolder.tintBottomLeft = 143688;
		placeHolder.tintBottomRight = 143688;

		// DealersCard
		const dealersCard = this.add.image(175, -101, "Card_Sheet", 52);
		dealersCard.scaleX = 1.6;
		dealersCard.scaleY = 1.6;
		dealersCard.angle = 166;

		// DealerShadow
		const dealerShadow = dealersCard.postFX!.addShadow(-0.5, 1, 0.05, 1, 0, 6, 1);

		// PlayersCard
		const playersCard = this.add.image(183, -101, "Card_Sheet", 52);
		playersCard.scaleX = 1.6;
		playersCard.scaleY = 1.6;
		playersCard.angle = 166;

		// playerShadowFx
		const playerShadowFx = playersCard.postFX!.addShadow(0, 1, 0.05, 1, 0, 6, 1);

		// CashOut
		const cashOut = this.add.nineslice(50, 310, "UiAtlas", 3, 100, 60, 25, 25, 25, 25);
		cashOut.visible = false;

		// RiskIt
		const riskIt = this.add.nineslice(290, 310, "UiAtlas", 4, 100, 60, 25, 25, 25, 25);
		riskIt.visible = false;

		// HigherButton
		const higherButton = new buttonPrefab(this, 272, 290);
		this.add.existing(higherButton);

		// LowerButton
		const lowerButton = new buttonPrefab(this, 204, 290, "UiAtlas", 2);
		this.add.existing(lowerButton);

		// gameOver
		const gameOver = new gameOverPanel(this, 170, 170);
		this.add.existing(gameOver);
		gameOver.visible = false;

		// CashOutMessage
		const cashOutMessage = this.add.nineslice(170, 170, "UiAtlas", 7, 275, 75, 35, 35, 35, 35);
		cashOutMessage.visible = false;

		// GameOverText
		const gameOverText = this.add.text(170, 170, "", {});
		gameOverText.setOrigin(0.5, 0.5);
		gameOverText.visible = false;
		gameOverText.text = "next game in 00:59:00";
		gameOverText.setStyle({ "align": "center", "fixedWidth": 344, "fontFamily": "Quantico-Regular", "fontSize": "20px", "fontStyle": "italic" });

		// Streak
		const streak = new streakPrefab(this, 306, 34);
		this.add.existing(streak);
		streak.scaleX = 1;
		streak.scaleY = 1;

		// currency_hyve_xp_3d_1
		const currency_hyve_xp_3d_1 = this.add.image(34, 34, "currency_hyve_xp_3d_1");
		currency_hyve_xp_3d_1.scaleX = 0.09017107382001535;
		currency_hyve_xp_3d_1.scaleY = 0.09017107382001535;

		// XpText
		const xpText = this.add.text(69, 32, "", {});
		xpText.setOrigin(0.5, 0.5);
		xpText.text = "0";
		xpText.setStyle({ "fixedWidth": 30, "fixedHeight": 30, "fontFamily": "Quantico-Bold", "fontSize": "30px", "shadow.offsetX": 2, "shadow.offsetY": 2, "shadow.stroke": true, "shadow.fill": true });

		// lists
		const list: Array<any> = [];

		this.dealerShadow = dealerShadow;
		this.dealersCard = dealersCard;
		this.playerShadowFx = playerShadowFx;
		this.playersCard = playersCard;
		this.higherButton = higherButton;
		this.lowerButton = lowerButton;
		this.gameOver = gameOver;
		this.cashOutMessage = cashOutMessage;
		this.gameOverText = gameOverText;
		this.streak = streak;
		this.list = list;

		this.events.emit("scene-awake");
	}

	private dealerShadow!: Phaser.FX.Shadow;
	private dealersCard!: Phaser.GameObjects.Image;
	private playerShadowFx!: Phaser.FX.Shadow;
	private playersCard!: Phaser.GameObjects.Image;
	private higherButton!: buttonPrefab;
	private lowerButton!: buttonPrefab;
	private gameOver!: gameOverPanel;
	private cashOutMessage!: Phaser.GameObjects.NineSlice;
	private gameOverText!: Phaser.GameObjects.Text;
	private streak!: streakPrefab;
	private list!: Array<any>;

	/* START-USER-CODE */
	private initialButnScale:number;
	private emitter !:typeof Phaser.GameObjects.Particles;
	public m_DealerValue !: number;
	public m_playerValue !: number;
	public m_streakCount !: number;
	private continuousEmitter!: typeof Phaser.GameObjects.Particles;
	create() 
	{
		this.editorCreate();
		this.initialButnScale = this.higherButton.scale;



		const width = this.playersCard.width * this.playersCard.scaleX;
		const height = this.playersCard.height * this.playersCard.scaleX;
 		const rect = new Phaser.Geom.Rectangle(-width/2, -height/2, width,height );

		this.emitter = this.add.particles(0, 0, 'white-splash-fade', {
      	speed: 0,
     	lifespan: { min: 400, max: 1000 },
      	scale: { start: 0.01, end: 0.07 },
      	alpha: { start: 1.0, end: 0 },
      	blendMode: 'ADD',
      	tint:  0x00ff00f,
      	frequency: 300,
      	rotate: {
       		min: 0,
        	max: 360
      	},
      	quantity: 30,
      	emitZone: {
        	type: 'edge',
       		source: rect,
        	quantity: 80
      	}
   		 });

		 this.emitter.stop();

		this.startGame();
		this.startContinuousConfetti();
	}

	 startContinuousConfetti() 
	 {
                this.continuousEmitter = this.add.particles(0, -20, "Confetti atlas", {
                    x: { min: 0, max: 340 },
                    y: -20,
                    speedX: { min: -50, max: 50 },
                    speedY: { min: 50, max: 150 },
                    gravityY: 300,
                    scale: { min: 0.1, max: .2 },
                    rotate: { min: 0, max: 360 },
                    angularVelocity: { min: -200, max: 200 },
                    alpha: { start: 1, end: 0 },
                    lifespan: 4000,
                    frequency: 20,
                    quantity: 1,
					frame: [0,1,2,3,4,5,6,7,8,9,10,11] ,
                });
				this.continuousEmitter.stop();
    }


	startGame()
	{
		const pcard = this.playersCard;
		const dealerCard = this.dealersCard;
		const dealeShadowFx = this.dealerShadow


		this.higherButton.setUp(this.highButtonClick);
		this.lowerButton.setUp(this.lowButtonclick);
		this.gameOver.setUp(this.onRiskItAll,this.onCashOut);

		this.m_DealerValue  = Phaser.Math.Between(0, 51);
		this.m_playerValue = Phaser.Math.Between(0, 51);
		this.m_streakCount =0;

		this.higherButton.scale =0;
		this.lowerButton.scale =0;

 		this.dealCard(dealerCard, 
		{
    		x: 100,
    		y: 170,
    		duration: 300,
    		ease: 'Back.easeInOut',
			onComplete: ()=>{
			this.dealCard(pcard,
				{

    				x: 240,
    				y: 170,
    				duration: 300,
    				ease: 'Back.easeInOut',
   		 			onComplete: () =>
					{
						this.flipCard(dealerCard,this.m_DealerValue ,dealeShadowFx)
						const tween = this.tweens.add(
							{
								delay : 700,
								targets:[this.higherButton,this.lowerButton],
								scale :{from : 0 ,to: this.initialButnScale },
								yoyo :false,
								ease: Phaser.Math.Easing.Back.InOut,
								duration : 150
							}
						)
						tween.play();
					} 
				})}
		}).play();
	}

	restartGame()
	{
		this.m_DealerValue  = Phaser.Math.Between(0, 51);
		this.m_playerValue = Phaser.Math.Between(0, 51);
		this.higherButton.enable();
		this.lowerButton.enable();
		this.higherButton.scale =0;
		this.lowerButton.scale =0;

		this.dealCard(this.dealersCard, 
		{
    		x: 100,
    		y: 170,
    		duration: 300,
    		ease: 'Back.easeInOut',
			onComplete: ()=>{
			this.dealCard(this.playersCard,
				{

    				x: 240,
    				y: 170,
    				duration: 300,
    				ease: 'Back.easeInOut',
   		 			onComplete: () =>
					{

						this.flipCard(this.dealersCard,this.m_DealerValue ,this.dealerShadow)
						const tween = this.tweens.add(
							{
								delay : 700,
								targets:[this.higherButton,this.lowerButton],
								scale :{from : 0 ,to: this.initialButnScale },
								yoyo :false,
								ease: Phaser.Math.Easing.Back.InOut,
								duration : 150
							}
						)
						tween.play();
					} 
				})}
		}).play();
	}

	flipCard(card :Phaser.GameObjects.Image , faceValue:number,shadowFx:Phaser.FX.Shadow):void
	{
		const initialScaleX = card.scaleX;
		const initialScaleY = card.scaleY;
		const scaleTween = this.tweens.add(
			{
				targets: [card,shadowFx],
        		scale: {from: card.scale, to:card.scale *1.15},
				decay:  {from: shadowFx.decay, to: .1},
        		duration: 200,
        		ease: Phaser.Math.Easing.Expo.Out,
        		yoyo: false,
        		paused: true,
				onComplete:()=>
				{
					const tween1 = this.tweens.add(
						{
        					targets: [card],
        					scaleX: {from: card.scaleX, to:0},
        					duration: 200,
        					ease: Phaser.Math.Easing.Bounce.InOut,
        					yoyo: false,
        					paused: true,
							onComplete: ()=>
							{
								card.setFrame (faceValue);
								const t2 = this.tweens.add(
								{
            						targets: [card,shadowFx],
									decay:  {from: shadowFx.decay, to: .05},
                					scaleX: {from: card.scaleX, to:initialScaleX},
									scaleY: {from: card.scaleY, to:initialScaleY},
                					duration: 200,
                					ease: Phaser.Math.Easing.Back.InOut,
                					yoyo: false,
                					paused: true,

								})
								t2.play();

							}

    					})
    				tween1.play();
				}
			}
		)
		scaleTween.play();


	}
	dealCard (target, options = {}) 
	{


    	const config = options;

    	const tween1 = this.tweens.add({
        targets: target,
        x: config.x,
        y: config.y,
		rotation: 0,
        duration: config.duration,
        ease: config.ease,
        delay: config.delay,
        yoyo: config.yoyo,
        repeat: config.repeat,
        onStart: config.onStart,
        onComplete: config.onComplete,
        onUpdate: config.onUpdate
    	});
		return tween1;
	}

	// Write your code here


	highButtonClick()
	{
		this.higherButton.disable();
		this.lowerButton.disable();
		this.flipCard(this.playersCard,this.m_playerValue,this.playerShadowFx);
		this.checkGameWithDelay(true);
	}
	lowButtonclick():void
	{
		this.higherButton.disable();
		this.lowerButton.disable();
		this.flipCard(this.playersCard,this.m_playerValue,this.playerShadowFx);

		this.checkGameWithDelay(false);
	}
	checkGameWithDelay(isHigh:boolean)
	{
		var timer = this.time.delayedCall(400, this.checkGame,[isHigh],this ); // delay in ms
		this.time.addEvent(timer);
	}

	checkGame(high:boolean)
	{
		const playerPoint = this.m_playerValue % 13 + 2;
		const dealerPoint = this.m_DealerValue % 13 + 2;


			if (playerPoint > dealerPoint)
			{
				if (high)
					{
						this.win();
					}
				else
					this.lose();
			}
			else
			{
				if (high)
					this.lose();
				else 
					this.win();
			}

	}

	win()
	{
		console.log("won");
		this.showWiner(this.playersCard);
		this.m_streakCount++;
		this.streak.updateCounter(this.m_streakCount);

		//
		var timer = this.time.delayedCall(1500, this.showGameOverScreen,[true],this ); // delay in ms
		this.time.addEvent(timer);

		//dispaywin
	}
	showGameOverScreen(plalayerIswinner:boolean)
	{
		this.gameOver.visible = true;
		this.gameOver.onGameOver(plalayerIswinner);
	}
	lose()
	{
		this.showWiner(this.dealersCard);
		this.cameras.main.shake(100);
		var timer = this.time.delayedCall(1500, this.showGameOverScreen,[false],this ); // delay in ms
		this.time.addEvent(timer);

		//show lose
	}


	onRiskItAll()
	{
		this.gameOver.visible = false;
		this.playersCard.scaleX = 1.6;
		this.playersCard.scaleY = 1.6;
		this.playersCard.angle = 166;
		this.dealersCard.scaleX = 1.6;
		this.dealersCard.scaleY = 1.6;
		this.dealersCard.angle = 166;
		this.playersCard.x = 183;
		this.playersCard.y =  -101
		this.dealersCard.x = 183;
		this.dealersCard.y =  -101
		this.emitter.stop();
		this.dealersCard.setFrame(52);
		this.playersCard.setFrame(52);

		this.restartGame();
	}
	onCashOut()
	{
		this.continuousEmitter.start()
	}

	showWiner(card)
	{

		 this.emitter.x= ( card.x);
		 this.emitter.y = card.y;
		 this.emitter.start();
		 this.emitter.setDepth(-10);


	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
