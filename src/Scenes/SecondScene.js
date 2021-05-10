import Phaser from 'phaser';
import { createPlayer } from '../Player/Player';
import { createTile,  tileSize } from '../Tile/Tile';
import { createDeathTile } from '../DeathTile/DeathTile';
import { createCollectableItem } from '../CollectableItem/CollectableItem';
import { createSceneChanger } from '../SceneChanger/SceneChanger';
import { getItem, loadScene, loadSceneWithData, registerKeyInput, killPlayer } from './SceneUtilities';

export default class SecondScene extends Phaser.Scene{

    constructor () {
        super({
            key: 'SecondScene'
        });
        this.key = 'SecondScene';
        //USE IT TO KEEP USING OBJECTS AS this ON PASSING METHOD THROUGH PARAMS
        //this.loadScene = this.loadScene.bind(this);
        //this.getItem = this.getItem.bind(this);
        //this.killPlayer = this.killPlayer.bind(this);
        //this.gameState = this.gameState.bind(this);

    }
    init(data){
        this.gameState = data.gameState;
        this.vector2DtargetSceneSpawn = data.vector2DtargetSceneSpawn;

        if(!this.gameState.scenes[this.scene.key]){
            this.gameState.scenes[this.scene.key] = {
                items: []
            }
        }
    }
    preload () {
        this.uiElements = {};
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
/*        createTile(scene,x+(tileSize.x*12),y,"sand/plain");
        createTile(scene,x+(tileSize.x*13),y,"sand/plain");
        createTile(scene,x+(tileSize.x*14),y,"sand/plain");
        createTile(scene,x+(tileSize.x*15),y,"sand/plain");*/
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
/*
        createTile(scene,x+(tileSize.x*11),y+tileSize.y,"sand/plain");
        createTile(scene,x+(tileSize.x*12),y+tileSize.y,"sand/plain");
        createTile(scene,x+(tileSize.x*13),y+tileSize.y,"sand/plain");
        createTile(scene,x+(tileSize.x*14),y+tileSize.y,"sand/plain");
        createTile(scene,x+(tileSize.x*15),y+tileSize.y,"sand/plain");
*/
        
        
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
    createCeiling(scene,x,y){
        createTile(scene,x+(tileSize.x*1),y+(tileSize.y*0),"dirt/plain");
        createTile(scene,x+(tileSize.x*2),y+(tileSize.y*0),"dirt/plain");
        createTile(scene,x+(tileSize.x*3),y+(tileSize.y*0),"dirt/plain");
        createTile(scene,x+(tileSize.x*4),y+(tileSize.y*0),"dirt/plain");
        createTile(scene,x+(tileSize.x*5),y+(tileSize.y*0),"dirt/plain");
        createTile(scene,x+(tileSize.x*6),y+(tileSize.y*0),"dirt/plain");
        createTile(scene,x+(tileSize.x*7),y+(tileSize.y*0),"dirt/plain");
        createTile(scene,x+(tileSize.x*8),y+(tileSize.y*0),"dirt/plain");
        createTile(scene,x+(tileSize.x*9),y+(tileSize.y*0),"dirt/plain");
        createTile(scene,x+(tileSize.x*10),y+(tileSize.y*0),"dirt/plain");
        createTile(scene,x+(tileSize.x*11),y+(tileSize.y*0),"dirt/plain");
        createTile(scene,x+(tileSize.x*12),y+(tileSize.y*0),"dirt/plain");
        createTile(scene,x+(tileSize.x*13),y+(tileSize.y*0),"dirt/plain");
        createTile(scene,x+(tileSize.x*14),y+(tileSize.y*0),"dirt/plain");
        createTile(scene,x+(tileSize.x*15),y+(tileSize.y*0),"dirt/plain");
        createTile(scene,x+(tileSize.x*16),y+(tileSize.y*0),"dirt/plain");
        createTile(scene,x+(tileSize.x*17),y+(tileSize.y*0),"dirt/plain");
        createTile(scene,x+(tileSize.x*18),y+(tileSize.y*0),"dirt/plain");
        createTile(scene,x+(tileSize.x*19),y+(tileSize.y*0),"dirt/plain");
        createTile(scene,x+(tileSize.x*20),y+(tileSize.y*0),"dirt/plain");

    }
    createWestWall(scene,x,y){

        
        createTile(scene,x,y-(tileSize.y*7),"dirt/plain");
        createTile(scene,x+tileSize.x,y-(tileSize.y*7),"dirt/topBorder");
        createTile(scene,x+(tileSize.x*2),y-(tileSize.y*7),"dirt/plain");

        createTile(scene,x,y-(tileSize.y*6),"dirt/topBorder");
        createTile(scene,x+tileSize.x,y-(tileSize.y*6),"dirt/plain");
        createTile(scene,x+(tileSize.x*2),y-(tileSize.y*6),"dirt/plain");

        createTile(scene,x,y-(tileSize.y*5),"dirt/plain");
        createTile(scene,x+tileSize.x,y-(tileSize.y*5),"dirt/topLeftBorder");
        createTile(scene,x+(tileSize.x*2),y-(tileSize.y*5),"dirt/plain");

        createTile(scene,x,y-(tileSize.y*4),"dirt/topRightBorder");
        createTile(scene,x+tileSize.x,y-(tileSize.y*4),"dirt/plain");
        createTile(scene,x+(tileSize.x*2),y-(tileSize.y*4),"dirt/topBorder");

        createTile(scene,x,y-(tileSize.y*3),"dirt/plain");
        createTile(scene,x+tileSize.x,y-(tileSize.y*3),"dirt/bottomBorder");
        createTile(scene,x+(tileSize.x*2),y-(tileSize.y*3),"dirt/topLeftBorder");

        createTile(scene,x,y-(tileSize.y*2),"dirt/topBorder");
        createTile(scene,x+tileSize.x,y-(tileSize.y*2),"dirt/plain");
        createTile(scene,x+(tileSize.x*2),y-(tileSize.y*2),"dirt/plain");

        createTile(scene,x,y-tileSize.y,"dirt/plain");
        createTile(scene,x+tileSize.x,y-tileSize.y,"dirt/allBorders");
        createTile(scene,x+(tileSize.x*2),y-tileSize.y,"dirt/plain");

        createTile(scene,x,y,"dirt/topBottomBorder");
        createTile(scene,x+tileSize.x,y,"dirt/topBorder");
        createTile(scene,x+(tileSize.x*2),y,"dirt/topBorder");

        createTile(scene,x,y+(tileSize.y*1),"dirt/rightBorder");
        

    }

    createEastWall(scene,x,y){
        createTile(scene,x,y-(tileSize.y*7),"dirt/plain");
        createTile(scene,x+tileSize.x,y-(tileSize.y*7),"dirt/topBorder");
        createTile(scene,x+(tileSize.x*2),y-(tileSize.y*7),"dirt/plain");

        createTile(scene,x,y-(tileSize.y*6),"dirt/topBorder");
        createTile(scene,x+tileSize.x,y-(tileSize.y*6),"dirt/plain");
        createTile(scene,x+(tileSize.x*2),y-(tileSize.y*6),"dirt/plain");
/*
        createTile(scene,x,y-(tileSize.y*5),"dirt/plain");
        createTile(scene,x+tileSize.x,y-(tileSize.y*5),"dirt/topLeftBorder");
        createTile(scene,x+(tileSize.x*2),y-(tileSize.y*5),"dirt/plain");
      
        createTile(scene,x,y-(tileSize.y*4),"dirt/topRightBorder");
        createTile(scene,x+tileSize.x,y-(tileSize.y*4),"dirt/plain");
        createTile(scene,x+(tileSize.x*2),y-(tileSize.y*4),"dirt/topBorder");

        createTile(scene,x,y-(tileSize.y*3),"dirt/plain");
        createTile(scene,x+tileSize.x,y-(tileSize.y*3),"dirt/bottomBorder");
        createTile(scene,x+(tileSize.x*2),y-(tileSize.y*3),"dirt/topLeftBorder");

        createTile(scene,x,y-(tileSize.y*2),"dirt/topBorder");
        createTile(scene,x+tileSize.x,y-(tileSize.y*2),"dirt/plain");
        createTile(scene,x+(tileSize.x*2),y-(tileSize.y*2),"dirt/plain");

        createTile(scene,x,y-tileSize.y,"dirt/plain");
        createTile(scene,x+tileSize.x,y-tileSize.y,"dirt/allBorders");
        createTile(scene,x+(tileSize.x*2),y-tileSize.y,"dirt/plain");

        createTile(scene,x,y,"dirt/topBottomBorder");
        createTile(scene,x+tileSize.x,y,"dirt/topBorder");
        createTile(scene,x+(tileSize.x*2),y,"dirt/topBorder");
        
        createTile(scene,x,y-(tileSize.y*7),"dirt/plain");
        createTile(scene,x+tileSize.x,y-(tileSize.y*7),"dirt/topBorder");
        createTile(scene,x+(tileSize.x*2),y-(tileSize.y*7),"dirt/plain");

        createTile(scene,x,y-(tileSize.y*6),"dirt/topBorder");
        createTile(scene,x+tileSize.x,y-(tileSize.y*6),"dirt/plain");
        createTile(scene,x+(tileSize.x*2),y-(tileSize.y*6),"dirt/plain");

        createTile(scene,x,y-(tileSize.y*5),"dirt/plain");
        createTile(scene,x+tileSize.x,y-(tileSize.y*5),"dirt/topLeftBorder");
        createTile(scene,x+(tileSize.x*2),y-(tileSize.y*5),"dirt/plain");

        createTile(scene,x,y-(tileSize.y*4),"dirt/topRightBorder");
        createTile(scene,x+tileSize.x,y-(tileSize.y*4),"dirt/plain");
        createTile(scene,x+(tileSize.x*2),y-(tileSize.y*4),"dirt/topBorder");
*/
        createTile(scene,x,y-(tileSize.y*3),"dirt/plain");
        createTile(scene,x+tileSize.x,y-(tileSize.y*3),"dirt/bottomBorder");
        createTile(scene,x+(tileSize.x*2),y-(tileSize.y*3),"dirt/topLeftBorder");

        createTile(scene,x,y-(tileSize.y*2),"dirt/topBorder");
        createTile(scene,x+tileSize.x,y-(tileSize.y*2),"dirt/plain");
        createTile(scene,x+(tileSize.x*2),y-(tileSize.y*2),"dirt/plain");

        createTile(scene,x,y-tileSize.y,"dirt/plain");
        createTile(scene,x+tileSize.x,y-tileSize.y,"dirt/allBorders");
        createTile(scene,x+(tileSize.x*2),y-tileSize.y,"dirt/plain");

        createTile(scene,x,y,"dirt/topBottomBorder");
        createTile(scene,x+tileSize.x,y,"dirt/topBorder");
        createTile(scene,x+(tileSize.x*2),y,"dirt/topBorder");

        createSceneChanger(scene,x+tileSize.x*2,y+tileSize.y,"MainScene",loadSceneWithData, {x: 30, y: 110});
        createSceneChanger(scene,x+tileSize.x*2,y-(tileSize.y*5),"MainScene",loadSceneWithData, {x: tileSize.x*1, y: tileSize.y*1});

        
    }
    createDeathBorder(scene){

        //BOTTOM
        createDeathTile(scene,tileSize.x*1,tileSize.y*11,killPlayer);
        createDeathTile(scene,tileSize.x*2,tileSize.y*11,killPlayer);
        createDeathTile(scene,tileSize.x*3,tileSize.y*11,killPlayer);
        createDeathTile(scene,tileSize.x*4,tileSize.y*11,killPlayer);
        createDeathTile(scene,tileSize.x*5,tileSize.y*11,killPlayer);
        createDeathTile(scene,tileSize.x*6,tileSize.y*11,killPlayer);
        createDeathTile(scene,tileSize.x*7,tileSize.y*11,killPlayer);
        createDeathTile(scene,tileSize.x*8,tileSize.y*11,killPlayer);
        createDeathTile(scene,tileSize.x*9,tileSize.y*11,killPlayer);
        createDeathTile(scene,tileSize.x*10,tileSize.y*11,killPlayer);
        createDeathTile(scene,tileSize.x*11,tileSize.y*11,killPlayer);
        createDeathTile(scene,tileSize.x*12,tileSize.y*11,killPlayer);
        createDeathTile(scene,tileSize.x*13,tileSize.y*11,killPlayer);
        createDeathTile(scene,tileSize.x*14,tileSize.y*11,killPlayer);
        createDeathTile(scene,tileSize.x*15,tileSize.y*11,killPlayer);
        createDeathTile(scene,tileSize.x*16,tileSize.y*11,killPlayer);
        createDeathTile(scene,tileSize.x*17,tileSize.y*11,killPlayer);
        createDeathTile(scene,tileSize.x*18,tileSize.y*11,killPlayer);

    }
    createMap(scene){
        this.createFloor(scene,0,(tileSize.y*8));   
        this.createPlatform(scene,(tileSize.x*3),(tileSize.y*6),"rock");


        this.createPlatform(scene,(tileSize.x*8),(tileSize.y*4),"dirt");
        this.createPlatform(scene,(tileSize.x*15),(tileSize.y*3),"sand");
        this.createWestWall(scene,0,(tileSize.y*6));
        this.createEastWall(scene,(tileSize.x*18),(tileSize.y*6));
        this.createCeiling(scene,0,0);
        this.createDeathBorder(scene);

    }
    createGroups(){
        //Create static group to fill in all map tiles
        this.tiles = this.physics.add.staticGroup();
        //Create static group to fill in all collectable items
        this.collectableItems = this.physics.add.staticGroup();
        //Create static group to fill in all SceneChangers
        this.sceneChangers = this.physics.add.staticGroup();
    }
    SetBGM(){
        this.music = this.sound.add('whitenoise');
        this.music.play({
            loop: true
        });
    }
    SetUI(scene,x,y){
        if(!this.uiElements.lives){
            this.uiElements = { 
                ...this.uiElements, 
                lives: {
                    label: null,
                    value: null
                }
            }
            this.uiElements.lives.label = scene.add.text(
                x+20,
                y, 
                "Lives:", 
                {
                    color: '#FFF',
                    strokeThickness: 3,
                    stroke: '#000'
                }
            );

            this.uiElements.lives.value = scene.add.text(
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
            this.uiElements.lives.value.setText(scene.gameState.lives);
        }
        
        if (!this.uiElements.itemsCollected){
            this.uiElements = { 
                ...this.uiElements, 
                itemsCollected: {
                    label: null,
                    value: null
                }
            }
            this.uiElements.itemsCollected.label = scene.add.text(
                x+200,
                y, 
                'Items:', 
                {
                    color: '#FFF',
                    strokeThickness: 3,
                    stroke: '#000'
                }
            );
            this.uiElements.itemsCollected.value = scene.add.text(
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
            this.uiElements.itemsCollected.value.setText(scene.gameState.itemsCollected);
        }
    }
    setBackground(){
        this.add.image(
            this.game.config.width/2,
            this.game.config.height/2,
            "background02"
        ).setScale(0.3,0.22);
    }
    create () {
        this.SetBGM();
        registerKeyInput(this);
        this.createGroups();
        this.setBackground();

        // populate this.player        
        createPlayer(
            this,
            this.vector2DtargetSceneSpawn ? this.vector2DtargetSceneSpawn.x : 250,
            this.vector2DtargetSceneSpawn ? this.vector2DtargetSceneSpawn.y : 0,
        );

        this.createMap(this);
        !this.gameState.scenes[this.scene.key].items[0] ? createCollectableItem(0,this,(tileSize.x*11),(tileSize.y*3), getItem) : null;
        !this.gameState.scenes[this.scene.key].items[1] ? createCollectableItem(1,this,(tileSize.x*3),(tileSize.y*2), getItem) : null;
        !this.gameState.scenes[this.scene.key].items[2] ? createCollectableItem(2,this,(tileSize.x*18),(tileSize.y*7), getItem) : null;
        !this.gameState.scenes[this.scene.key].items[3] ? createCollectableItem(3,this,(tileSize.x*2),(tileSize.y*7), getItem) : null;
        
        
        this.SetUI(this,0,130);


    }

    update() {
        this.player.update(this)
    }
}
