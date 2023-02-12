
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

    unit () {
        return  new Vector2D(this.x / this.length(), this.y / this.length())
    }

    substract (vector) {
        return  new Vector2D(this.x - vector.x,  this.y - vector.y);
    }

    substractAbs (vector) {
        return  new Vector2D(Math.abs(this.x) -Math.abs( vector.x),  Math.abs(this.y) -Math.abs( vector.y) );
    }

    mult (scalar) {
        return  new Vector2D(this.x * scalar,  this.y * scalar);
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
    };

    rotationMatrix (radius, degree) {
        let rads = (degree * Math.PI) / 180.0
        
        let x = this.x * Math.cos(rads) - this.y * Math.sin(rads);
        let y = this.y * Math.cos(rads) + this.x * Math.sin(rads);

        return new Vector2D(x, y);
    }

}