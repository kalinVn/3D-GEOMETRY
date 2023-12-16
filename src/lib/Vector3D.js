
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
    }

    unit () {
        return  new Vector3D(this.x / this.length(), this.y / this.length(), this.z / this.length())
    }

    substract (vector) {
        return  new Vector3D(this.x - vector.x,  this.y - vector.y, this.z - vector.z);
    }

    angleBetweenTwoVectors () {

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

    multTo (vector) {
        return  new Vector3D(this.x * vector.x,  this.y * vector.y,   this.z * vector.z);
    }

    dot (vector) {
        return  (this.x) * (vector.x) +  (this.y )* (vector.y) +  (this.z )* (vector.z)
    }

    length () { 
        return  Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)) + Math.pow(this.z, 2);
    }

    distFrom (vector) {
        return  this.substract(vector).length();
    }

    cross (vector) {
        return  (this.x) * (vector.y) -  (this.y )* (vector.x) - (this.z )* (vector.z);
    }

    equatTo (vector) {
        return (this.x == vector.x && this.y == vector.y) && this.z == vector.z;
    }

    direction () {
        return  new Vector3D(Math.abs(this.x) / this.x, Math.abs(this.y) / this.y, Math.abs(this.z) / this.z);
    }

    rotationMatrix (degree) {
        let rads = (degree * Math.PI) / 180.0
        
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

}