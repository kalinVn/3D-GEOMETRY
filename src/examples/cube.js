import App from '../App.js';
import Vector2D from '../lib/Vector2D.js';
import Vector3D from '../lib/Vector3D.js';
import CoordSys from '../units/CoordSystem.js';
import {COORD_SYS_X_ON_TOP, COORD_SYS_Y_ON_TOP, COORD_SYS_Z_ON_TOP} from '../config.js';
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

const coordSys = new CoordSys(params);
app.createCoordSys(params, coordSys);


const cubeParams = {
    color: "0x00FF00",
    axisLength: 120,
    angle: 30,
    showLabels: true,
    vertices : [
        [-1, -1, -1],
        [1, -1, -1],
        [1, 1, -1],
        [-1, 1, -1],
        [-1, 1, 1],
        [1, 1, 1],
        [1, -1, 1],
        [-1, -1, 1],
        [-1, 1, 1]
    ]
};

const render = app.getRender();

const cube = new Cube(coordSys, cubeParams);
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
    colorCircle: 0x00FF00
}

// render.render3DPoint(coordSys, plottedPoint, paramsP);
const veritces = cube.getVertices()
render.drawCube(coordSys, veritces, paramsP);
