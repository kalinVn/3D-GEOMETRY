import CoordSystem from './CoordSystem';
import {PARAMS_CUBE} from './config';
import Vector2D from './lib/Vector2D';

class Cube {

    constructor () {
       this.size = PARAMS_CUBE.axisLength;
       this.coordSys = new CoordSystem();
       this.vector2D = new Vector2D();
       this._pointA = new Vector2D(0, 0);
       this._pointB = new Vector2D(0, 0);
       this._pointC = new Vector2D(0, 0);
       this._pointD = new Vector2D(0, 0);
       this._pointE = new Vector2D(0, 0);
       this._pointF = new Vector2D(0, 0);
       this._pointG = new Vector2D(0, 0);

       this._veritices = [];
       this._edges = {};
    }

    initGeometry () {
        const normalVectorAxisZ= this.coordSys.getAxisZ().substract(this.coordSys.getCenter());
        const unitVectorAxisZ = normalVectorAxisZ.unit();
        const centerX = this.coordSys.getCenter().x;
        const centerY = this.coordSys.getCenter().y ;

        this._pointA = new Vector2D(centerX + unitVectorAxisZ.x * this.size, centerY + unitVectorAxisZ.y * this.size);
        
        
        
        const rotatedPointZ = new Vector2D(unitVectorAxisZ.x, unitVectorAxisZ.y).rotationMatrix(0.1, 140);
        this._pointB = new Vector2D(this._pointA.x + rotatedPointZ.x * this.size  , this._pointA.y + rotatedPointZ.y * this.size);

        const normalVectorPointC = this.coordSys.getAxisX().substract(this.coordSys.getCenter());
        const unitVectorAxisX = normalVectorPointC.unit();
        
        this._pointC = new Vector2D(this._pointA.x + unitVectorAxisX.x * this.size  , this._pointA.y + unitVectorAxisX.y * this.size);

        this._pointD = new Vector2D(centerX + unitVectorAxisX.x * this.size  , centerY + unitVectorAxisX.y * this.size);
        this._pointE = new Vector2D(this._pointB.x + this.size, this._pointB.y);

        const normalVectorPointF= this._pointE.substract(this._pointC);
        const unitVectorAxisF = normalVectorPointF.unit();
        this._pointF = new Vector2D(this._pointD.x + unitVectorAxisF.x * this.size, this._pointD.y + unitVectorAxisF.y * this.size);

        const normalVectorPointG= this._pointE.substract(this._pointC);
        const unitVectorAxisG = normalVectorPointF.unit();
        this._pointG = new Vector2D(this.coordSys.getCenter().x + unitVectorAxisF.x * this.size, this.coordSys.getCenter().y + unitVectorAxisF.y * this.size);

    }

    initEdges () {
        const normalVectorAxisZ= this.coordSys.getAxisZ().substract(this.coordSys.getCenter());
        const unitVectorAxisZ = normalVectorAxisZ.unit();
        const centerX = this.coordSys.getCenter().x;
        const centerY = this.coordSys.getCenter().y ;
        const coordSysCenter = new Vector2D(centerX, centerY)

        this._pointA = new Vector2D( unitVectorAxisZ.x * this.size, unitVectorAxisZ.y * this.size);
        const fromPointA = coordSysCenter.add(unitVectorAxisZ.mult(this.size))
        const normalVectorFromPointAxisX = this.coordSys.getAxisX().substract(this.coordSys.getCenter());
        const unitVectorAxisX = normalVectorFromPointAxisX.unit();
        const toPointA = fromPointA.add(unitVectorAxisX.mult(this.size))
        
        this._edges['EA'] = {
            from: this.coordSys.getCenter(),
            to: fromPointA
        }

        this._edges['AB'] = {
            from: fromPointA,
            to: toPointA
        }
        
        const rotatedPointZ = new Vector2D(unitVectorAxisZ.x, unitVectorAxisZ.y).rotationMatrix(0.1, 140);
        const toPointBC = new Vector2D(toPointA.x + rotatedPointZ.x * this.size  , toPointA.y + rotatedPointZ.y * this.size);
        
        this._edges['BC'] = {
            from: this._edges['AB'].to,
            to: toPointBC
        };

        const normalVectorFromPointAB = this._edges['AB'].from.substract(this._edges['AB'].to);
        const unitVectorFromPointCD = normalVectorFromPointAB.unit();
        const toPointCD = this._edges['BC'].to.add(unitVectorFromPointCD.mult(this.size));
        this._edges['CD'] = {
            from: this._edges['BC'].to,
            to: toPointCD
        };

        this._edges['AD'] = {
            from: this._edges['AB'].from,
            to: this._edges['CD'].to
        };
        
        this._edges['EF'] = {
            from: this.coordSys.getCenter(),
            to: new Vector2D(this.coordSys.getCenter().x  + this.size, this.coordSys.getCenter().y)
        };

        const normalVectorFromPointEH = this._edges['AD'].to.substract(this._edges['AD'].from);
        const unitVectorFromPointEH = normalVectorFromPointEH.unit();
        const toPointEH =  coordSysCenter.add(unitVectorFromPointEH.mult(this.size));
        this._edges['EH'] = {
            from: this.coordSys.getCenter(),
            to: toPointEH
        };


        const normalVectorFromPointFG = this._edges['EH'].to.substract(this._edges['EH'].from);
        const unitVectorFromPointFG = normalVectorFromPointEH.unit();
        const toPointFG =  this._edges['EF'].to.add(unitVectorFromPointEH.mult(this.size));
        this._edges['FG'] = {
            from: this._edges['EF'].to,
            to: toPointFG
        };

        this._edges['GH'] = {
            from: this._edges['EH'].to,
            to: this._edges['FG'].to
        };


        this._edges['DH'] = {
            from: this._edges['AD'].to,
            to: this._edges['EH'].to
        };

        this._edges['BF'] = {
            from: this._edges['AB'].to,
            to: this._edges['EF'].to
        };

        this._edges['DG'] = {
            from: this._edges['BC'].to,
            to: this._edges['FG'].to
        };

        // const rotatedPointZ = new Vector2D(unitVectorAxisZ.x, unitVectorAxisZ.y).rotationMatrix(0.1, 140);
        // this._pointB = new Vector2D(this._pointA.x + rotatedPointZ.x * this.size  , this._pointA.y + rotatedPointZ.y * this.size);

        // const normalVectorPointC = this.coordSys.getAxisX().substract(this.coordSys.getCenter());
        // const unitVectorAxisX = normalVectorPointC.unit();
        
        // this._pointC = new Vector2D(this._pointA.x + unitVectorAxisX.x * this.size  , this._pointA.y + unitVectorAxisX.y * this.size);

        // this._pointD = new Vector2D(centerX + unitVectorAxisX.x * this.size  , centerY + unitVectorAxisX.y * this.size);
        // this._pointE = new Vector2D(this._pointB.x + this.size, this._pointB.y);

        // const normalVectorPointF= this._pointE.substract(this._pointC);
        // const unitVectorAxisF = normalVectorPointF.unit();
        // this._pointF = new Vector2D(this._pointD.x + unitVectorAxisF.x * this.size, this._pointD.y + unitVectorAxisF.y * this.size);

        // const normalVectorPointG= this._pointE.substract(this._pointC);
        // const unitVectorAxisG = normalVectorPointF.unit();
        // this._pointG = new Vector2D(this.coordSys.getCenter().x + unitVectorAxisF.x * this.size, this.coordSys.getCenter().y + unitVectorAxisF.y * this.size);

    }


    initVertices () {
        const centerX = this.coordSystem.getCenter().x;
        const centerY = this.coordSystem.getCenter().y;

        this._edges = [
            {
                from: new Vector2D(centerX, centerY),
                to: new Vector2D(this._pointA.x, this._pointA.y)
            },
            {
                from: new Vector2D(this._pointA.x, this._pointA.y),
                to: new Vector2D(this._pointB.x, this._pointB.y)
            },
            {
                from: new Vector2D(this._pointA.x, this._pointA.y),
                to: new Vector2D(this._pointC.x, this._pointC.y)
            },
            
            {
                from: new Vector2D(centerX, centerY),
                to: new Vector2D(this._pointD.x, this._pointD.y)
            },
            
            {
                from: new Vector2D(this._pointD.x, this._pointD.y),
                to: new Vector2D(this._pointC.x, this._pointC.y)
            },

            {
                from: new Vector2D(this._pointD.x, this._pointD.y),
                to: new Vector2D(this._pointC.x, this._pointC.y)
            },

            {
                from: new Vector2D(this._pointE.x, this._pointE.y),
                to: new Vector2D(this._pointC.x, this._pointC.y)
            },

            {
                from: new Vector2D(this._pointE.x, this._pointE.y),
                to: new Vector2D(this._pointC.x, this._pointC.y)
            },

            {
                from: new Vector2D(this._pointD.x, this._pointD.y),
                to: new Vector2D(this._pointF.x, this._pointF.y)
            },

            {
                from: new Vector2D(centerX, centerY),
                to: new Vector2D(this._pointG.x, this._pointG.y)
            },

            {
                from: new Vector2D(this._pointB.x, this._pointB.y),
                to: new Vector2D(this._pointG.x, this._pointG.y)
            },

            {
                from: new Vector2D(this._pointB.x, this._pointB.y),
                to: new Vector2D(this._pointE.x, this._pointE.y)
            },

            {
                from: new Vector2D(this._pointE.x, this._pointE.y),
                to: new Vector2D(this._pointF.x, this._pointF.y)
            },

            {
                from: new Vector2D(this._pointF.x, this._pointF.y),
                to: new Vector2D(this._pointG.x, this._pointG.y)
            }
        ];
    }
    
    getEdges () {
        return this._edges;
    }

    getPointA () {
        return this._pointA;
    }

    getPointB () {
        return this._pointB;
    }

    getPointC () {
        return this._pointC;
    }

    getPointD () {
        return this._pointD;
    }

    getPointE () {
        return this._pointE;
    }

    getPointF () {
        return this._pointF;
    }

    getPointG () {
        return this._pointG;
    }
    
    
}

export default Cube;