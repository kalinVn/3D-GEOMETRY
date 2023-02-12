import {MODEL_MIN_X, MODEL_MAX_X, MODEL_MIN_Y, MODEL_MAX_Y} from '../config.js';


class PixiRender {

    constructor () {
        this.canvas = document.createElement('canvas');
        this.canvas.setAttribute('id','canvas1');
        document.body.append(this.canvas);

        this.ctx = this.canvas.getContext("2d");
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
        const x = coordSystem.getAxisX().x;
        const y = coordSystem.getAxisX().y;
        // console.log(centerX, centerY, x, y)
        
        this.ctx.beginPath();
        this.ctx.moveTo(10,10);
        this.ctx.lineTo(200, 100);
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = "red";
        this.ctx.stroke();
        
    }

    _renderPoint (point) {
        // const projectedPoint = this._project(point);
        // const x = projectedPoint[0],
        //       y = projectedPoint[1];
        
        // this.ctx.moveTo(x, y);
        // this.ctx.lineTo(x + 0.5, y + 0.5);
        // this.ctx.lineWidth = 2;
        // this.ctx.strokeStyle = "red";
        // this.ctx.stroke();
    }
    
    _project (point) {
        // console.log(point);
        // console.log(this.canvas.width * (point[0] - MODEL_MIN_X) / (MODEL_MAX_X - MODEL_MIN_X));
        // return [
        //     this.canvas.width * (point[0] - MODEL_MIN_X) / (MODEL_MAX_X - MODEL_MIN_X),
        //     this.canvas.height * (1 - (point[1] - MODEL_MIN_Y) / (MODEL_MAX_X - MODEL_MIN_X)),
        // ];
    }
}

export default PixiRender;