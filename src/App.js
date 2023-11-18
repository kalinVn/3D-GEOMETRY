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
        this._createCoordSys();

        // create cube
        this._createCube();
        
        
    }

    _createCube () {

        const cubeParams = {
            color: "#FF0000",
            axisLength: 120,
            angle: 30,
            showEdgeLabels: true
        };

        this.cube = new Cube(cubeParams);
        this.cube.initGeometry();
        this.cube.initEdges();
        this.render.drawCube(this.coordSystem, this.cube);
    }

    _createCoordSys () {
        this.plane = new Plane();
        const coordSysParams = {
            color: "#FF0000",
            axisLength: 160,
            center: {
                x: 500,
                y: 270,
                z: 0
            },
            direction: 'up',
            hand: 'right',
            showLabels: false,
            rotetionMatixAngle: 45
        };

        this.coordSystem = new CoordSystem();

        this.render.drawCoordSystem(this.coordSystem);
    }

    
}

export default App;