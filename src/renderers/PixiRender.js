import {PADDING_LABEL_AXISES_COORDSYS} from '../config.js';
import {Application, Text, Graphics}  from 'pixi.js';
import CoordSystem from '../units/CoordSystem'; 
import {COORD_SYS_X_ON_TOP, COORD_SYS_Y_ON_TOP, COORD_SYS_Z_ON_TOP} from '../config.js';
class PixiRender {

    constructor () {
        this.canvas = document.createElement('canvas');
        this.canvas.setAttribute('id','canvas1');
        this._projectionCubeVertices = [];
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

    getProjectionCubeVertices () {
        return this._projectionCubeVertices;
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

    dispay3DPointVertices(plotedPoint) {
        const vertices = [
            {
                fontSize: 12,
                fill: 'blue',
                align: 'center',
                x: plotedPoint.v1.x - 25,
                y: plotedPoint.v1.y - 10
            },
            {
                fontSize: 12,
                fill: 'blue',
                align: 'center',
                x: plotedPoint.v3.x - 25,
                y: plotedPoint.v3.y - 10
            },
            {
                fontSize: 12,
                fill: 'blue',
                align: 'center',
                x: plotedPoint.v4.x - 25,
                y: plotedPoint.v4.y - 10
            },
            {
                fontSize: 12,
                fill: 'blue',
                align: 'center',
                x: plotedPoint.v6.x - 25,
                y: plotedPoint.v6.y - 20
            },
            {
                fontSize: 12,
                fill: 'blue',
                align: 'center',
                x: plotedPoint.v5.x - 25,
                y: plotedPoint.v5.y - 20
            }
        ];
        

        this.addText('V1', vertices[0]);
        this.addText('V2', vertices[1]);
        this.addText('V3', vertices[2]);
        this.addText('V4', vertices[3]);
        this.addText('V5', vertices[4]);
    }

    render3DPoint (coordSys, plottedPoint, paramsP=null) { 
        
        if (coordSys.getType() == COORD_SYS_Z_ON_TOP) {
            this.drawLine(coordSys.getCenter().x, coordSys.getCenter().y, plottedPoint.v1.x, plottedPoint.v1.y, 0xa6336b);
            this.drawLine(coordSys.getCenter().x, coordSys.getCenter().y, plottedPoint.v2.x, plottedPoint.v2.y, 0xa6336b);
            this.drawLine(plottedPoint.v2.x, plottedPoint.v2.y, plottedPoint.v3.x, plottedPoint.v3.y, 0xa6336b);
            this.drawLine(plottedPoint.v3.x, plottedPoint.v3.y, plottedPoint.v1.x, plottedPoint.v1.y, 0xa6336b);
            
            this.drawLine(plottedPoint.v3.x, plottedPoint.v3.y, plottedPoint.v4.x, plottedPoint.v4.y, 0xa6336b);
            this.drawLine(coordSys.getCenter().x, coordSys.getCenter().y, plottedPoint.v5.x, plottedPoint.v5.y, 0xa6336b);
            this.drawLine(plottedPoint.v1.x, plottedPoint.v1.y, plottedPoint.v6.x, plottedPoint.v6.y, 0xa6336b);
            this.drawLine(plottedPoint.v6.x, plottedPoint.v6.y, plottedPoint.v5.x, plottedPoint.v5.y, 0xa6336b);
            this.drawLine(plottedPoint.v6.x, plotedPoint.v6.y, plotedPoint.v4.x, plotedPoint.v4.y, 0xa6336b);
        } else if (coordSys.getType() == COORD_SYS_X_ON_TOP ) { 
            
            if (paramsP) {
                const color = paramsP.color;
                const radiusCircle = paramsP.radiusCircle;
                const colorCircle = paramsP.colorCircle;
                if (paramsP.showLine) {
                    this.drawLine(plottedPoint.v0.x, plottedPoint.v0.y, plottedPoint.v1.x, plottedPoint.v1.y, color);
                    this.drawLine(plottedPoint.v1.x, plottedPoint.v1.y, plottedPoint.v2.x, plottedPoint.v2.y, color);
                    this.drawLine(plottedPoint.v2.x, plottedPoint.v2.y, plottedPoint.v3.x, plottedPoint.v3.y, color);
                    this.drawLine(plottedPoint.v0.x, plottedPoint.v0.y, plottedPoint.v4.x, plottedPoint.v4.y, color);
                    this.drawLine(plottedPoint.v2.x, plottedPoint.v2.y, plottedPoint.v6.x, plottedPoint.v6.y, color);
                    this.drawLine(plottedPoint.v0.x, plottedPoint.v0.y, plottedPoint.v4.x, plottedPoint.v4.y, color);
                    this.drawLine(plottedPoint.v4.x, plottedPoint.v4.y, plottedPoint.v7.x, plottedPoint.v7.y, color);
                    this.drawLine(plottedPoint.v6.x, plottedPoint.v6.y, plottedPoint.v7.x, plottedPoint.v7.y, color);
                }   

                if (paramsP.showVertices) {
                    this.addText('V0', paramsP);

                    paramsP.x = plottedPoint.v1.x + 10;
                    paramsP.y = plottedPoint.v1.y - 30;

                    this.addText('V1', paramsP);

                    paramsP.x = plottedPoint.v2.x + 30;
                    paramsP.y = plottedPoint.v2.y - 10;
                    this.addText('V2', paramsP);

                    paramsP.x = plottedPoint.v3.x + 30;
                    paramsP.y = plottedPoint.v3.y - 10;
                    this.addText('V3', paramsP);

                    paramsP.x = plottedPoint.v6.x + 30;
                    paramsP.y = plottedPoint.v6.y - 10;
                
                    this.addText('V6', paramsP);

                    paramsP.x = plottedPoint.v4.x + 30;
                    paramsP.y = plottedPoint.v4.y - 10;
                    
                    this.addText('V4', paramsP);

                    paramsP.x = plottedPoint.v7.x + 30;
                    paramsP.y = plottedPoint.v7.y - 10;
                    
                    this.addText('V7', paramsP);
                }

                this.drawCircle(plottedPoint.v6, colorCircle, radiusCircle);
            }
        }
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
            x: plotedPoint.v4.x + 10,
            y: plotedPoint.v4.y - 10
        };
        const gr = new Graphics();
        gr.beginFill(0x00FF00);
        gr.drawCircle(5, 5, 5);
        gr.endFill();
        gr.x = plotedPoint.v4.x;
        gr.y = plotedPoint.v4.y
        this.app.stage.addChild(gr);
        this.addText(`P(${point.x}, ${point.y}, ${point.z})`, pointCoordText);
    }

    drawCircle (point, color, radius) {
        const gr = new Graphics();
        gr.beginFill(color);
        gr.drawCircle(radius, radius, radius);
        gr.endFill();
        gr.x = point.x;
        gr.y = point.y
        this.app.stage.addChild(gr);
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

    drawCube (coordSys, cube, params) {
        const veritces = cube.getVertices();
        const plottedPoints = [];
        const linePoints = [];
        const linePointsCoordinates = cube.getLinePointsCoordinates();
        
        const color = params.color;
        veritces.forEach( (point, index) => {
            const plottedPoint = coordSys.plotPoint3D(point);
            plottedPoints.push(plottedPoint);
            this.render3DPoint(coordSys, plottedPoint, params);
            if (params.showLabels) {
                
                const params = {
                    fontSize: 16,
                    fill: 'white',
                    align: 'center',
                    x: plottedPoint.v6.x + 20,
                    y: plottedPoint.v6.y + 10
                };
                this.addText(`V${index}`, params);
                
            }
        });
        this._projectionCubeVertices = plottedPoints;
        linePointsCoordinates.forEach( (pointArr, index) => {
            const plottedPoint1 = coordSys.plotPoint3D(pointArr[0]);
            const plottedPoint2 = coordSys.plotPoint3D(pointArr[1]);
            this.drawLine(plottedPoint1.v6.x, plottedPoint1.v6.y, plottedPoint2.v6.x, plottedPoint2.v6.y, color);
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