function getItem(scene,sceneKey,id){
    scene.gameState.scenes[sceneKey].items[id] = true;
    scene.gameState.itemsCollected++;
}
function loadScene(scene,sceneId,startMethod,vector2DtargetSceneSpawn){
    startMethod(
        sceneId, 
        { 
            gameState: scene.gameState, 
            vector2DtargetSceneSpawn
        }
    )
}
function registerKeyInput(scene){
    // Register input keys 
    scene.keys = {
        left: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
        right: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
        crouch: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
    };
}

export { getItem, loadScene, registerKeyInput }