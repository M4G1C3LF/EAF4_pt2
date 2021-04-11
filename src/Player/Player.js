import Phaser from 'phaser';
import spriteSheet from './sprites/player.png';

class Player extends Phaser.GameObjects.Sprite{

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

function createPlayer(scene) {
    scene.player = new Player({
        scene: scene,
        key: 'player',
        x: 16,
        y: 16
    });
    scene.anims.create({
        key: 'idle',
        frames: scene.anims.generateFrameNames('playerSpritesheet',{start: 0, end: 1}),
        frameRate: 10,
        repeat: -1
    });
    scene.anims.create({
        key: 'move',
        frames: scene.anims.generateFrameNames('playerSpritesheet',{start: 2, end: 3}),
        frameRate: 10,
        repeat: -1
    });
    scene.anims.create({
        key: 'crouch',
        frames: scene.anims.generateFrameNames('playerSpritesheet',{start: 5, end: 5}),
        frameRate: 10,
        repeat: -1
    });
}
export { Player, createPlayer}