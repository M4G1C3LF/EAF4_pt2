import Phaser from 'phaser';

export default class SceneUtils {
    getItem(that,id){
            that.gameState.scenes[that.scene.key].items[id] = true;
            that.gameState.itemsCollected++;
            that.SetUI(that);
    }

    killPlayer(that){
        that.gameState.lives--;
        if (that.gameState.lives)
            loadScene(that.key, that.vector2DtargetSceneSpawn);
        else
            loadScene("GameOverScene");
    }
    loadScene(that,sceneId,vector2DtargetSceneSpawn){
        that.music.stop();
        that.scene.start(
            sceneId, 
            { 
                gameState: that.gameState, 
                vector2DtargetSceneSpawn
            }
        )
    }
    registerKeyInput(that){
        // Register input keys 
        that.keys = {
            left: that.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
            right: that.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
            crouch: that.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
        };
    }

    createFloor(scene,x,y){
        createTile(scene,x,y,"dirt/plain");
        createTile(scene,x+tileSize.x,y,"dirt/plain");
        createTile(scene,x+(tileSize.x*2),y,"dirt/plain");
        createTile(scene,x+(tileSize.x*3),y,"dirt/plain");
        createTile(scene,x+(tileSize.x*4),y,"dirt/plain");
        createTile(scene,x+(tileSize.x*5),y,"dirt/plain");
        createTile(scene,x+(tileSize.x*6),y,"dirt/topBorder");
        createTile(scene,x+(tileSize.x*7),y,"dirt/topBorder");
        createTile(scene,x+(tileSize.x*8),y,"dirt/topBorder");
        createTile(scene,x+(tileSize.x*9),y,"sand/topBorder");
        createTile(scene,x+(tileSize.x*10),y,"sand/topBorder");
        createTile(scene,x+(tileSize.x*11),y,"sand/topBorder");
        createTile(scene,x+(tileSize.x*12),y,"sand/plain");
        createTile(scene,x+(tileSize.x*13),y,"sand/plain");
        createTile(scene,x+(tileSize.x*14),y,"sand/plain");
        createTile(scene,x+(tileSize.x*15),y,"sand/plain");
        createTile(scene,x+(tileSize.x*16),y,"rock/plain");
        createTile(scene,x+(tileSize.x*17),y,"rock/plain");
        createTile(scene,x+(tileSize.x*18),y,"rock/plain");
        createTile(scene,x+(tileSize.x*19),y,"rock/plain");

        createTile(scene,x,y+tileSize.y,"dirt/plain");
        createTile(scene,x+tileSize.x,y+tileSize.y,"dirt/plain");
        createTile(scene,x+(tileSize.x*2),y+tileSize.y,"dirt/plain");
        createTile(scene,x+(tileSize.x*3),y+tileSize.y,"dirt/plain");
        createTile(scene,x+(tileSize.x*4),y+tileSize.y,"dirt/plain");
        createTile(scene,x+(tileSize.x*5),y+tileSize.y,"dirt/plain");
        createTile(scene,x+(tileSize.x*6),y+tileSize.y,"dirt/plain");
        createTile(scene,x+(tileSize.x*7),y+tileSize.y,"dirt/plain");
        createTile(scene,x+(tileSize.x*8),y+tileSize.y,"dirt/plain");
        createTile(scene,x+(tileSize.x*9),y+tileSize.y,"sand/plain");
        createTile(scene,x+(tileSize.x*10),y+tileSize.y,"sand/plain");
        createTile(scene,x+(tileSize.x*11),y+tileSize.y,"sand/plain");
        createTile(scene,x+(tileSize.x*12),y+tileSize.y,"sand/plain");
        createTile(scene,x+(tileSize.x*13),y+tileSize.y,"sand/plain");
        createTile(scene,x+(tileSize.x*14),y+tileSize.y,"sand/plain");
        createTile(scene,x+(tileSize.x*15),y+tileSize.y,"sand/plain");
        createTile(scene,x+(tileSize.x*16),y+tileSize.y,"rock/plain");
        createTile(scene,x+(tileSize.x*17),y+tileSize.y,"rock/plain");
        createTile(scene,x+(tileSize.x*18),y+tileSize.y,"rock/plain");
        createTile(scene,x+(tileSize.x*19),y+tileSize.y,"rock/plain");
    }

    createPlatform(scene,x,y,materialString){
        createTile(scene,x,y,`${materialString}/topBottomLeftBorder`);
        createTile(scene,x+tileSize.x,y,`${materialString}/topBottomBorder`);
        createTile(scene,x+(tileSize.x*2),y,`${materialString}/topBottomRightBorder`);

    }
    SetUI(scene,x,y,uiElements){
        if(!uiElements.lives){
            uiElements = { 
                ...uiElements, 
                lives: {
                    label: scene,
                    value: scene
                }
            }
            uiElements.lives.label = scene.add.text(
                x+20,
                y, 
                "Lives:", 
                {
                    color: '#FFF',
                    strokeThickness: 3,
                    stroke: '#000'
                }
            );

            uiElements.lives.value = scene.add.text(
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
            uiElements.lives.value.setText(scene.gameState.lives);
        }
        
        if (!scene.uiElements.itemsCollected){
            uiElements = { 
                ...uiElements, 
                itemsCollected: {
                    label: null,
                    value: null
                }
            }
            uiElements.itemsCollected.label = scene.add.text(
                x+200,
                y, 
                'Items:', 
                {
                    color: '#FFF',
                    strokeThickness: 3,
                    stroke: '#000'
                }
            );
            uiElements.itemsCollected.value = scene.add.text(
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
            uiElements.itemsCollected.value.setText(scene.gameState.itemsCollected);
        }
    }
}