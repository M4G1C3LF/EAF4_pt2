import Phaser from 'phaser';
import MainScene from './MainScene';
import BootScene from './BootScene';


class MyGame extends Phaser.Game
{
    constructor ()
    {
        super();
        
    }

    preload ()
    {
        /*this.player = this.add.group({
            frameQuantity: 8,
            key: 'player',
            frame: 'player',
            active: true,
            visible: true,
            classType: Player
        });*/
        //this.load.image('logo', logoImg);
    }
      
    create ()
    {
        /*const logo = this.add.image(400, 150, 'logo');
        this.tweens.add({
            targets: logo,
            y: 450,
            duration: 2000,
            ease: "Power2",
            yoyo: true,
            loop: -1
        });
*/

    //this.player = new Player(this,100,100);

      //  this.add.existing(new Player(this, 100, 100));

    }
}

/*
const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: MyGame
};
*/



const config = {
    // For more settings see <https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js>
    type: Phaser.WEBGL,
    pixelArt: true,
    roundPixels: false,
    parent: 'content',
    width: 300,
    height: 300,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 0
            },
            debug: false
        }
    },
    scene: [
        BootScene,
        MainScene
    ]
};

const game = new Phaser.Game(config);



