import App from '../App.js';
import Vector3D from '../lib/Vector3D.js';
import CoordSys from '../units/CoordSystem.js';

const app = new App();

const params = {
    color: "0xf54242",
    axisLength: 300,
    center: {
        x: 500,
        y: 400,
        z: 0
    },
    direction: 'up',
    hand: 'right',
    showLabels: true,
    rotetionMatixAngle: 45
};

const center = new Vector3D(300, 300, 0);
const coordSys = new CoordSys(params);
app.createCoordSys(params, coordSys);


const point = {
    x: 145,
    y: -190, 
    z: 160
};


const render = app.getRender();


const plotedPoint = coordSys.plot(point);
render.render3DPoint(coordSys, plotedPoint);
render.dispay3DPointCoordinates(point, plotedPoint)


