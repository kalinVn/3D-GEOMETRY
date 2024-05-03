import App from '../App.js';
import Vector2D from '../lib/Vector2D.js';

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

app.createCoordSys(params);
const render = app.getRender();
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
render.drawCircle(xAxisRotatedMiddlePoint, color, radius);


