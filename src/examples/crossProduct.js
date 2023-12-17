import App from '../App.js';
import CoordSys from '../units/CoordSystem.js';
import Vector3D from '../lib/Vector3D.js';

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


const crossProduct = coordSys.getAxisY().crossProduct(coordSys.getAxisX());

const center = coordSys.getCenter();
app.getRender().drawLine(center.x, center.y, crossProduct.x, crossProduct.y);


