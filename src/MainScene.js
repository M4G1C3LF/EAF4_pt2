import Phaser from 'phaser';
import { createPlayer } from './Player/Player';

export default class MainScene extends Phaser.Scene{

    constructor () {
        super({
            key: 'MainScene'
        });
    }
    preload () {
        
    }
      
    create () {
        // Register input keys 
        this.keys = {
            left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
            right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
            crouch: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
        };
        // populate this.player
        createPlayer(this);
    }

    update() {
        this.player.update(this)
    }
}
