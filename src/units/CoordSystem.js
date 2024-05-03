import Vector3D from '../lib/Vector3D.js';
import Vector2D from '../lib/Vector2D.js';

export default class CoordSys {

    constructor(params) {
        
        this.axisLength = 350;
        const angleAxisY = 45;
        this._showLabels = params.showLabels;
        this._color = params.color;
        const z = 0;

        if (params.type) {
            if (params.type == 'Z_NEGATIVE') {
                
                this._center = new Vector3D(params.center.x, params.center.y, z);
                
                this._y = new Vector3D(this._center.x +  this.axisLength, this._center.y, z);
                this._y = this.project(this._center, this._y, 90);

                this._z = new Vector3D(this._center.x - this.axisLength, this._center.y, z);
                this._z = this.project(this._center, this._z, 0);

                this._x = new Vector3D(this._center.x -  this.axisLength, this._center.y, z);
                this._x= this.project(this._center, this._x, 145);
            }
        } else {
            this._center = new Vector3D(params.center.x, params.center.y, z);
        
            this._y = new Vector3D(this._center.x +  this.axisLength, this._center.y, z);
            this._y = this.project(this._center, this._y, 90);
    
            this._x = new Vector3D(this._center.x -  this.axisLength, this._center.y, z);
            this._x = this.project(this._center, this._x, 0);
    
            this._z = new Vector3D(this._center.x -  this.axisLength, this._center.y, z);
            this._z = this.project(this._center, this._x, -45);
        }
    }

    project (projectionVector, currentVector, angle=null) {
        currentVector = projectionVector.substract(currentVector);
        currentVector = currentVector.unit();
        currentVector = currentVector.mult(this.axisLength);
        
        if (angle) 
            currentVector = currentVector.rotationMatrix(angle);

        currentVector = projectionVector.projectTo(currentVector);

        return currentVector;
    }

    bisectionFirstQuadrant () {
        return this.project(this._center, this._y, 45);
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
        const z = 0;
        this._y = new Vector3D(x, y, z);
    }

    setPostionZ() {
        const rotatedVector = this.getRotatedVector(this._rotetionMatixAngle);

        const x = rotatedVector.x + this._center.x;
        const y = rotatedVector.y + this._center.y;
        const z = 0;
        this._z = new Vector3D(x, y, z);
    }

    setPostionX() {
        const rotatedVector = this.getRotatedVector(this._rotetionMatixAngle);
        const x = this._center.x - rotatedVector.x;
        const y = this._center.y + rotatedVector.y;
        const z = 0

        this._x = new Vector3D(x, y, z);
    }

    plot (point) {
        const xAxisSubatracted = this._x.substract(this._center);
        const v1Unit = xAxisSubatracted.unit();
        const v1 = v1Unit.mult(point.x).projectTo(this._center);
        
        const v2 = new Vector2D(this._center.x + point.z,  this._center.y  );
        
        const v3 = v1Unit.mult(point.x).projectTo(v2);

        const yAxisSubstracted = this._y.substract(this._center);
        const yAxisUnit = yAxisSubstracted.unit();
        const v4 = yAxisUnit.mult(point.y).projectTo(v3);

        let v5 = yAxisUnit.mult(point.y).projectTo(this._center);
        let v6 = yAxisUnit.mult(point.y).projectTo(v1);

        const xAxisUnit = this._x.unit()
        const v7 = xAxisUnit.mult(500).projectTo(v6)


        
        return {
            v1: v1,
            v2: v2,
            v3: v3,
            v4: v4,
            v5: v5,
            v6: v6,
            v7: v7
        };
        
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
        const initVector = new Vector3D(0, this.axisLength);
        const rotatedVector = initVector.rotationMatrix(angle);


        return rotatedVector;
    }


}