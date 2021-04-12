import Phaser from 'phaser';
class Player extends Phaser.GameObjects.Sprite{
    constructor (config) {
        super(config.scene, config.x, config.y, config.key);
        config.scene.physics.world.enable(this);
        config.scene.add.existing(this);
       
        this.speed = 1;
        
    }
    // Method that store the inputs given
    savePreviousKeyInput(keys){
        this.prevKeys = { 
            left: keys.left.isDown ,
            right: keys.right.isDown,
            crouch: keys.crouch.isDown
        } 
    }
    // Method to handle user's input
    keyHandler(scene){
        const { keys } = scene;
        // If this is the first frame it will just take the keys pressed and return.
        if (!this.prevKeys){
            this.savePreviousKeyInput(keys);
            return;
        }
        // If no key pressed, return
        if (!(keys.left.isDown || keys.right.isDown || keys.crouch.isDown || this.prevKeys.left || this.prevKeys.right || this.prevKeys.crouch)){
            return;
        }
    
        // ON PRESS LEFT
        if(keys.left.isDown && !this.prevKeys.left){
            scene.player.flipX = true;
            if(!keys.crouch.isDown){
                scene.player.play("move");
            } 
        }
        // ON HOLD LEFT
        if(keys.left.isDown && !keys.left.isUp && this.prevKeys.left){
            if(!keys.crouch.isDown){
                scene.player.body.x += (-this.speed);
            } else {
                scene.player.body.x += (-this.speed/2);
            }
        }
        // ON RELEASE LEFT
        if(!keys.left.isDown && this.prevKeys.left && !keys.crouch.isDown ){
            scene.player.play("idle");

        }
        // ON PRESS RIGHT
        if(keys.right.isDown && !this.prevKeys.right){
            scene.player.flipX = false;
            if(!keys.crouch.isDown){
                scene.player.play("move");
            }
        }
        // ON HOLD RIGHT
        if(keys.right.isDown && !keys.right.isUp && this.prevKeys.right){
            if(!keys.crouch.isDown){
                scene.player.body.x += (this.speed);
            } else {
                scene.player.body.x += (this.speed/2);
            }
        }
        // ON RELEASE RIGHT
        if(!keys.right.isDown && this.prevKeys.right && !keys.crouch.isDown ){
            scene.player.play("idle");

        }
        // ON PRESS DOWN
        if(keys.crouch.isDown && !this.prevKeys.crouch){
            scene.player.play("crouch");
        }
        // ON RELEASE DOWN
        if(!keys.crouch.isDown && this.prevKeys.crouch){
            if (keys.left.isDown){
                scene.player.play("move");
            } else if (keys.right.isDown){
                scene.player.play("move");
            } else {
                scene.player.play("idle");
            }
        }

        // The last thing we do is storing keys pressed on this frame.
        this.savePreviousKeyInput(keys);
    }

    update(scene) {
        this.keyHandler(scene);  
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
    scene.player.play("idle");

}
export { Player, createPlayer }