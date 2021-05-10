import Phaser from 'phaser';
import { killPlayer } from '../SceneUtilities';

export default class DeathTile extends Phaser.GameObjects.Sprite{
    constructor (config) {
        super(config.scene, config.x, config.y, config.key);
        config.scene.collectableItems.add(this,true);
        this.id = config.id;
    }
}
const tileSize = { x: 16, y: 16 };
const colliderSize = { x: 18, y: 18 };

function generateCollider(scene,deathTile){
    scene.physics.add.collider(scene.player,deathTile, (e => {
        //scene.player.sfxList.pickUp.play();
        
        killPlayer(scene);

     }))
}

function createDeathTile(scene,x,y) {
    const deathTile = new DeathTile({
        scene: scene,
        key: 'deathTile',
        x,
        y
    })
    generateCollider(scene,deathTile);

}

export { DeathTile, createDeathTile, tileSize }