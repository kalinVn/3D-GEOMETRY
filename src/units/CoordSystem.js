import Vector2D from '../lib/Vector2D.js';
import { CARTESIAN_COORD_SYSTEM } from '../config.js';

export default class CoordSys {

    constructor(params) {
        
        this.axisLength = params.axisLength;
        const angleAxisY = 45;
        this._showLabels = params.showLabels;
        this._color = params.color
        
        this._center = new Vector2D(params.center.x, params.center.y);

        this._y = new Vector2D(this._center.x +  this.axisLength, this._center.y);
        this._y = this._project(this._center, this._y, 90);
        

        this._x = new Vector2D(this._center.x -  this.axisLength, this._center.y);
        this._x = this._project(this._center, this._x, 0);


        this._z = new Vector2D(this._center.x -  this.axisLength, this._center.y);
        this._z = this._project(this._center, this._x, -45);
        
    }

    _project (projectionVector, currentVector, angle=null) {
        currentVector = projectionVector.substract(currentVector);
        currentVector = currentVector.unit();
        currentVector = currentVector.mult(this.axisLength);
        
        if (angle) 
            currentVector = currentVector.rotationMatrix(angle);

        currentVector = projectionVector.projectTo(currentVector);

        return currentVector;
    }

    getColor () {
        return this._color;
    }

    getHand () {
        return this._hand;
    }

    getShowLabels() {
        return this._showLabels;
    }

    getCenter() {
        return this._center;
    }

    setPostionY() {
        const x = this._center.x;
        const y = this._center.y - this.axisLength

        this._y = new Vector2D(x, y);
    }

    setPostionZ() {
        const rotatedVector = this.getRotatedVector(this._rotetionMatixAngle);

        const x = rotatedVector.x + this._center.x;
        const y = rotatedVector.y + this._center.y;
        this._z = new Vector2D(x, y);
    }

    setPostionX() {
        const rotatedVector = this.getRotatedVector(this._rotetionMatixAngle);
        const x = this._center.x - rotatedVector.x;
        const y = this._center.y + rotatedVector.y;;

        this._x = new Vector2D(x, y);
    }

    getAxisX() {
        return this._x;
    }

    getAxisY() {
        return this._y;
    }

    getAxisZ() {
        return this._z;
    }

    getRotatedVector(angle) {
        const initVector = new Vector2D(0, this.axisLength);
        const rotatedVector = initVector.rotationMatrix(angle);


        return rotatedVector;
    }


}