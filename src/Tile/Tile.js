import Phaser from 'phaser';
export default class Tile extends Phaser.GameObjects.Sprite{
    constructor (config) {
        super(config.scene, config.x, config.y, config.key);
        
        config.scene.tiles.add(this,true);
        this.body.setSize(colliderSize.x/2, colliderSize.y)
        this.body.x += colliderSize.x/2;
    }
}
const tileSize = { x: 16, y: 16 };
const colliderSize = { x: 18, y: 18};

function createAnimations(scene){
    //DIRT
    scene.anims.create({
        key: 'dirt/plain',
        frames: scene.anims.generateFrameNames('tileSpritesheet',{start: 0, end: 0}),
        frameRate: 0,
        repeat: 0
    });
    scene.anims.create({
        key: 'dirt/leftBorder',
        frames: scene.anims.generateFrameNames('tileSpritesheet',{start: 1, end: 1}),
        frameRate: 0,
        repeat: 0
    });
    scene.anims.create({
        key: 'dirt/topBorder',
        frames: scene.anims.generateFrameNames('tileSpritesheet',{start: 2, end: 2}),
        frameRate: 0,
        repeat: 0
    });
    scene.anims.create({
        key: 'dirt/bottomBorder',
        frames: scene.anims.generateFrameNames('tileSpritesheet',{start: 3, end: 3}),
        frameRate: 0,
        repeat: 0
    });
    scene.anims.create({
        key: 'dirt/rightBorder',
        frames: scene.anims.generateFrameNames('tileSpritesheet',{start: 4, end: 4}),
        frameRate: 0,
        repeat: 0
    });
    scene.anims.create({
        key: 'dirt/topRightBorder',
        frames: scene.anims.generateFrameNames('tileSpritesheet',{start: 5, end: 5}),
        frameRate: 0,
        repeat: 0
    });
    scene.anims.create({
        key: 'dirt/topLeftBorder',
        frames: scene.anims.generateFrameNames('tileSpritesheet',{start: 6, end: 6}),
        frameRate: 0,
        repeat: 0
    });
    scene.anims.create({
        key: 'dirt/topBottomBorder',
        frames: scene.anims.generateFrameNames('tileSpritesheet',{start: 7, end: 7}),
        frameRate: 0,
        repeat: 0
    });
    scene.anims.create({
        key: 'dirt/leftRightBorder',
        frames: scene.anims.generateFrameNames('tileSpritesheet',{start: 8, end: 8}),
        frameRate: 0,
        repeat: 0
    });
    scene.anims.create({
        key: 'dirt/bottomRightBorder',
        frames: scene.anims.generateFrameNames('tileSpritesheet',{start: 9, end: 9}),
        frameRate: 0,
        repeat: 0
    });
    scene.anims.create({
        key: 'dirt/bottomLeftBorder',
        frames: scene.anims.generateFrameNames('tileSpritesheet',{start: 10, end: 10}),
        frameRate: 0,
        repeat: 0
    });
    scene.anims.create({
        key: 'dirt/topRightLeftBorder',
        frames: scene.anims.generateFrameNames('tileSpritesheet',{start: 11, end: 11}),
        frameRate: 0,
        repeat: 0
    });
    scene.anims.create({
        key: 'dirt/topBottomRightBorder',
        frames: scene.anims.generateFrameNames('tileSpritesheet',{start: 12, end: 12}),
        frameRate: 0,
        repeat: 0
    });
    scene.anims.create({
        key: 'dirt/topBottomLeftBorder',
        frames: scene.anims.generateFrameNames('tileSpritesheet',{start: 13, end: 13}),
        frameRate: 0,
        repeat: 0
    });
    scene.anims.create({
        key: 'dirt/bottomLeftRightBorder',
        frames: scene.anims.generateFrameNames('tileSpritesheet',{start: 14, end: 14}),
        frameRate: 0,
        repeat: 0
    });
    scene.anims.create({
        key: 'dirt/allBorders',
        frames: scene.anims.generateFrameNames('tileSpritesheet',{start: 15, end: 15}),
        frameRate: 0,
        repeat: 0
    });

    //ROCK
    scene.anims.create({
        key: 'rock/plain',
        frames: scene.anims.generateFrameNames('tileSpritesheet',{start: 16, end: 16}),
        frameRate: 0,
        repeat: 0
    });
    scene.anims.create({
        key: 'rock/leftBorder',
        frames: scene.anims.generateFrameNames('tileSpritesheet',{start: 17, end: 17}),
        frameRate: 0,
        repeat: 0
    });
    scene.anims.create({
        key: 'rock/topBorder',
        frames: scene.anims.generateFrameNames('tileSpritesheet',{start: 18, end: 18}),
        frameRate: 0,
        repeat: 0
    });
    scene.anims.create({
        key: 'rock/bottomBorder',
        frames: scene.anims.generateFrameNames('tileSpritesheet',{start: 19, end: 19}),
        frameRate: 0,
        repeat: 0
    });
    scene.anims.create({
        key: 'rock/rightBorder',
        frames: scene.anims.generateFrameNames('tileSpritesheet',{start: 20, end: 20}),
        frameRate: 0,
        repeat: 0
    });
    scene.anims.create({
        key: 'rock/topRightBorder',
        frames: scene.anims.generateFrameNames('tileSpritesheet',{start: 21, end: 21}),
        frameRate: 0,
        repeat: 0
    });
    scene.anims.create({
        key: 'rock/topLeftBorder',
        frames: scene.anims.generateFrameNames('tileSpritesheet',{start: 22, end: 22}),
        frameRate: 0,
        repeat: 0
    });
    scene.anims.create({
        key: 'rock/topBottomBorder',
        frames: scene.anims.generateFrameNames('tileSpritesheet',{start: 23, end: 23}),
        frameRate: 0,
        repeat: 0
    });
    scene.anims.create({
        key: 'rock/leftRightBorder',
        frames: scene.anims.generateFrameNames('tileSpritesheet',{start: 24, end: 24}),
        frameRate: 0,
        repeat: 0
    });
    scene.anims.create({
        key: 'rock/bottomRightBorder',
        frames: scene.anims.generateFrameNames('tileSpritesheet',{start: 25, end: 25}),
        frameRate: 0,
        repeat: 0
    });
    scene.anims.create({
        key: 'rock/bottomLeftBorder',
        frames: scene.anims.generateFrameNames('tileSpritesheet',{start: 26, end: 26}),
        frameRate: 0,
        repeat: 0
    });
    scene.anims.create({
        key: 'rock/topRightLeftBorder',
        frames: scene.anims.generateFrameNames('tileSpritesheet',{start: 27, end: 27}),
        frameRate: 0,
        repeat: 0
    });
    scene.anims.create({
        key: 'rock/topBottomRightBorder',
        frames: scene.anims.generateFrameNames('tileSpritesheet',{start: 28, end: 28}),
        frameRate: 0,
        repeat: 0
    });
    scene.anims.create({
        key: 'rock/topBottomLeftBorder',
        frames: scene.anims.generateFrameNames('tileSpritesheet',{start: 29, end: 29}),
        frameRate: 0,
        repeat: 0
    });
    scene.anims.create({
        key: 'rock/bottomLeftRightBorder',
        frames: scene.anims.generateFrameNames('tileSpritesheet',{start: 30, end: 30}),
        frameRate: 0,
        repeat: 0
    });
    scene.anims.create({
        key: 'rock/allBorders',
        frames: scene.anims.generateFrameNames('tileSpritesheet',{start: 31, end: 31}),
        frameRate: 0,
        repeat: 0
    });
   
    //SAND
    scene.anims.create({
        key: 'sand/plain',
        frames: scene.anims.generateFrameNames('tileSpritesheet',{start: 32, end: 32}),
        frameRate: 0,
        repeat: 0
    });
    scene.anims.create({
        key: 'sand/leftBorder',
        frames: scene.anims.generateFrameNames('tileSpritesheet',{start: 33, end: 33}),
        frameRate: 0,
        repeat: 0
    });
    scene.anims.create({
        key: 'sand/topBorder',
        frames: scene.anims.generateFrameNames('tileSpritesheet',{start: 34, end: 34}),
        frameRate: 0,
        repeat: 0
    });
    scene.anims.create({
        key: 'sand/bottomBorder',
        frames: scene.anims.generateFrameNames('tileSpritesheet',{start: 35, end: 35}),
        frameRate: 0,
        repeat: 0
    });
    scene.anims.create({
        key: 'sand/rightBorder',
        frames: scene.anims.generateFrameNames('tileSpritesheet',{start: 36, end: 36}),
        frameRate: 0,
        repeat: 0
    });
    scene.anims.create({
        key: 'sand/topRightBorder',
        frames: scene.anims.generateFrameNames('tileSpritesheet',{start: 37, end: 37}),
        frameRate: 0,
        repeat: 0
    });
    scene.anims.create({
        key: 'sand/topLeftBorder',
        frames: scene.anims.generateFrameNames('tileSpritesheet',{start: 38, end: 38}),
        frameRate: 0,
        repeat: 0
    });
    scene.anims.create({
        key: 'sand/topBottomBorder',
        frames: scene.anims.generateFrameNames('tileSpritesheet',{start: 39, end: 39}),
        frameRate: 0,
        repeat: 0
    });
    scene.anims.create({
        key: 'sand/leftRightBorder',
        frames: scene.anims.generateFrameNames('tileSpritesheet',{start: 40, end: 40}),
        frameRate: 0,
        repeat: 0
    });
    scene.anims.create({
        key: 'sand/bottomRightBorder',
        frames: scene.anims.generateFrameNames('tileSpritesheet',{start: 41, end: 41}),
        frameRate: 0,
        repeat: 0
    });
    scene.anims.create({
        key: 'sand/bottomLeftBorder',
        frames: scene.anims.generateFrameNames('tileSpritesheet',{start: 42, end: 42}),
        frameRate: 0,
        repeat: 0
    });
    scene.anims.create({
        key: 'sand/topRightLeftBorder',
        frames: scene.anims.generateFrameNames('tileSpritesheet',{start: 43, end: 43}),
        frameRate: 0,
        repeat: 0
    });
    scene.anims.create({
        key: 'sand/topBottomRightBorder',
        frames: scene.anims.generateFrameNames('tileSpritesheet',{start: 44, end: 44}),
        frameRate: 0,
        repeat: 0
    });
    scene.anims.create({
        key: 'sand/topBottomLeftBorder',
        frames: scene.anims.generateFrameNames('tileSpritesheet',{start: 45, end: 45}),
        frameRate: 0,
        repeat: 0
    });
    scene.anims.create({
        key: 'sand/bottomLeftRightBorder',
        frames: scene.anims.generateFrameNames('tileSpritesheet',{start: 46, end: 46}),
        frameRate: 0,
        repeat: 0
    });
    scene.anims.create({
        key: 'sand/allBorders',
        frames: scene.anims.generateFrameNames('tileSpritesheet',{start: 47, end: 47}),
        frameRate: 0,
        repeat: 0
    });
}


function createTile(scene,x,y,spriteKey) {
    const tile = new Tile({
        scene: scene,
        key: 'tile',
        x,
        y
    })
    createAnimations(scene);
    tile.play(spriteKey);
}
function printTileSheet(scene,x,y) {

    createTile(scene,x,y,"dirt/plain");
    createTile(scene,x+tileSize.x,y,"dirt/leftBorder");
    createTile(scene,x+(tileSize.x*2),y,"dirt/topBorder");
    createTile(scene,x+(tileSize.x*3),y,"dirt/bottomBorder");
    createTile(scene,x+(tileSize.x*4),y,"dirt/rightBorder");
    createTile(scene,x+(tileSize.x*5),y,"dirt/topRightBorder");
    createTile(scene,x+(tileSize.x*6),y,"dirt/topLeftBorder");
    createTile(scene,x+(tileSize.x*7),y,"dirt/topBottomBorder");
    createTile(scene,x+(tileSize.x*8),y,"dirt/leftRightBorder");
    createTile(scene,x+(tileSize.x*9),y,"dirt/bottomRightBorder");
    createTile(scene,x+(tileSize.x*10),y,"dirt/bottomLeftBorder");
    createTile(scene,x+(tileSize.x*11),y,"dirt/topRightLeftBorder");
    createTile(scene,x+(tileSize.x*12),y,"dirt/topBottomRightBorder");
    createTile(scene,x+(tileSize.x*13),y,"dirt/topBottomLeftBorder");
    createTile(scene,x+(tileSize.x*14),y,"dirt/bottomLeftRightBorder");
    createTile(scene,x+(tileSize.x*15),y,"dirt/allBorders");

    createTile(scene,x,y+tileSize.y,"rock/plain");
    createTile(scene,x+tileSize.x,y+tileSize.y,"rock/leftBorder");
    createTile(scene,x+(tileSize.x*2),y+tileSize.y,"rock/topBorder");
    createTile(scene,x+(tileSize.x*3),y+tileSize.y,"rock/bottomBorder");
    createTile(scene,x+(tileSize.x*4),y+tileSize.y,"rock/rightBorder");
    createTile(scene,x+(tileSize.x*5),y+tileSize.y,"rock/topRightBorder");
    createTile(scene,x+(tileSize.x*6),y+tileSize.y,"rock/topLeftBorder");
    createTile(scene,x+(tileSize.x*7),y+tileSize.y,"rock/topBottomBorder");
    createTile(scene,x+(tileSize.x*8),y+tileSize.y,"rock/leftRightBorder");
    createTile(scene,x+(tileSize.x*9),y+tileSize.y,"rock/bottomRightBorder");
    createTile(scene,x+(tileSize.x*10),y+tileSize.y,"rock/bottomLeftBorder");
    createTile(scene,x+(tileSize.x*11),y+tileSize.y,"rock/topRightLeftBorder");
    createTile(scene,x+(tileSize.x*12),y+tileSize.y,"rock/topBottomRightBorder");
    createTile(scene,x+(tileSize.x*13),y+tileSize.y,"rock/topBottomLeftBorder");
    createTile(scene,x+(tileSize.x*14),y+tileSize.y,"rock/bottomLeftRightBorder");
    createTile(scene,x+(tileSize.x*15),y+tileSize.y,"rock/allBorders");

    createTile(scene,x,y+(tileSize.y*2),"sand/plain");
    createTile(scene,x+tileSize.x,y+(tileSize.y*2),"sand/leftBorder");
    createTile(scene,x+(tileSize.x*2),y+(tileSize.y*2),"sand/topBorder");
    createTile(scene,x+(tileSize.x*3),y+(tileSize.y*2),"sand/bottomBorder");
    createTile(scene,x+(tileSize.x*4),y+(tileSize.y*2),"sand/rightBorder");
    createTile(scene,x+(tileSize.x*5),y+(tileSize.y*2),"sand/topRightBorder");
    createTile(scene,x+(tileSize.x*6),y+(tileSize.y*2),"sand/topLeftBorder");
    createTile(scene,x+(tileSize.x*7),y+(tileSize.y*2),"sand/topBottomBorder");
    createTile(scene,x+(tileSize.x*8),y+(tileSize.y*2),"sand/leftRightBorder");
    createTile(scene,x+(tileSize.x*9),y+(tileSize.y*2),"sand/bottomRightBorder");
    createTile(scene,x+(tileSize.x*10),y+(tileSize.y*2),"sand/bottomLeftBorder");
    createTile(scene,x+(tileSize.x*11),y+(tileSize.y*2),"sand/topRightLeftBorder");
    createTile(scene,x+(tileSize.x*12),y+(tileSize.y*2),"sand/topBottomRightBorder");
    createTile(scene,x+(tileSize.x*13),y+(tileSize.y*2),"sand/topBottomLeftBorder");
    createTile(scene,x+(tileSize.x*14),y+(tileSize.y*2),"sand/bottomLeftRightBorder");
    createTile(scene,x+(tileSize.x*15),y+(tileSize.y*2),"sand/allBorders");
}
export { Tile, createTile, printTileSheet, tileSize }