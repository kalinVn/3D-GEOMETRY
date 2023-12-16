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

let xAxis = coordSys.getAxisX();

let center = coordSys.getCenter();

const bisection = coordSys.project(center, xAxis, 135);



app.getRender().drawLine(center.x, center.y, bisection.x, bisection.y);

const v1 = bisection.substractAbs(coordSys.getCenter());
const v2 = xAxis.substractAbs(coordSys.getCenter()) ;

const dotProduct = v1.dotProduct(v2);

const cosTheta = dotProduct / (v1.length() * v2.length());

const angle = Math.acos(cosTheta) * (180 / Math.PI);

// Angle must be 45 degreesn
console.log(angle);




