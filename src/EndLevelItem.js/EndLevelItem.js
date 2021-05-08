import Phaser from 'phaser';
export default class EndLevelItem extends Phaser.GameObjects.Sprite{
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

function generateCollider(scene,item,loadScene){
    scene.physics.add.collider(scene.player,item, (e => {
        scene.player.sfxList.pickUp.play();
        console.log(JSON.stringify(scene.gameState[scene.key]));
        
        item.destroy();
        scene.cameras.main.fadeOut(2000, 0, 0, 0);
        scene.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
            loadScene("GameOverScene");
        })

     }))
}
function createEndLevelItem(id,scene,x,y,getItem) {
    const item = new EndLevelItem({
        scene: scene,
        key: 'endLevelItem',
        x,
        y,
        id
    });
    createAnimations(scene);
    item.play('collectableItem/idle')
    generateCollider(scene,item,getItem);

}

export { EndLevelItem, createEndLevelItem  }