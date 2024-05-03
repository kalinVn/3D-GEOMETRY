
export default class Vector2D {

    constructor (x , y ) { 
      this.x = x;
      this.y = y;
    }

    copy () {
        return new Vector2D(this.x, this.y);
    }

    add (vector) {
        return new Vector2D(this.x + vector.x, this.y + vector.y);
    }

    addTo (vector) {
        this.x += vector.x;
        this.y += vector.y;
    }

    middle (vector1, vector2) {
        return  new Vector2D((vector1.x + vector2.x) / 2,  (vector1.y + vector2.y) / 2);
    }

    crossProduct (vector) {
        return  this.x * vector.y  - this.y * vector.x;
    }

    unit () {
        return  new Vector2D(this.x / this.length(), this.y / this.length())
    }

    substract (vector) {
        return  new Vector2D(this.x - vector.x,  this.y - vector.y);
    }

    substractAbs (vector) {
        return  new Vector2D(Math.abs(this.x) -Math.abs( vector.x),  Math.abs(this.y) -Math.abs( vector.y) );
    }

    abs () {
        return  new Vector2D(Math.abs(this.x),  Math.abs(this.y));
    }


    mult (scalar) {
        return  new Vector2D(this.x * scalar,  this.y * scalar);
    }

    parallel (vector, length) {
        const substractedVecor = this.substract(vector);
        const unitVector = substractedVecor.unit(length);
        
        return unitVector.mult(length);
    }

    multTo (vector) {
        return  new Vector2D(this.x * vector.x,  this.y * vector.y);
    }

    dot (vector) {
        return  (this.x) * (vector.x) +  (this.y )* (vector.y)
    }

    length () { 
        return  Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }

    distFrom (vector) {
        return  this.substract(vector).length();
    }

    cross (vector) {
        return  (this.x) * (vector.y) -  (this.y )* (vector.x)
    }

    equatTo (vector) {
        return (this.x == vector.x && this.y == vector.y)
    }

    direction () {
        return  new Vector2D(Math.abs(this.x) / this.x,  Math.abs(this.y) / this.y);
    }

    rotationMatrix (degree) {
        let rads = (degree * Math.PI) / 180.0
        
        let x = this.x * Math.cos(rads) - this.y * Math.sin(rads);
        let y = this.y * Math.cos(rads) + this.x * Math.sin(rads);

        return new Vector2D(x, y);
    }

    projectTo (vector) {
        return new Vector2D(vector.x + this.x, vector.y + this.y);
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