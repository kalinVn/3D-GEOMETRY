import Render from './Render.js';
import RenderEngine  from './factory/RenderEngine.js';
import CoordSystem from './CoordSystem'; 
import Cube from './Cube'; 
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
        console.log(this.render);
        this.render.drawCoordSystem(this.coordSystem);
        this.render.drawCube(this.coordSystem, this.cube);

    }

    
}

export default App;