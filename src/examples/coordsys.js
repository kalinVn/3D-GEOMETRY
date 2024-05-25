import App from '../App.js';
import CoordSystem from '../units/CoordSystem.js';

import {COORD_SYS_X_ON_TOP, COORD_SYS_Y_ON_TOP, COORD_SYS_Z_ON_TOP} from '../config.js';

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
    // type: COORD_SYS_Z_ON_TOP,
    type: COORD_SYS_Z_ON_TOP
    
};

const coordSys = new CoordSystem(params);
app.createCoordSys(params, coordSys);

