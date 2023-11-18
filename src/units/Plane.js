import Vector2D from '../lib/Vector2D.js';
import { PLANE_PARAMS } from '../config';

export default class Plane {
    debugger
    constructor() {
        const params = PLANE_PARAMS;
        const angle = 25;

        
        this._axisLength = params.axisLength;
        this._V1 = new Vector2D(params.v1.x, params.v1.y);
        this._V2 = new Vector2D(params.v2.x, params.v2.y);
        this._V3 = this._rotateVector(angle);
        this._V3 = this._V3.projectTo(this._V2); 
        this._V4 = this._V1.parallel(this._V2, 400);
        this._V4 = this._V4.projectTo(this._V3);
        // this._V4 
    }

    _parallelAxis (vector1, vector2, length) {
        const substractedVecor = vector1.substract(vector2);
        const unitVector = substractedVecor.unit(length);
        
        return unitVector.mult(length);
    }

    _rotateVector ( angle) {
        const currentVector = new Vector2D(500, 0);

        const rotatedVector = currentVector.rotationMatrix(angle);

        return rotatedVector;
    }

    getV1 () {
        return this._V1;
    }

    getV2 () {
        return this._V2;
    }

    getV3 () {
        return this._V3;
    }

    getV4 () {
        return this._V4;
    }


}