// SCENE REGION
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
function setBackground(scene,imageKey){
    scene.add.image(
        scene.game.config.width/2,
        scene.game.config.height/2,
        imageKey
    ).setScale(0.3,0.22);
}
function setBGM(scene){
    scene.music = scene.sound.add('whitenoise');
    scene.music.play({
        loop: true
    });
    
}

function createSceneGroups(scene){
    //Create static group to fill in all map tiles
    scene.tiles = scene.physics.add.staticGroup();
    //Create static group to fill in all collectable items
    scene.collectableItems = scene.physics.add.staticGroup();
    //Create static group to fill in all SceneChangers
    scene.sceneChangers = scene.physics.add.staticGroup();

}

// PLAYER REGION
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
function getItem(scene,sceneKey,id){
    scene.gameState.scenes[sceneKey].items[id] = true;
    scene.gameState.itemsCollected++;
}

// USER INTERFACE
function setUI(scene,x,y){
    if(!scene.uiElements.lives){
        scene.uiElements = { 
            ...scene.uiElements, 
            lives: {
                label: null,
                value: null
            }
        }
        scene.uiElements.lives.label = scene.add.text(
            x+20,
            y, 
            "Lives:", 
            {
                color: '#FFF',
                strokeThickness: 3,
                stroke: '#000'
            }
        );

        scene.uiElements.lives.value = scene.add.text(
            x+83,
            y, 
            scene.gameState.lives, 
            {
                color: '#FFF',
                strokeThickness: 3,
                stroke: '#000'
            }
        );

    } else {
        scene.uiElements.lives.value.setText(scene.gameState.lives);
    }
    
    if (!scene.uiElements.itemsCollected){
        scene.uiElements = { 
            ...scene.uiElements, 
            itemsCollected: {
                label: null,
                value: null
            }
        }
        scene.uiElements.itemsCollected.label = scene.add.text(
            x+200,
            y, 
            'Items:', 
            {
                color: '#FFF',
                strokeThickness: 3,
                stroke: '#000'
            }
        );
        scene.uiElements.itemsCollected.value = scene.add.text(
            x+262,
            y, 
            scene.gameState.itemsCollected, 
            {
                color: '#FFF',
                strokeThickness: 3,
                stroke: '#000'
            }
        );
    } else {
        scene.uiElements.itemsCollected.value.setText(scene.gameState.itemsCollected);
    }
}
export { killPlayer, getItem, loadScene, loadSceneWithData, registerKeyInput, setUI, setBGM, setBackground, createSceneGroups }