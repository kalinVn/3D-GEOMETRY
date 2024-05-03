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

const render = app.getRender();
const cube = app.getCube();

if (cube) {
    render.drawLine(cube.getV2().x, cube.getV2().y, cube.getV1().x, cube.getV1().y, 0xe01d3e);
    render.drawLine(cube.getV2().x, cube.getV2().y, cube.getV7().x, cube.getV7().y, 0xe01d3e);
    render.drawLine(cube.getV1().x, cube.getV1().y, cube.getV7().x, cube.getV7().y, 0xe01d3e);

    const paddindP = 10;

    const paramsP = {
        fontSize: 12,
        fill: 'blue',
        align: 'center',
        x: cube.getV1().x + paddindP,
        y: cube.getV1().y
    }
    render.addText('P(x, y, z)', paramsP);

    const paddingX_Y = 10;
    const paddindY_Y = 80;
    const paramsY = {
        fontSize: 12,
        fill: 'purple',
        align: 'center',
        x: cube.getV2().x + paddingX_Y,
        y: cube.getV2().y - paddindY_Y
    }

    render.addText('y', paramsY);

    const paddingX_X = 60;
    const paddingY_X = 20;
    const paramsX = {
        fontSize: 12,
        fill: 'purple',
        align: 'center',
        x: cube.getV1().x - paddingX_X,
        y: cube.getV1().y - paddingY_X
    }

    render.addText('x', paramsX);

    const paddingX_Z = 10
    const paddingY_Z = 30
    const paramsZ = {
        fontSize: 12,
        fill: 'purple',
        align: 'center',
        x: cube.getV1().x - paddingX_Z,
        y: cube.getV1().y - paddingY_Z
    }

    render.addText('z', paramsZ);


    const paddingX_D1 = 20;
    const paddingY_D1 = 80;

    const paramsD1 = {
        fontSize: 12,
        fill: 'purple',
        align: 'center',
        x: cube.getV7().x - paddingX_D1,
        y: cube.getV7().y - paddingY_D1
    };

    render.addText('d1', paramsD1);

    // Find distance of point P from x-axis
    const v1 = cube.getV1();
    const v2 = cube.getV2();
    const v4 = cube.getV4();
    const v6 = cube.getV6();

    const y = v1.substract(v2).length();
    const x = v1.substract(v4).length();
    const z = v1.substract(v6).length();

    const distanceParams = {
        a: {v1: v1, v2: v2},
        b: {v1: v1, v2: v4},
        c: {v1: v1, v2: v6}
    };
    const distanceToPlane = cube.getDistanceToPlane(distanceParams);
    // Find distance of point P from x-axis
    const v1v2Length = cube.getDistanceToPlane(distanceParams.a);
    const v1v3Length = cube.getDistanceToPlane(distanceParams.b);
    const v1v6Length = cube.getDistanceToPlane(distanceParams.c);
}


