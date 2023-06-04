import Vector2D from '../lib/Vector2D.js';
import {CARTESIAN_COORD_SYSTEM} from '../config';

export default class CoordSys {

    constructor () {
        const params = CARTESIAN_COORD_SYSTEM;
        const centerX = params.center.x;
        const centerY = params.center.y;

        this._center = new Vector2D(centerX, centerY);
        this.axisLength = params.axisLength;
        this._x = new Vector2D(0, 0);
        this.y = new Vector2D(0, 0);
        this.z = new Vector2D(0, 0);

        this.setPostionX();
        this.setPostionY();
        this.setPostionZ();
    }

    getCenter () {
        return this._center;
    }

    setPostionY () {
        const x = this._center.x;
        const y = this._center.y - this.axisLength
        
        this._y = new Vector2D(x, y);
    }

    setPostionZ () {
        const rotatedVector = this.getRotatedVector(45);
        debugger
        const x = rotatedVector.x  + this._center.x;
        const y = rotatedVector.y + this._center.y;

        this._z = new Vector2D(x, y);
    }

    setPostionX () {
        const x = this._center.x + this.axisLength;
        const y = this._center.y;
        
        this._x = new Vector2D(x, y);
    }

    getAxisX () {
        return this._x;
    }

    getAxisY () {
        return this._y;
    }

    getAxisZ () {
        return this._z;
    }
    
    getRotatedVector (angle) {
        const initVector = new Vector2D(0, this.axisLength);
        const rotatedVector = initVector.rotationMatrix(this.axisLength, angle);

        
        return rotatedVector;
    }
    

}