import CanvasRender from './renderers/CanvasRender.js';
import RenderEngine  from './factory/RenderEngine.js';
import CoordSystem from './units/CoordSystem'; 
import Cube from './units/Cube'; 
import Plane from './units/Plane'; 
import {CARTESIAN_COORD_SYSTEM, PARAMS_CUBE} from './config';
 
class App {
    
    constructor () {
        this.renderFactory = new RenderEngine()
        this.render = this.renderFactory.getEngine();

        this.cube =null
        this.plane = null;
        this.coordSystem = null;
        this.canvas = null;
        this.ctx = null;
    }

    init () {
        // create coord system
        const coordSysParams = {
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
        this.createCoordSys(coordSysParams);

        const cubeParams = {
            color: "0x34eb7d",
            axisLength: 120,
            angle: 30,
            showLabels: true
        };

        // create cube
        this.createCube(cubeParams, this.coordSystem);
        
        
    }

    createCube (params, coordSystem) {
        this.cube = new Cube(coordSystem, params);
        this.cube.initGeometry();
        this.cube.initEdges();
        this.render.drawCube(coordSystem, this.cube);
    }

    createCoordSys (params, coordSys=null) {
        if (coordSys) {
            this.render.drawCoordSystem(coordSys);
            return
        }
        this.coordSystem = new CoordSystem(params);
        
        this.render.drawCoordSystem(this.coordSystem);
    }

    
}

export default App;