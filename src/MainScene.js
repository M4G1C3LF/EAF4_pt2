import Phaser from 'phaser';
import Player from './Player';
import spriteSheet from '../assets/sprites/player.png';

export default class MainScene extends Phaser.Scene{

    constructor () {
        super({
            key: 'MainScene'
        });
    }

    preload () {
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
        this.player = new Player({
            scene: this,
            key: 'player',
            x: 16,
            y: 16
        });

        /*this.load.spritesheet(
            'playerSpritesheet', 
            spriteSheet,
            {
                frameWidth: 16,
                frameHeight: 24
            }
        );*/        
        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNames('playerSpritesheet',{start: 0, end: 1}),
            frameRate: 10,
            repeat: -1
        });

        this.player.play("idle");


                /*player = this.physics.add.sprite(16,24, 'player')

        
        //this.player.play("idle");
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