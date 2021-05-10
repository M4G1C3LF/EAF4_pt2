function getItem(scene,sceneKey,id){
    scene.gameState.scenes[sceneKey].items[id] = true;
    scene.gameState.itemsCollected++;
}
function loadSceneWithData(scene,sceneId,vector2DtargetSceneSpawn){
    scene.music.stop();
    scene.scene.start(
            sceneId, 
            { 
                gameState: scene.gameState, 
                vector2DtargetSceneSpawn
            }
        )
}
function loadScene(scene,sceneId){
    scene.scene.start(sceneId);
}
function registerKeyInput(scene){
    // Register input keys 
    scene.keys = {
        left: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
        right: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
        crouch: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
    };
}

function killPlayer(scene){
    scene.gameState.lives--;
    if (scene.gameState.lives)
        loadSceneWithData(scene,scene.key,scene.vector2DtargetSceneSpawn);
    else
        loadScene(scene,"GameOverScene");
}

export { killPlayer, getItem, loadScene, loadSceneWithData,registerKeyInput }