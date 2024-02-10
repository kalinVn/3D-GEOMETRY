import {PADDING_LABEL_AXISES_COORDSYS} from '../config.js';
import {Application, Text, Graphics}  from 'pixi.js';
import CoordSystem from '../units/CoordSystem'; 

class PixiRender {

    constructor () {
        this.canvas = document.createElement('canvas');
        this.canvas.setAttribute('id','canvas1');
       
        this.app = new Application({
            width: 1500,
            height: 700,
            backgroundColor: 0x000000, 
            autoResize: true, 
            view: this.canvas
        });

        document.body.appendChild(this.app.view);

        this.graphics = new Graphics();
        
    }

    getStage () {
        return this.app.stage;
    }

    drawPlane (plane) {
        this.drawLine(plane.getV1().x, plane.getV1().y, plane.getV2().x, plane.getV2().y, 0x000000);
        this.drawLine(plane.getV2().x, plane.getV2().y, plane.getV3().x, plane.getV3().y, 0x000000);
        this.drawLine(plane.getV3().x, plane.getV3().y, plane.getV4().x, plane.getV4().y, 0x000000);
        this.drawLine(plane.getV1().x, plane.getV1().y, plane.getV4().x, plane.getV4().y, 0x000000);
        
        this.graphics.beginFill(0xFFFF00);
        this.graphics.drawPolygon(plane.getV1().x, plane.getV1().y, plane.getV2().x, plane.getV2().y, plane.getV3().x, plane.getV3().y, plane.getV4().x, plane.getV4().y);

        this.app.stage.addChild(this.graphics);
    }

    render3DPoint (coordSys, plotedPoint) {

        this.drawLine(coordSys.getCenter().x, coordSys.getCenter().y, plotedPoint.v1.x, plotedPoint.v1.y, 0xa6336b);
        this.drawLine(coordSys.getCenter().x, coordSys.getCenter().y, plotedPoint.v2.x, plotedPoint.v2.y, 0xa6336b);
        this.drawLine(plotedPoint.v2.x, plotedPoint.v2.y, plotedPoint.v3.x, plotedPoint.v3.y, 0xa6336b);
        this.drawLine(plotedPoint.v3.x, plotedPoint.v3.y, plotedPoint.v1.x, plotedPoint.v1.y, 0xa6336b);
        this.drawLine(plotedPoint.v3.x, plotedPoint.v3.y, plotedPoint.v1.x, plotedPoint.v1.y, 0xa6336b);
        this.drawLine(plotedPoint.v3.x, plotedPoint.v3.y, plotedPoint.v4.x, plotedPoint.v4.y, 0xa6336b);
        this.drawLine(coordSys.getCenter().x, coordSys.getCenter().y, plotedPoint.v5.x, plotedPoint.v5.y, 0xa6336b);
        this.drawLine(plotedPoint.v1.x, plotedPoint.v1.y, plotedPoint.v6.x, plotedPoint.v6.y, 0xa6336b);
        this.drawLine(plotedPoint.v6.x, plotedPoint.v6.y, plotedPoint.v5.x, plotedPoint.v5.y, 0xa6336b);
    } 

    dispay3DPointCoordinates (point, plotedPoint) {
        const textCoordY = {
            fontSize: 12,
            fill: 'blue',
            align: 'center',
            x: plotedPoint.v2.x + 10,
            y: plotedPoint.v2.y -30
        };
    
        this.addText(point.y, textCoordY);
    
    
        const textCoordX = {
            fontSize: 12,
            fill: 'blue',
            align: 'center',
            x: plotedPoint.v1.x - 60,
            y: plotedPoint.v1.y - 10
        };
    
        this.addText(point.x, textCoordX);
    
    
        const textCoordZ = {
            fontSize: 12,
            fill: 'blue',
            align: 'center',
            x: plotedPoint.v5.x + 20,
            y: plotedPoint.v5.y - 30
        };
    
        this.addText(point.z, textCoordZ);
    
        const pointCoordText = {
            fontSize: 12,
            fill: 'blue',
            align: 'center',
            x: plotedPoint.v4.x + 20,
            y: plotedPoint.v4.y - 30
        };
    
        this.addText(`P(${point.x}, ${point.y}, ${point.z})`, pointCoordText);
    }

    drawCoordSystem (coordSystem) {
       
        const color = coordSystem.getColor();
        this.drawLine(coordSystem.getCenter().x, coordSystem.getCenter().y, coordSystem.getAxisY().x, coordSystem.getAxisY().y, color);
        this.drawLine(coordSystem.getCenter().x, coordSystem.getCenter().y, coordSystem.getAxisX().x, coordSystem.getAxisX().y, color);
        this.drawLine(coordSystem.getCenter().x, coordSystem.getCenter().y, coordSystem.getAxisZ().x, coordSystem.getAxisZ().y, color);
        this.app.stage.addChild(this.graphics);
        const showLabels = coordSystem.getShowLabels();
        
        if (showLabels) {
            
            const labelAxisX = new Text('x', {
                fontFamily: 'Arial',
                fontSize: 24,
                fill: 'red',
                align: 'center'
                
            });

            const labelAxisY = new Text('y', {
                fontFamily: 'Arial',
                fontSize: 24,
                fill: 'red',
                align: 'center',
                x: coordSystem.getAxisY().x + 30,
                y: coordSystem.getAxisY().y
            });

            const labelAxisZ = new Text('z', {
                fontFamily: 'Arial',
                fontSize: 24,
                fill: 'red',
                align: 'center'
                
            });

            labelAxisX.x = coordSystem.getAxisX().x;
            labelAxisX.y = coordSystem.getAxisX().y;

            labelAxisY.x = coordSystem.getAxisY().x + PADDING_LABEL_AXISES_COORDSYS;
            labelAxisY.y = coordSystem.getAxisY().y - 40;

            labelAxisZ.x = coordSystem.getAxisZ().x + PADDING_LABEL_AXISES_COORDSYS;
            labelAxisZ.y = coordSystem.getAxisZ().y - PADDING_LABEL_AXISES_COORDSYS;

            this.app.stage.addChild(labelAxisX);
            this.app.stage.addChild(labelAxisY);
            this.app.stage.addChild(labelAxisZ);
            
        }
    }

    _drawRightHandCoordSystem (coordSystem) {
        const centerX = coordSystem.getCenter().x;
        const centerY = coordSystem.getCenter().y;
        const showLabels = coordSystem.getShowLabels();

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
        
        this.drawLine(centerX, centerY, centerX + 200, centerY, "blue");
        this.drawLine(centerX, centerY, axisX.x, axisX.y, "red");
        this.drawLine(centerX, centerY, axisY.x, axisY.y, "red");
        this.drawLine(centerX, centerY, axisZ.x, axisZ.y, "red");
        
        if (showLabels) {

            const labelAxisX = new Text('x', {
                fontFamily: 'Arial',
                fontSize: 24,
                fill: 'red',
                align: 'center'
                
            });

            const labelAxisY = new Text('y', {
                fontFamily: 'Arial',
                fontSize: 24,
                fill: 'red',
                align: 'center',
                x: coordSystem.getAxisY().x + 30,
                y: coordSystem.getAxisY().y
            });

            const labelAxisZ = new Text('z', {
                fontFamily: 'Arial',
                fontSize: 24,
                fill: 'red',
                align: 'center'
                
            });

            labelAxisX.x = coordSystem.getAxisX().x;
            labelAxisX.y = coordSystem.getAxisX().y;

            labelAxisY.x = coordSystem.getAxisY().x + PADDING_LABEL_AXISES_COORDSYS;
            labelAxisY.y = coordSystem.getAxisY().y + PADDING_LABEL_AXISES_COORDSYS;

            labelAxisZ.x = coordSystem.getAxisZ().x + PADDING_LABEL_AXISES_COORDSYS;
            labelAxisZ.y = coordSystem.getAxisZ().y - PADDING_LABEL_AXISES_COORDSYS;

            this.app.stage.addChild(labelAxisX);
            this.app.stage.addChild(labelAxisY);
            this.app.stage.addChild(labelAxisZ);
        }

        this.app.stage.addChild(this.graphics);
    }

    drawCube (coordSystem, cube) {
        const centerX = coordSystem.getCenter().x;
        const centerY = coordSystem.getCenter().y;
        
        const edges = cube.getEdges();
        
        Object.entries(edges).forEach( (item) => {
            const edge = item[1];
            let hideEdge = false;
            
            if (edge.hasOwnProperty('hideEdge')) {
                hideEdge = edge.hideEdge ? true : false;
            }
            
            if (!hideEdge) {
                 this.drawLine(edge.from.x, edge.from.y, edge.to.x, edge.to.y, 0x34eb7d);
            }

            if (cube.getShowEdgeLabels()) {
                if (edge.hasOwnProperty('label')) {
                    const label = new Text(edge.label.text, {
                        fontFamily: 'Arial',
                        fontSize: 13,
                        fill: 'red',
                        align: 'center'
                        
                    });
                    label.x = edge.label.x;
                    label.y = edge.label.y;
                    this.app.stage.addChild(label);
                }
            }
        });
    }

    getGraphics () {
        return this.graphics;
    }

    drawLine (fromX, fromY, toX, toY, color) {
        this.graphics.beginFill(color);
        this.graphics.lineStyle(2, color, 1);
        this.graphics.moveTo(fromX, fromY);
        this.graphics.lineTo(toX, toY);
        
        this.graphics.closePath();
        this.graphics.endFill();
    }

    addText (text, params) {
        
        const textObj = new Text(text, params);
        textObj.x = params.x;
        textObj.y = params.y;
        
        this.app.stage.addChild(textObj);

    }

}

export default PixiRender;