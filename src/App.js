import CanvasRender from './renderers/CanvasRender.js';
import RenderEngine  from './factory/RenderEngine.js';
import CoordSystem from './units/CoordSystem'; 
import Cube from './units/Cube'; 
import {CARTESIAN_COORD_SYSTEM, PARAMS_CUBE} from './config';
 
class App {
    
    constructor () {
        this.renderFactory = new RenderEngine()
        this.render = this.renderFactory.getEngine();
        
        this.coordSystem = new CoordSystem();
        this.cube = new Cube(PARAMS_CUBE)
        this.cube.initGeometry();
        this.cube.initEdges();
        this.canvas;
        this.ctx;
    }

    init () {
        this.render.drawCoordSystem(this.coordSystem);
        this.render.drawCube(this.coordSystem, this.cube);
    }

    
}

export default App;