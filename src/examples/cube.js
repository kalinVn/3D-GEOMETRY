import App from '../App.js';
import CoordSys from '../units/CoordSystem.js';

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

const coordSys = new CoordSys(params);
app.createCoordSys(params, coordSys);


const cubeParams = {
    color: "0x34eb7d",
    axisLength: 120,
    angle: 30,
    showLabels: true
};

app.createCube(params, coordSys);



