import Phaser from 'phaser';
import { createPlayer } from './Player/Player';
import { createTile,  tileSize } from './Tile/Tile';
import { createCollectableItem } from './CollectableItem/CollectableItem';

export default class TitleScene extends Phaser.Scene{

    constructor () {
        super({
            key: 'TitleScene'
        });
        this.sfxList = {
            start: null
        }
        
    }
    preload () {
    }

    registerKeyInput(){
        // Register input keys 
        this.keys = {
            spacebar: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE),
        };
    }
    
    setBGM(){
        this.music = this.sound.add('whitenoise');
        this.music.play({
            loop: true
        });
    }
    setSfx(){
        this.sfxList.start = this.sound.add('start');
    }
    setGameLogo(){
        this.add.image(
            this.game.config.width/2,
            this.game.config.height/4*1.4,
            "gameLogo"
        ).setScale(0.07,0.07);

        this.add.text(
            this.game.config.width/2*0.6, 
            (this.game.config.height/2)*1.5, 
            'Press Spacebar', 
            {
                color: '#FFF',
            }
        )
    }
    keyHandler(){

    }
    startGame(){
        this.scene.start(
            'MainScene',
            {
                gameState:defaultGameState
            }
        );
    }
    create () {
        //this.setBGM();
        this.setSfx();
        this.registerKeyInput();
        this.setGameLogo();
    }

    update() {
        if (this.keys.spacebar.isDown){
            this.sfxList.start.play();
            this.startGame();
        }
    }
}
const defaultGameState = {
    lives: 3,
    itemsCollected: 0,
    scenes: [],

}