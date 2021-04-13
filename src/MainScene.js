import Phaser from 'phaser';
import { createPlayer } from './Player/Player';
import { createTile,  tileSize } from './Tile/Tile';
import { createCollectableItem } from './CollectableItem/CollectableItem';

export default class MainScene extends Phaser.Scene{

    constructor () {
        super({
            key: 'MainScene'
        });
        
    }
    preload () {
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

        createTile(scene,x,y+tileSize.y,"dirt/plain");

    }

    createEastWall(scene,x,y){
        createTile(scene,x,y-(tileSize.y*6),"rock/leftBorder");
        createTile(scene,x,y-(tileSize.y*5),"rock/plain");
        createTile(scene,x,y-(tileSize.y*4),"rock/topLeftBorder");
        createTile(scene,x,y-(tileSize.y*3),"rock/leftBorder");
        createTile(scene,x,y-(tileSize.y*2),"rock/plain");
        createTile(scene,x,y-tileSize.y,"rock/leftBorder");
        createTile(scene,x,y,"rock/leftBorder");
        createTile(scene,x,y+tileSize.y,"rock/leftBorder");
    }

    createMap(scene){
        this.createFloor(scene,0,(tileSize.y*8));   
        this.createPlatform(scene,(tileSize.x*3),(tileSize.y*6),"rock");


        this.createPlatform(scene,(tileSize.x*11),(tileSize.y*4),"dirt");
        this.createPlatform(scene,(tileSize.x*15),(tileSize.y*3),"sand");
        this.createWestWall(scene,0,(tileSize.y*6));
        this.createEastWall(scene,(tileSize.x*19),(tileSize.y*6));

    }
    create () {
        // Register input keys 
        this.keys = {
            left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
            right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
            crouch: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
        };
        //Create static group to fill in all map tiles
        this.tiles = this.physics.add.staticGroup();
        //Create static group to fill in all collectable items
        this.collectableItems = this.physics.add.staticGroup();
        this.items = [];

        this.createMap(this);
        // populate this.player
        createPlayer(this,250,0);
        createCollectableItem(this,(tileSize.x*11),(tileSize.y*3))
        createCollectableItem(this,(tileSize.x*3),(tileSize.y*2))
        createCollectableItem(this,(tileSize.x*18),(tileSize.y*7))
        createCollectableItem(this,(tileSize.x*2),(tileSize.y*7))
        //Generate collider and user callback when player collides against a tile
       this.physics.add.collider(this.player,this.tiles, (e => {
            this.player.canJump = true;
        }))

    }

    update() {
        this.player.update(this)
    }
}
