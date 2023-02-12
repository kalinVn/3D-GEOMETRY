import { forEach } from 'lodash';
import {MODEL_MIN_X, MODEL_MAX_X, MODEL_MIN_Y, MODEL_MAX_Y} from './config.js';


class Render {

    constructor () {
        this.canvas = document.createElement('canvas');
        this.canvas.setAttribute('id','canvas1');
        document.body.append(this.canvas);

        this.ctx = this.canvas.getContext("2d");
        this.ctx.canvas.width  = 1500;
		this.ctx.canvas.height = 900;
    }


    render (points) {
        const width = this.canvas.width;
        const height = this.canvas.height;
        this.ctx.clearRect(0, 0, width, height);
        
        points.forEach((point) => {
            this._renderPoint(point);
        });
        // requestAnimationFrame(render);
    }

    drawCoordSystem (coordSystem, ) {
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
        this.ctx.beginPath();
        this.ctx.moveTo(fromX, fromY);
        this.ctx.lineTo(toX, toY);
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = color;
        this.ctx.stroke();
        
    }

    _renderPoint (point) {
        const projectedPoint = this._project(point);
        const x = projectedPoint[0],
              y = projectedPoint[1];
        
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(x + 0.5, y + 0.5);
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = "red";
        this.ctx.stroke();
    }
    
    _project (point) {
        // console.log(point);
        // console.log(this.canvas.width * (point[0] - MODEL_MIN_X) / (MODEL_MAX_X - MODEL_MIN_X));
        return [
            this.canvas.width * (point[0] - MODEL_MIN_X) / (MODEL_MAX_X - MODEL_MIN_X),
            this.canvas.height * (1 - (point[1] - MODEL_MIN_Y) / (MODEL_MAX_X - MODEL_MIN_X)),
        ];
    }
}

export default Render;