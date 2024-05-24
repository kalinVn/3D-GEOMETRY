import CoordSystem from './CoordSystem';
import {PARAMS_CUBE} from '../config';
import Vector3D from '../lib/Vector3D';

class Cube {

    constructor (coordSys, params) {
       this.size = params.axisLength;
       this.params = params;
       this._showEdgeLabels = params.showLabels;
       this.coordSys = coordSys;
       const z = 0;
       this._vertices = [];
       this._verticesDirections = params.vertices;
       this._length = params.axisLength;
   
       this._edges = {};
    }


    initGeometry () {
        this._verticesDirections.forEach((item) => {
            this,this._vertices.push(new Vector3D(item[0] * this._length, item[1]*this._length, item[2] * this._length));
        });
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

    getVertices () {
        return this._vertices;
    }

    initEdges () {
        const normalVectorAxisZ = this.coordSys.getAxisZ().substract(this.coordSys.getCenter());
        const unitVectorAxisZ = normalVectorAxisZ.unit();
        const centerX = this.coordSys.getCenter().x;
        const centerY = this.coordSys.getCenter().y ;
        const coordSysCenter = new Vector3D(centerX, centerY)

      
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

    getDistanceToPlane (params) {
        return Math.sqrt(Math.pow(params.v1, 2) + Math.pow(params.v2, 2))
        
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

    getV3 () {
        return this._v3;
    }

    getV4 () {
        return this._v4;
    }

    getV5 () {
        return this._v5;
    }

    getV6 () {
        return this._v6;
    }

    getV8 () {
        return this._v8;
    }

    getV7 () {
        return this._v7;
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