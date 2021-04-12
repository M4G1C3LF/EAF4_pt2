import Phaser from 'phaser';
import { createPlayer } from './Player/Player';
import { createTile, printTileSheet } from './Tile/Tile';

export default class MainScene extends Phaser.Scene{

    constructor () {
        super({
            key: 'MainScene'
        });
        this.tileMap = [];
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
        printTileSheet(this, 50,50);
        
    }

    update() {
        this.player.update(this)
    }
}
