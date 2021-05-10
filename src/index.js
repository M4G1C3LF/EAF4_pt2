import Phaser from 'phaser';
import MainScene from './Scenes/MainScene';
import SecondScene from './Scenes/SecondScene';
import BootScene from './Scenes/BootScene';
import TitleScene from './Scenes/TitleScene';
import GameOverScene from './Scenes/GameOverScene';

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
        SecondScene,
        GameOverScene
    ]
};

const game = new Phaser.Game(config);


    