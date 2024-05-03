import App from '../App.js';
import Vector2D from '../lib/Vector2D.js';
import Vector3D from '../lib/Vector3D.js';

const vector3D = new Vector3D();
const app = new App();

const params = {
    color: "0xf54242",
    axisLength: 160,
    center: {
        x: 500,
        y: 270,
        z: 0
    },
    direction: 'up',
    hand: 'right',
    showLabels: true,
    rotetionMatixAngle: 45
};

// if want ro hide x ,y z labels 
// params.showLabels = true;

// create coord sys
app.createCoordSys(params);
const render = app.getRender();
const xAxis = app.getCoordSystem().getAxisX();
const yAxis = app.getCoordSystem().getAxisY();
const rotatedVector = app.getCoordSystem().project(xAxis, yAxis, 0);

const center = app.getCoordSystem().getCenter();
const center2D = new Vector2D(center.x, center.y);
const currentAxis = new Vector2D(200, 0);
const direction = -1;
const angle = 60;
const xAxisRotated = currentAxis.rotationMatrix(direction * angle);
const xAxisRotatedProjection = xAxisRotated.projectTo(new Vector2D(center.x, center.y))

render.drawLine(center.x, center.y, xAxisRotatedProjection.x, xAxisRotatedProjection.y, 0xfff234);

const xAxisRotatedSustracted = center2D.substract(xAxisRotatedProjection);
const xAxisRotatedMiddlePoint = xAxisRotatedSustracted.middle(center, xAxisRotatedProjection);
const radius = 5;
const color = 0x00FF00;
render.drawCircle(xAxisRotatedMiddlePoint, color, radius)
debugger
// render.getStage().addChild(render.getGraphics());
// project (projectionVector, currentVector, angle=null) {
//     currentVector = projectionVector.substract(currentVector);
//     currentVector = currentVector.unit();
//     currentVector = currentVector.mult(this.axisLength);
    
//     if (angle) 
//         currentVector = currentVector.rotationMatrix(angle);

//     currentVector = projectionVector.projectTo(currentVector);

//     return currentVector;
// }

// console.log(render)
// render.drawLine(center.x, center.y, projectV1.x, projectV1.y, 0x000000);
// const v1v2MiddlePoint = vector3D.middle(v1, v2);


