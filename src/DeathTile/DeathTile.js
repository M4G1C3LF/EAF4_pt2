import Phaser from 'phaser';
export default class DeathTile extends Phaser.GameObjects.Sprite{
    constructor (config) {
        super(config.scene, config.x, config.y, config.key);
        config.scene.collectableItems.add(this,true);
        this.id = config.id;
    }
}
const tileSize = { x: 16, y: 16 };
const colliderSize = { x: 18, y: 18 };

function generateCollider(scene,deathTile,killPlayer){
    scene.physics.add.collider(scene.player,deathTile, (e => {
        //scene.player.sfxList.pickUp.play();
        
        killPlayer();

     }))
}

function createDeathTile(scene,x,y,killPlayer) {
    const deathTile = new DeathTile({
        scene: scene,
        key: 'deathTile',
        x,
        y
    })
    generateCollider(scene,deathTile,killPlayer);

}

export { DeathTile, createDeathTile, tileSize }