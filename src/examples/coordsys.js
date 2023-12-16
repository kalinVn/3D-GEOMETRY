import App from '../App.js';

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

// if want ro hide x ,y z labels 
// params.showLabels = true;

// create coord sys
app.createCoordSys(params);



