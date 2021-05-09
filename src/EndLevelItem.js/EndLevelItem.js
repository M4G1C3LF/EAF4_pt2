import Phaser from 'phaser';
export default class EndLevelItem extends Phaser.GameObjects.Sprite{
    constructor (config) {
        super(config.scene, config.x, config.y, config.key);
        config.scene.collectableItems.add(this,true);
        this.id = config.id;
        this.key = config.key;
    }
}

function createAnimations(scene, item){
    const animationFrames = scene.anims.generateFrameNames('collectableItemSpritesheet',{start: 0, end: 3});
    scene.anims.create({
        key: 'collectableItem/idle',
        frames: animationFrames,
        frameRate: 10,
        repeat: -1
    });

    item.particles = scene.add.particles('collectableItemSpritesheet');
    for(let i = 0; i<animationFrames.length;i++){
        item.particles.createEmitter({
            frame: i,
            speed: 100,
            scale: { start: 0.1, end: 0.01 },
            follow: item
        });
    }
    
}

function destroyItem(item){
        if (item.particles) item.particles.destroy();
        item.destroy();
}
function generateCollider(scene,item,loadScene){
    scene.physics.add.collider(scene.player,item, (e => {
        scene.player.sfxList.pickUp.play();
        console.log(JSON.stringify(scene.gameState[scene.key]));
        destroyItem(item);
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
    createAnimations(scene,item);
    item.play('collectableItem/idle')
    generateCollider(scene,item,getItem);

}

export { EndLevelItem, createEndLevelItem  }