import Phaser from 'phaser';


export default class GameOver extends Phaser.Scene{

    constructor () {
        super({
            key: 'GameOverScene'
        });
        this.sfxList = {
            start: null
        }
    }
    preload () {
    }
    

    setGameLogo(){
        this.add.image(
            this.game.config.width/2,
            this.game.config.height/4*1.8,
            "gameOver"
        ).setScale(0.07,0.07);

    }
    create () {
        this.setGameLogo();
        this.startTime = new Date();
        this.fadeStarted = false;
    }

    update() {
        const date = new Date();
        if(this.startTime.getTime()+3000 < date.getTime() && !this.fadeStarted){
            this.cameras.main.fadeOut(2000, 0, 0, 0);
            this.fadeStarted = true;
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
                this.scene.start("TitleScene");
            })
       }
    }
}
