import CoordSystem from './CoordSystem';
import {PARAMS_CUBE} from '../config';
import Vector2D from '../lib/Vector2D';

class Cube {

    constructor (coordSys, params) {
       this.size = params.axisLength;
       
       this._showEdgeLabels = params.showLabels;
       this.coordSys = coordSys;
       this.vector2D = new Vector2D();
       this._v1 = new Vector2D(this.coordSys.getCenter().x - this.size, this.coordSys.getCenter().y);
       this._v2 = new Vector2D(this.coordSys.getCenter().x, this.coordSys.getCenter().y - this.size);
       this._v3 =  new Vector2D(this.coordSys.getCenter().x + this.size, this.coordSys.getCenter().y);
       this._v4 =  new Vector2D(this.coordSys.getCenter().x, this.coordSys.getCenter().y +this.size);
       this._v5 = new Vector2D(0, 0);
       this._v6 =  new Vector2D(this.coordSys.getCenter().x - this.size, this.coordSys.getCenter().y);
       this._v7 = new Vector2D(0, 0);
       this._v7 = this.coordSys.getCenter();
       this._edges = {};
    }

    initGeometry () {
        this._v1 = this._normalize(this.coordSys.getCenter(), this._v1, -45).projectTo(this.coordSys.getCenter());
        
        this._v2 = this._normalize(this.coordSys.getCenter(), this._v2).projectTo(this._v1);
        
        this._v3 = this._normalize(this.coordSys.getCenter(), this._v3).projectTo(this._v2);

        this._v4 = this._normalize(this.coordSys.getCenter(), this._v4).projectTo(this._v3);

        const lengthV5 = this.coordSys.getCenter().substract(this._v3).length();
        this._v5 = this._normalize(this._v3, this.coordSys.getCenter(), 180, lengthV5).projectTo(this._v4);

        this._v6 = this._normalize(this.coordSys.getCenter(), this._v6).projectTo(this._v5);

        this._v7 = this._normalize(this._v3, this.coordSys.getCenter(), 180, lengthV5).projectTo(this._v2);

    }

    _project (projectionVector, currentVector, angle=null, currentSize=null) {
        currentVector = projectionVector.substract(currentVector);
        currentVector = currentVector.unit();

        if (currentSize)
            currentVector = currentVector.mult();
        else
        currentVector = currentVector.mult(this.size);
        
        if (angle) {}
            currentVector = currentVector.rotationMatrix(angle);

        currentVector = projectionVector.projectTo(currentVector);

        return currentVector;
    }

    _normalize (projectionVector, currentVector, angle=null, currentSize= null) {
        
        currentVector = projectionVector.substract(currentVector);
        currentVector = currentVector.unit();


        if (currentSize) 
            currentVector = currentVector.mult(currentSize);
        else
            currentVector = currentVector.mult(this.size);
        
        if (angle)
            currentVector = currentVector.rotationMatrix(angle);


        return currentVector;
    }

    initEdges () {
        const normalVectorAxisZ = this.coordSys.getAxisZ().substract(this.coordSys.getCenter());
        const unitVectorAxisZ = normalVectorAxisZ.unit();
        const centerX = this.coordSys.getCenter().x;
        const centerY = this.coordSys.getCenter().y ;
        const coordSysCenter = new Vector2D(centerX, centerY)

      
        const fromPointA = coordSysCenter.add(unitVectorAxisZ.mult(this.size))
        const normalVectorFromPointAxisX = this.coordSys.getAxisX().substract(this.coordSys.getCenter());
        const unitVectorAxisX = normalVectorFromPointAxisX.unit();
        const toPointA = fromPointA.add(unitVectorAxisX.mult(this.size))
        
        this._edges['OxV1'] = {
            from: this.coordSys.getCenter(),
            to: this._v1,
            hideEdge: true,
            label: {
                x: this._v1.x + 10,
                y: this._v1.y - 10,
                text: 'V1'
            }
        };

        this._edges['V1xV2'] = {
            from: this._v1,
            to: this._v2,
            label: {
                x: this._v2.x  + 10,
                y: this._v2.y-10,
                text: 'V2'
            }
        };

        this._edges['V2xV3'] = {
            from: this._v2,
            to: this._v3,
            label: {
                x: this._v3.x + 10,
                y: this._v3.y + 10,
                text: 'V3'
            }
        };

        this._edges['V3xV4'] = {
            from: this._v3,
            to: this._v4,
            label: {
                x: this._v4.x - 40,
                y: this._v4.y + 10,
                text: 'V4'
            }
        };
        
        this._edges['V4xV1'] = {
            from: this.coordSys.getCenter(),
            to: this._v3,
            label: {
                x: this.coordSys.getCenter().x - 20,
                y: this.coordSys.getCenter().y - 30,
                text: 'V8'
            }
        };


        this._edges['V3xV6'] = {
            from: this._v4,
            to: this._v1,
        };

        
        this._edges['V4xV5'] = {
            from: this._v4,
            to: this._v5,
            label: {
                x: this._v5.x - 20,
                y: this._v5.y - 30,
                text: 'V5'
            }
        };

        this._edges['V5xV6'] = {
            from: this._v5,
            to: this._v6,
            label: {
                x: this._v6.x + 20,
                y: this._v6.y -+ 10,
                text: 'V6'
            }
           
        };

        this._edges['V6xV7'] = {
            from: this._v6,
            to: this._v1,
        };

        this._edges['V2xV7'] = {
            from: this._v2,
            to: this._v7,
            label: {
                x: this._v7.x + 20,
                y: this._v7.y -+ 10,
                text: 'V7'
            }
           
        };


        this._edges['V7xV6'] = {
            from: this._v6,
            to: this._v7,
           
        };

        this._edges['V7xV1'] = {
            from: this._v7,
            to: this.coordSys.getCenter(),
           
        };

        this._edges['V8xV5'] = {
            from: this._v5,
            to: this.coordSys.getCenter()
           
        };

    }

    getEdges () {
        return this._edges;
    }

    getV1 () {
        return this._v1;
    }

    getV2 () {
        return this._v2;
    }

    getPointC () {
        return this._v3;
    }

    getPointD () {
        return this._v4;
    }

    getPointE () {
        return this._v5;
    }

    getPointF () {
        return this._v6;
    }

    getPointG () {
        return this._v7;
    }

    getShowEdgeLabels () {
        return this._showEdgeLabels;
    }

}

export default Cube;