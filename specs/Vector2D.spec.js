const { expect } = require('chai');

import CoordSys from  '../src/units/CoordSystem';
import Vector2D from '../src/lib/Vector2D';

describe('Test vector class', function() {

  it('should calculate the correct rotated vector', function() {
    const coordSys = new CoordSys();
    const angle = 45;
    const rotatedVector = coordSys.getRotatedVector(angle);
    const expectedVector =  new Vector2D(-176.78, 176.78);

    expect(parseFloat(rotatedVector.x.toFixed(2))).to.be.equal(expectedVector.x);
    expect(parseFloat(rotatedVector.y.toFixed(2))).to.be.equal(expectedVector.y);
  });


});
