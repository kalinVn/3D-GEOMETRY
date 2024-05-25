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
       this._linesCoordinates = params.linesCoordinates;
       this._linePointsCoordinates = [];
       this._verticesDirections = params.vertices;
       this._length = params.axisLength;
   
       this._edges = {};
    }


    initGeometry () {
        this._verticesDirections.forEach((item) => {
            this._vertices.push(new Vector3D(item[0] * this._length, item[1] * this._length, item[2] * this._length));
        });
        this._linesCoordinates.forEach((item) => {
            this._linePointsCoordinates.push([
                new Vector3D(item[0][0] * this._length, item[0][1] * this._length, item[0][2] * this._length),
                new Vector3D(item[1][0] * this._length, item[1][1] * this._length, item[1][2] * this._length),
            
            ]);
        });
    }


    getVertices () {
        return this._vertices;
    }

    getLinePointsCoordinates () {
        return this._linePointsCoordinates;
    }


    getDistanceToPlane (params) {
        return Math.sqrt(Math.pow(params.v1, 2) + Math.pow(params.v2, 2))
        
    }

    getEdges () {
        return this._edges;
    }

}

export default Cube;