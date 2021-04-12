import playerSpriteSheet from './Player/sprites/player.png';
import tileSpriteSheet from './Tile/sprites/tileSheet.png';

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
        //Load Atlas to 'player' key
        this.load.atlas('player', './Player/sprites/player.png', './Player/sprites/player.json');
        //Load Atlas to 'tile' key
        this.load.atlas('tile', './Tile/sprites/tileSheet.png', './Tile/sprites/tileSheet.json');
    }
}

export default BootScene;




/*
        // Music to play. It's not properly edited for an continous loop, but game play experience isn't really the aim of this repository either.
        this.load.audio('overworld', [
            'assets/music/overworld.ogg',
            'assets/music/overworld.mp3'
        ]);

        // Sound effects in a audioSprite.
        this.load.audioSprite('sfx', 'assets/audio/sfx.json', [
            'assets/audio/sfx.ogg',
            'assets/audio/sfx.mp3'
        ], {
            instances: 4
        });

        this.load.bitmapFont('font', 'assets/fonts/font.png', 'assets/fonts/font.fnt');

        // This json contain recorded gamep
        this.load.json('attractMode', 'assets/json/attractMode.json');
        */