import playerSpriteSheet from './Player/sprites/player.png';
import tileSpriteSheet from './Tile/sprites/tileSheet.png';
import collectableItemSpriteSheet from './CollectableItem/sprites/spriteSheet.png';

class BootScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'BootScene'
        });
    }
    preload() {
        // Register a load complete event to launch the title screen when all files are loaded
        this.load.on('complete', () => {
            this.scene.start('MainScene');
        });

        this.load.spritesheet(
            'playerSpritesheet', 
            playerSpriteSheet,
            {
                frameWidth: 16,
                frameHeight: 24
            }
        );
        this.load.spritesheet(
            'tileSpritesheet', 
            tileSpriteSheet,
            {
                frameWidth: 16,
                frameHeight: 16
            }
        );
        this.load.spritesheet(
            'collectableItemSpritesheet', 
            collectableItemSpriteSheet,
            {
                frameWidth: 16,
                frameHeight: 16
            }
        );
        //Load Atlas to 'player' key
        this.load.atlas('player', './Player/sprites/player.png', './Player/sprites/player.json');
        //Load Atlas to 'tile' key
        this.load.atlas('tile', './Tile/sprites/tileSheet.png', './Tile/sprites/tileSheet.json');
        //Load Atlas to 'collectableItem' key
        this.load.atlas('collectableItem', './CollectableItem/sprites/spriteSheet.png', './CollectableItem/sprites/spriteSheet.json');
        
        // Load Music
        this.load.audio('whitenoise', [
            '../sfx/whitenoise.ogg'
        ]);

        // Load Jump
        this.load.audio('jump', [
            '../sfx/jump.ogg'
        ]);
        
        // Load pickup
        this.load.audio('pickUp', [
            '../sfx/pickUp.ogg'
        ]);
    }
}

export default BootScene;