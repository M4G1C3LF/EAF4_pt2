import Phaser from 'phaser';
import { getItem, setUI } from '../SceneUtilities';

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

function generateCollider(scene,item){
    scene.physics.add.collider(scene.player,item, (e => {
        scene.player.sfxList.pickUp.play();
        getItem(scene,scene.key,item.id);
        item.destroy();
        setUI(scene,0,130);
     }))
}
function createCollectableItem(id,scene,x,y) {
    const item = new CollectableItem({
        scene: scene,
        key: 'collectableItem',
        x,
        y,
        id
    });
    createAnimations(scene);
    item.play('collectableItem/idle')
    generateCollider(scene,item);

}

export { CollectableItem, createCollectableItem  }