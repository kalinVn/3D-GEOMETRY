import Vector2D from '../lib/Vector2D.js';
import { CARTESIAN_COORD_SYSTEM } from '../config.js';

export default class CoordSys {

    constructor() {
        const params = CARTESIAN_COORD_SYSTEM;
        // const centerX = params.center.x;
        // const centerY = params.center.y;
        
        // this._hand = params.hand;
        // this._direction = params.direction;
        // this._rotetionMatixAngle = params.rotetionMatixAngle;

        // this._center = new Vector2D(centerX, centerY);
        // this.axisLength = params.axisLength;
        
        // this._x = new Vector2D(0, 0);
        // this._y = new Vector2D(0, 0);
        // this._z = new Vector2D(0, 0);

        // this.setPostionX();
        // this.setPostionY();
        // this.setPostionZ();

        this.axisLength = params.axisLength;
        const angleAxisY = 45;
        this._showLabels = params.showLabels;
        // const center = plane.getV1().add(new Vector2D(params.center.x, params.center.y));
        this._center = new Vector2D(params.center.x, params.center.y);
        this._y = this._center.projectTo(new Vector2D(0, -this.axisLength));
        this._x = new Vector2D(this.axisLength, 0).rotationMatrix(angleAxisY);
        this._z = new Vector2D(this.axisLength, 0).rotationMatrix(angleAxisY + 90);
        this._x = this._center.projectTo(this._x);
        this._z = this._center.projectTo(this._z);
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