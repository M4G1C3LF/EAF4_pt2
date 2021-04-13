import Phaser from 'phaser';
export default class CollectableItem extends Phaser.GameObjects.Sprite{
    constructor (config) {
        super(config.scene, config.x, config.y, config.key);
        config.scene.collectableItems.add(this,true);
        
    }
}

function createAnimations(scene){
    scene.anims.create({
        key: 'collectableItem/idle',
        frames: scene.anims.generateFrameNames('collectableItemSpritesheet',{start: 0, end: 3}),
        frameRate: 10,
        repeat: -1
    });
}

function generateCollider(scene,item){
    scene.physics.add.collider(scene.player,item, (e => {

        item.destroy();
     }))
}
function createCollectableItem(scene,x,y) {
    const item = new CollectableItem({
        scene: scene,
        key: 'collectableItem',
        x,
        y
    });
    createAnimations(scene);
    item.play('collectableItem/idle')
    generateCollider(scene,item);

}

export { CollectableItem, createCollectableItem  }