import Phaser from 'phaser';
export default class SceneChanger extends Phaser.GameObjects.Sprite{
    constructor (config) {
        super(config.scene, config.x, config.y, config.key);
        
        config.scene.sceneChangers.add(this,true);

    }
}
const tileSize = { x: 16, y: 16 };

function generateCollider(scene,sceneChanger,loadScene){
    scene.physics.add.collider(scene.player,sceneChanger, (e => {
        loadScene(scene.key);
     }))
}
function createSceneChanger(scene,x,y,targetSceneKey,loadScene) {
    const sceneChanger = new SceneChanger({
        scene: scene,
        key: targetSceneKey,
        x,
        y
    })
    generateCollider(scene,sceneChanger,loadScene);
    
}
export { SceneChanger, createSceneChanger }