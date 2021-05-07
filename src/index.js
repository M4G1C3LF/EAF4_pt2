import Phaser from 'phaser';
import MainScene from './MainScene';
import SecondScene from './SecondScene';
import BootScene from './BootScene';
import TitleScene from './TitleScene';

const config = {
    // For more settings see <https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js>
    type: Phaser.WEBGL,
    pixelArt: true,
    roundPixels: false,
    parent: 'content',
    width: 300,
    height: 150,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 300
            },
            debug: false
        }
    },
    scene: [
        BootScene,
        TitleScene,
        MainScene,
        SecondScene
    ]
};

const game = new Phaser.Game(config);


    