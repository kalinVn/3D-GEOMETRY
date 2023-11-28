
class CanvasRender {

    constructor () {
        this.canvas = document.createElement('canvas');
        this.canvas.setAttribute('id','canvas1');
        document.body.append(this.canvas);

        this.ctx = this.canvas.getContext("2d");
        this.ctx.canvas.width  = 1500;
		this.ctx.canvas.height = 900;
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

}

export default CanvasRender;