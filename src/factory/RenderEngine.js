
import { RENDER_ENGINE } from "../config";
import PixiRender from "../renderers/PixiRender";
import CanvasRender from "../renderers/CanvasRender";

class RenderEngine {

    getEngine () {
        
        if (RENDER_ENGINE == 'PIXI') {
            return new PixiRender(); 
        }

        return new CanvasRender();
    }

}

export default RenderEngine;