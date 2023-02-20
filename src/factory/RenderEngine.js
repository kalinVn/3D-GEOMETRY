
import { RENDER_ENGINE } from "../config";
import PixiRender from "../renderers/PixiRender";
import Render from "../renderers/CanvasRender";

class RenderEngine {

    getEngine () {
        
        if (RENDER_ENGINE == 'PIXI') {
            return new PixiRender(); 
        }

        return new Render();
    }

}

export default RenderEngine;