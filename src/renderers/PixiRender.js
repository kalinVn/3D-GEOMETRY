import {MODEL_MIN_X, MODEL_MAX_X, MODEL_MIN_Y, MODEL_MAX_Y} from '../config.js';
import {Application, Assets, Graphics}  from 'pixi.js';
import CoordSystem from '../units/CoordSystem'; 

class PixiRender {

    constructor () {
        this.canvas = document.createElement('canvas');
        this.canvas.setAttribute('id','canvas1');
        // document.body.append(this.canvas);
        this.app = new Application({
            width: 1500,
            height: 700,
            backgroundColor: 0xFFFFFF, 
            autoResize: true, 
            view: this.canvas
        });

        document.body.appendChild(this.app.view);

        this.graphics = new Graphics();
        
    }

    drawCoordSystem (coordSystem) {
        const centerX = coordSystem.getCenter().x;
        const centerY = coordSystem.getCenter().y;
        const axisX = {
            x: coordSystem.getAxisX().x,
            y: coordSystem.getAxisX().y,
        };

        const axisY = {
            x: coordSystem.getAxisY().x,
            y: coordSystem.getAxisY().y,
        };

        const axisZ = {
            x: coordSystem.getAxisZ().x,
            y: coordSystem.getAxisZ().y,
        };
        
        this._drawLine(centerX, centerY, axisX.x, axisX.y, "red");
        this._drawLine(centerX, centerY, axisY.x, axisY.y, "red");
        this._drawLine(centerX, centerY, axisZ.x, axisZ.y, "red");
        this.app.stage.addChild(this.graphics)
    }

    drawCube (coordSystem, cube) {
        const centerX = coordSystem.getCenter().x;
        const centerY = coordSystem.getCenter().y;
        
        const edges = cube.getEdges();
        
        Object.entries(edges).forEach( (item) => {
            const edge = item[1];
            console.log(edge.from.x)
            this._drawLine(edge.from.x, edge.from.y, edge.to.x, edge.to.y, "pink");
        });
        
    }


    _drawLine (fromX, fromY, toX, toY, color) {
        this.graphics.beginFill(0x000000);
        this.graphics.lineStyle(2, 0x000000, 1);
        this.graphics.moveTo(fromX, fromY);
        this.graphics.lineTo(toX, toY);
        
        this.graphics.closePath();
        this.graphics.endFill();
    }

}

export default PixiRender;