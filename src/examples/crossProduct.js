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

const center = new Vector2D(200, 200);

const projectV1 = new Vector2D(center.x + 120, center.y);

let projectV2 = new Vector2D(center.x + 120, center.y);
projectV2 = projectV2.project(center, 120, 135);
let crossProduct = projectV1.crossProduct(projectV2);

const render = app.getRender();
render.drawLine(center.x, center.y, projectV1.x, projectV1.y, 0x000000);
render.drawLine(center.x, center.y, Math.abs(projectV2.x), projectV2.y, 0x000000);
render.drawLine(center.x, center.y,  center.x , center.y + crossProduct, 0xfff234);
render.getStage().addChild(render.getGraphics());



