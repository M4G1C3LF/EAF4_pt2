import Phaser from 'phaser';
import spriteSheet from '../assets/sprites/player.png';

export default class Player extends Phaser.GameObjects.Sprite{

    constructor (config) {
        console.log("constructor!");
        super(config.scene, config.x, config.y, config.key);
        config.scene.physics.world.enable(this);
        config.scene.add.existing(this);
        console.log("Added to scene!");

    }

    preload () {
        console.log("preload!");
        this.load.image(
            'playerSpritesheet', 
            spriteSheet,
            {
                frameWidth: 16,
                frameHeight: 24
            }
        );
    }
      
    create () {
        console.log("create!");
        player = this.physics.add.sprite(16,24, 'player')
        player.setBounce(0,2);
        player.setCollideWorldBounds(true);        
        
        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers(
                'player', 
                {
                    start: 0, end: 1,
                }
            ),
            frameRate: 10,
            repeat: -1
        });
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