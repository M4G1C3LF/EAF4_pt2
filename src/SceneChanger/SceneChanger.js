import Phaser from 'phaser';
export default class SceneChanger extends Phaser.GameObjects.Sprite{
    constructor (config) {
        super(config.scene, config.x, config.y, config.key);
        
        config.scene.sceneChangers.add(this,true);
        this.targetSceneKey = config.key;

    }
}
const tileSize = { x: 16, y: 16 };

function generateCollider(scene,sceneChanger,loadSceneWithData,vector2DtargetSceneSpawn){
    scene.physics.add.collider(scene.player,sceneChanger, (e => {
        loadSceneWithData(scene,sceneChanger.targetSceneKey,vector2DtargetSceneSpawn);
     }))
}
function createSceneChanger(scene,x,y,targetSceneKey,loadSceneWithData,vector2DtargetSceneSpawn) {
    const sceneChanger = new SceneChanger({
        scene: scene,
        key: targetSceneKey,
        x,
        y
    })
    generateCollider(scene,sceneChanger,loadSceneWithData,vector2DtargetSceneSpawn);
    
}
export { SceneChanger, createSceneChanger }