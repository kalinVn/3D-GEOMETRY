let chai = require('chai');
let sinon = require('sinon');

const { expect } = require('chai');
const assert = require('assert');


import Cube from  '../src/units/Cube';
import CoordSys from  '../src/units/CoordSystem';
import Vector2D from '../src/lib/Vector2D';
import { PARAMS_CUBE } from '../src/config.js';

describe('Test cube class', function() {
  let cube;
  let coordSys;
  beforeEach(function() {
    cube = new Cube();
    coordSys = new CoordSys();
  });



  it('test initGeometry function', function() {
    cube.initGeometry();
    const expectedPointA = new Vector2D(565.15, 534.85);
    const expectedPointB = new Vector2D(575.61, 415.31);
    const expectedPointC = new Vector2D(685.15, 534.85);
    const expectedPointD = new Vector2D(770, 450);
    const expectedPointE = new Vector2D(695.61, 415.31);
    const expectedPointF = new Vector2D(780.46, 330.46);
    const expectedPointG = new Vector2D(660.46, 330.46);

    expect(parseFloat(expectedPointA.x.toFixed(2))).to.be.equal(parseFloat(cube.getPointA().x.toFixed(2)));
    expect(parseFloat(expectedPointA.y.toFixed(2))).to.be.equal(parseFloat(cube.getPointA().y.toFixed(2)));

    expect(parseFloat(expectedPointB.x.toFixed(2))).to.be.equal(parseFloat(cube.getPointB().x.toFixed(2)));
    expect(parseFloat(expectedPointB.y.toFixed(2))).to.be.equal(parseFloat(cube.getPointB().y.toFixed(2)));

    expect(parseFloat(expectedPointC.x.toFixed(2))).to.be.equal(parseFloat(cube.getPointC().x.toFixed(2)));
    expect(parseFloat(expectedPointC.y.toFixed(2))).to.be.equal(parseFloat(cube.getPointC().y.toFixed(2)));

    expect(parseFloat(expectedPointD.x.toFixed(2))).to.be.equal(parseFloat(cube.getPointD().x.toFixed(2)));
    expect(parseFloat(expectedPointD.y.toFixed(2))).to.be.equal(parseFloat(cube.getPointD().y.toFixed(2)));

    expect(parseFloat(expectedPointE.x.toFixed(2))).to.be.equal(parseFloat(cube.getPointE().x.toFixed(2)));
    expect(parseFloat(expectedPointE.y.toFixed(2))).to.be.equal(parseFloat(cube.getPointE().y.toFixed(2)));

    expect(parseFloat(expectedPointF.x.toFixed(2))).to.be.equal(parseFloat(cube.getPointF().x.toFixed(2)));
    expect(parseFloat(expectedPointF.y.toFixed(2))).to.be.equal(parseFloat(cube.getPointF().y.toFixed(2)));

    expect(parseFloat(expectedPointG.x.toFixed(2))).to.be.equal(parseFloat(cube.getPointG().x.toFixed(2)));
    expect(parseFloat(expectedPointG.y.toFixed(2))).to.be.equal(parseFloat(cube.getPointG().y.toFixed(2)));

  });

  it('test edges properties', function() {
    cube.initEdges();

    // Test the edges of the cube
    const edges = cube.getEdges();
    expect(edges).to.have.property('EA')
    expect(edges).to.have.property('AB')
    expect(edges).to.have.property('BC')
    expect(edges).to.have.property('CD')
    expect(edges).to.have.property('AD')
    expect(edges).to.have.property('EF')
    expect(edges).to.have.property('EH')
    expect(edges).to.have.property('FG')
    expect(edges).to.have.property('GH')
    expect(edges).to.have.property('DH')
    expect(edges).to.have.property('BF')
    expect(edges).to.have.property('DG')
    
  });

  
});
