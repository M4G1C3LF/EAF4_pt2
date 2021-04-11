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
       /* this.load.spritesheet(
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
        //player = this.physics.add.sprite(16,24, 'player')
        /*player.setBounce(0,2);
        player.setCollideWorldBounds(true);        
        */
        /*this.anims.create({
            key: 'idle',
            frames: [
                {
                    key: 'idle1',
                    sourceIndex: "player/idle1",
                    frame: 0
                },
                {
                    key: 'idle2',
                    sourceIndex: "player/idle2",
                    frame: 1
                }
            ],
            frameRate: 10,
            repeat: -1
        });

        this.player.play("idle");*/

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