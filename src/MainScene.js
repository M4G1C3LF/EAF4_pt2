import Phaser from 'phaser';
import { createPlayer } from './Player/Player';
//import spriteSheet from '../assets/sprites/player.png';

export default class MainScene extends Phaser.Scene{

    constructor () {
        super({
            key: 'MainScene'
        });
    }
    preload () {
        
    }
      
    create () {
        // populate this.player
        createPlayer(this);
        
        this.player.play("idle");


        this.keys = {
            left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
            right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
            crouch: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
        };
        
    }

    update() {
        
        this.player.update(this)
    }
}
/*
const config = {
    type: Phaser.AUTO,
    parent: 'MyGame',
    width: 16,
    height: 24,
    scene: Player
};

const player = new Phaser.Scene(config);
*/