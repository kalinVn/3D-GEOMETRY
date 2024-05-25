import Vector3D from '../lib/Vector3D.js';
import Vector2D from '../lib/Vector2D.js';
import {COORD_SYS_X_ON_TOP, COORD_SYS_Y_ON_TOP, COORD_SYS_Z_ON_TOP} from '../config.js';

export default class CoordSys {

    constructor(params) {
        // this.X_POSITIVE_TYPE = "X_ON_TOP"
        this.axisLength = 300;
        const angleAxisY = 45;
        this._showLabels = params.showLabels;
        this._color = params.color;
        const z = 0;
        this._type = "Z_UP"
        if (params.type) {
            this._type = params.type;
            if (params.type == 'Z_NEGATIVE') {
                
                this._center = new Vector3D(params.center.x, params.center.y, z);
                
                this._y = new Vector3D(this._center.x +  this.axisLength, this._center.y, z);
                this._y = this.project(this._center, this._y, 90);

                this._z = new Vector3D(this._center.x - this.axisLength, this._center.y, z);
                this._z = this.project(this._center, this._z, 0);

                this._x = new Vector3D(this._center.x -  this.axisLength, this._center.y, z);
                this._x= this.project(this._center, this._x, 145);
            }
            else  if (params.type == COORD_SYS_X_ON_TOP) { 
                const direction = -1;
                const angle = 90
                const angleDirectionY = direction * angle;
                const angleZ = 135
                const xAxis = new Vector3D(this.axisLength, 0, 0);
                
                this._center = new Vector3D(params.center.x, params.center.y, z);

                this._y = new Vector3D(this._center.x +  this.axisLength, this._center.y, z);
                this._z = xAxis.rotationMatrix(angleDirectionY).projectTo(this._center);
                this._x = xAxis.rotationMatrix(angleZ).projectTo(this._center);

            }

            else  if (params.type == COORD_SYS_Z_ON_TOP) { 
                const direction = -1;
                const angle = 90
                const angleDirectionY = direction * angle;
                const angleZ = 135
                const xAxis = new Vector3D(this.axisLength, 0, 0);
                
                this._center = new Vector3D(params.center.x, params.center.y, z);

                this._x= new Vector3D(this._center.x +  this.axisLength, this._center.y, z);
                this._z = xAxis.rotationMatrix(angleDirectionY).projectTo(this._center);
                this._y = xAxis.rotationMatrix(angleZ).projectTo(this._center);

            }

            else  if (params.type == COORD_SYS_Y_ON_TOP) { 
                const direction = -1;
                const angle = 90
                const angleDirectionY = direction * angle;
                const angleZ = 135
                const xAxis = new Vector3D(this.axisLength, 0, 0);
                
                this._center = new Vector3D(params.center.x, params.center.y, z);

                this._x = new Vector3D(this._center.x +  this.axisLength, this._center.y, z);
                this._y = xAxis.rotationMatrix(angleDirectionY).projectTo(this._center);
                this._z = xAxis.rotationMatrix(angleZ).projectTo(this._center);

            }

            else  if (params.type == COORD_SYS_Z_ON_TOP) { 
                const direction = -1;
                const angle = 90
                const angleDirectionY = direction * angle;
                const angleZ = 135
                const xAxis = new Vector3D(this.axisLength, 0, 0);
                
                this._center = new Vector3D(params.center.x, params.center.y, z);

                this._x = new Vector3D(this._center.x +  this.axisLength, this._center.y, z);
                this._z = xAxis.rotationMatrix(angleDirectionY).projectTo(this._center);
                this._y = xAxis.rotationMatrix(angleZ).projectTo(this._center);

            }
            
        } else {
            this._center = new Vector3D(params.center.x, params.center.y, z);
        
            this._y = new Vector3D(this._center.x +  this.axisLength, this._center.y, z);
            this._y = this.project(this._center, this._y, 90);
    
            this._z = new Vector3D(this._center.x -  this.axisLength, this._center.y, z);
            this._z = this.project(this._center, this._x, 0);
    
            this._x = new Vector3D(this._center.x -  this.axisLength, this._center.y, z);
            this._x = this.project(this._center, this._x, -45);
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

    getShowLabels() {
        return this._showLabels;
    }

    getColor () {
        return this._color;
    }

    getCenter() {
        return this._center;
    }

    getType () {
        return this._type;
    }


    plotPoint3D (point) { 
        if (this._type = COORD_SYS_X_ON_TOP) {
            const v0 = this._center;
            
            const v1 = this._y.substract(this._center).unit().mult(point.y).projectTo(this._center);
            const v2 = this._x.substract(this._center).unit().mult(point.x).projectTo(v1);
            const v3 = this._center.substract(this._y).unit().mult(point.y).projectTo(v2);
            const v4 = this._z.substract(this._center).unit().mult(point.z).projectTo(v0);
            const v6 = this._z.substract(this._center).unit().mult(point.z).projectTo(v2);
            const v7 = v2.substract(v1).unit().mult(point.x).projectTo(v4);
            return {
                v0: v0,
                v1: v1,
                v2: v2,
                v3: v3,
                v4: v4,
                v6: v6,
                v7: v7,
                projection: v6
            
            };
            
        } else if (this._type = COORD_SYS_Z_ON_TOP) {
            const v0 = this._center;
            
            const v1 = this._y.substract(this._center).unit().mult(point.y).projectTo(this._center);
            const v2 = this._x.substract(this._center).unit().mult(point.x).projectTo(v1);
            const v3 = this._center.substract(this._y).unit().mult(point.y).projectTo(v2);
            const v4 = this._z.substract(this._center).unit().mult(point.z).projectTo(v0);
            const v6 = this._z.substract(this._center).unit().mult(point.z).projectTo(v2);
            const v7 = v2.substract(v1).unit().mult(point.x).projectTo(v4);
            return {
                v0: v0,
                v1: v1,
                v2: v2,
                v3: v3,
                v4: v4,
                v6: v6,
                v7: v7
            
            };
            
        } 

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

    getRotatedVector(angle) {
        const initVector = new Vector3D(0, this.axisLength);
        const rotatedVector = initVector.rotationMatrix(angle);


        return rotatedVector;
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


}