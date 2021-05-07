import Phaser from 'phaser';
export default class CollectableItem extends Phaser.GameObjects.Sprite{
    constructor (config) {
        super(config.scene, config.x, config.y, config.key);
        config.scene.collectableItems.add(this,true);
        this.id = config.id;
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

function generateCollider(scene,item,getItem){
    scene.physics.add.collider(scene.player,item, (e => {
        scene.player.sfxList.pickUp.play();
        console.log(JSON.stringify(scene.gameState[scene.key]));
        getItem(item.id);
        item.destroy();
        
     }))
}
function createCollectableItem(id,scene,x,y,getItem) {
    const item = new CollectableItem({
        scene: scene,
        key: 'collectableItem',
        x,
        y,
        id
    });
    createAnimations(scene);
    item.play('collectableItem/idle')
    generateCollider(scene,item,getItem);

}

export { CollectableItem, createCollectableItem  }