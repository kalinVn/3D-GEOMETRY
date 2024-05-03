
export default class Vector3D {

    constructor (x , y, z) { 
      this.x = x;
      this.y = y;
      this.z = z;
    }

    copy () {
        return new Vector3D(this.x, this.y, this.z);
    }

    add (vector) {
        return new Vector3D(this.x + vector.x, this.y + vector.y, this.z + vector.z);
    }

    addTo (vector) {
        this.x += vector.x;
        this.y += vector.y;
        this.z += vector.z;

        return new Vector3D(this.x, this.y, this.z);
    }

    unit () {
        return  new Vector3D(this.x / this.length(), this.y / this.length(), this.z / this.length())
    }

    substract (vector) {
        return  new Vector3D(this.x - vector.x,  this.y - vector.y, this.z - vector.z);
    }


    substractAbs (vector) {
        return  new Vector3D(Math.abs(this.x) -Math.abs( vector.x), Math.abs(this.y) -Math.abs( vector.y), Math.abs(this.z) - Math.abs( vector.z) );
    }

    abs () {
        return  new Vector3D(Math.abs(this.x),  Math.abs(this.y), Math.abs(this.z));
    }


    mult (scalar) {
        return  new Vector3D(this.x * scalar,  this.y * scalar, this.z * scalar);
    }

    parallel (vector, length) {
        const substractedVecor = this.substract(vector);
        const unitVector = substractedVecor.unit(length);
        
        return unitVector.mult(length);
    }

    middle (vector1, vector2) {
        return  new Vector3D((vector1.x + vector2.x) / 2,  (vector1.y + vector2.y) / 2, (vector1.z + vector2.z) / 2);
    }

    multTo (vector) {
        return  new Vector3D(this.x * vector.x,  this.y * vector.y,   this.z * vector.z);
    }

    dotProduct (vector) {
        return  (this.x) * (vector.x) +  (this.y )* (vector.y) +  (this.z )* (vector.z)
    }

    length () { 
        return  Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)) + Math.pow(this.z, 2);
    }

    distFrom (vector) {
        return  this.substract(vector).length();
    }

    crossProduct (vector) {
        const x = this.y * vector.z - this.z *  vector.y;
        const y = this.z * vector.x - this.x * vector.z;
        const z = this.x * vector.y - this.y * vector.x;

        return new Vector3D(x, y, z);
    }

    equatTo (vector) {
        return (this.x == vector.x && this.y == vector.y) && this.z == vector.z;
    }

    direction () {
        return  new Vector3D(Math.abs(this.x) / this.x, Math.abs(this.y) / this.y, Math.abs(this.z) / this.z);
    }

    rotationMatrix (degree) {
        let rads = (degree * Math.PI) / 180.0;
        
        const x = this.x * Math.cos(rads) - this.y * Math.sin(rads);
        const y = this.y * Math.cos(rads) + this.x * Math.sin(rads);
        const z = 0
        return new Vector3D(x, y, z);
    }

    rotationX (degree) {
        let rads = (degree * Math.PI) / 180.0
        
        const x = this.x * Math.cos(rads) - this.y * Math.sin(rads);
        const y = this.y * Math.cos(rads) + this.x * Math.sin(rads);
        const z = this.y * Math.cos(rads) + this.x * Math.sin(rads);
        return new Vector3D(x, y, z);
    }

    rotationY (degree) {
        let rads = (degree * Math.PI) / 180.0
        
        const x = this.x * Math.cos(rads) - this.y * Math.sin(rads);
        const y = this.y * Math.cos(rads) + this.x * Math.sin(rads);
        const z = this.y * Math.cos(rads) + this.x * Math.sin(rads);

        return new Vector3D(x, y, z);
    }

    rotationZ (degree) {
        let rads = (degree * Math.PI) / 180.0
        
        const x = this.x * Math.cos(rads) - this.y * Math.sin(rads);
        const y = this.y * Math.cos(rads) + this.x * Math.sin(rads);
        const z = this.y * Math.cos(rads) + this.x * Math.sin(rads);
        
        return new Vector3D(x, y, z);
    }

    projectTo (vector) {
        return new Vector3D(vector.x + this.x, vector.y + this.y, vector.z + this.z);
    }   

    project (projectionVector, length, angle=null) {
        let currentVector = projectionVector.substract(this);
        
        currentVector = currentVector.unit();
        currentVector = currentVector.mult(length);
        
        if (angle) 
            currentVector = currentVector.rotationMatrix(angle);

        
        currentVector = projectionVector.add(currentVector);
        
        return currentVector;
    }

}