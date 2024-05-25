import App from '../App.js';
import CoordSystem from '../units/CoordSystem.js';

import {COORD_SYS_X_ON_TOP, COORD_SYS_Y_ON_TOP, COORD_SYS_Z_ON_TOP, PARAMS_CUBE} from '../config.js';
import Cube from '../units/Cube'; 
const app = new App();

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

const cubeParams = {
    color: "0x34eb7d",
    axisLength: 120,
    angle: 30,
    showLabels: true
};

app.createCube(params, coordSys);

const render = app.getRender();

const cube = new Cube(coordSys, PARAMS_CUBE);
cube.initGeometry();
const plottedPoint = coordSys.plotPoint3D(cube.getVertices()[1]);

const paramsP = {
    fontSize: 12,
    fill: 'blue',
    align: 'center',
    x: plottedPoint.v0.x + 10,
    y: plottedPoint.v0.y - 30,
    showLine: false,
    showVertices: false,
    color: 0x34eb7d,
    radiusCircle: 8,
    colorCircle: 0x00FF00,
    showLabels: true,
}

render.drawCube(coordSys, cube, paramsP);

if (cube) {
    const projectionCubeVertices = render.getProjectionCubeVertices();
    const proctionVector_0 = projectionCubeVertices[0].projection;
    const proctionVector_2 = projectionCubeVertices[2].projection;
    const proctionVector_4 = projectionCubeVertices[4].projection;
    const proctionVector_1 = projectionCubeVertices[1].projection;
    const proctionVector_7 = projectionCubeVertices[7].projection;
    const proctionVector_5 = projectionCubeVertices[5].projection;
    render.drawLine(proctionVector_0.x, proctionVector_0.y, proctionVector_2.x, proctionVector_2.y, 0xe01d3e);
    render.drawLine(proctionVector_1.x, proctionVector_1.y, proctionVector_5.x, proctionVector_5.y, 0xe01d3e);

    const distanceParams = {
        a: {v1: proctionVector_1, v2: proctionVector_2},
        b: {v1: proctionVector_2, v2: proctionVector_4},
        c: {v1: proctionVector_1, v2: proctionVector_7}
    };

    const v1v2Length = cube.getDistanceToPlane(distanceParams.a);
   
    console.log(v1v2Length);
}
