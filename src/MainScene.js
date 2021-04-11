import Phaser from 'phaser';
import Player from './Player';

export default class MainScene extends Phaser.Scene{

    constructor () {
        console.log("constructor scene");
        super({
            key: 'MainScene'
        });
        console.log("Super Done!");
    }

    preload () {
        console.log("preload!");
        /*this.load.image(
            'playerSpritesheet', 
            spriteSheet,
            {
                frameWidth: 16,
                frameHeight: 24
            }
        );*/
    }
      
    create () {
        console.log("create!");
        this.player = new Player({
            scene: this,
            key: 'player',
            x: 16,
            y: this.sys.game.config.height - 48 - 48
        });

        console.log(JSON.stringify(this.player));
        this.player.play("idle");
        /*player = this.physics.add.sprite(16,24, 'player')
        player.setBounce(0,2);
        player.setCollideWorldBounds(true);        
        
        this.anims.create({
            key: 'move',
            frames: this.anims.generateFrameNumbers(
                'player', 
                {
                    start: 0, end: 1,
                }
            ),
            frameRate: 10,
            repeat: -1
        });*/
    }

    update() {
        console.log("update!");

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