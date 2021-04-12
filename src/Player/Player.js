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
    //Method that store the inputs given
    savePreviousKeyInput(keys){
        this.prevKeys = { 
            left: keys.left.isDown ,
            right: keys.right.isDown,
            crouch: keys.crouch.isDown
        } 
    }

    preload () {
        console.log("preload!");
    }
      
    create () {
        console.log("create!");

        this.anims.create({
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

        this.player.play("idle");

    }

    update(scene) {
        const {keys} = scene;

        //If this is the first frame it will just take the keys pressed
        if (!this.prevKeys){
            this.savePreviousKeyInput(keys);
            return;
        }

        if(keys.crouch.isDown && !this.prevKeys.crouch){
            scene.player.play("crouch");
        }
        if(!keys.crouch.isDown && this.prevKeys.crouch){
            scene.player.play("idle");
        }
        //The last thing we do is store keys pressed on this frame.
        this.savePreviousKeyInput(keys);
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
        frames: scene.anims.generateFrameNames('playerSpritesheet',{start: 4, end: 4}),
        frameRate: 10,
        repeat: -1
    });
}
export { Player, createPlayer }