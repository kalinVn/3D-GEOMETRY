import App from '../App.js';
import Vector2D from '../lib/Vector2D';
import {COORD_SYS_X_ON_TOP, COORD_SYS_Y_ON_TOP, COORD_SYS_Z_ON_TOP, PARAMS_CUBE} from '../config.js';
import Cube from '../units/Cube'; 
const app = new App();
import CoordSystem from '../units/CoordSystem.js';
const params = {
    color: "0xf54242",
    axisLength: 160,
    center: {
        x: 500,
        y: 400,
        z: 0
    },
    direction: 'up',
    hand: 'right',
    showLabels: true,
    rotetionMatixAngle: 45,
    type: COORD_SYS_Z_ON_TOP
    
};

const coordSys = new CoordSystem(params);
app.createCoordSys(params, coordSys);

const render = app.getRender();
const center = coordSys.getCenter();
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
render.drawCircle(xAxisRotatedMiddlePoint, color, radius);


