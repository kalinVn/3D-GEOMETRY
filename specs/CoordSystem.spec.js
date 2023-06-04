let chai = require('chai');
let sinon = require('sinon');

const { expect } = require('chai');
const chaiaspromise = require("chai-as-promised");

import CoordSys from  '../src/units/CoordSystem';
import Vector2D from '../src/lib/Vector2D';
import { CARTESIAN_COORD_SYSTEM } from '../src/config.js';

describe('CoordSys', function() {
  let coordSys;

  beforeEach(function() {
    coordSys = new CoordSys();
  });

  it('should initialize correctly', function() {
    const center = new Vector2D(CARTESIAN_COORD_SYSTEM.center.x, CARTESIAN_COORD_SYSTEM.center.y);
    
    expect(center.x).to.be.equal(coordSys.getCenter().x);
    expect(center.y).to.be.equal(coordSys.getCenter().y);
    expect(coordSys.axisLength).to.be.equal(CARTESIAN_COORD_SYSTEM.axisLength);
   
  });

  it('should calculate the correct positions for axes', function() {
    const expectedX = new Vector2D(CARTESIAN_COORD_SYSTEM.center.x + CARTESIAN_COORD_SYSTEM.axisLength, CARTESIAN_COORD_SYSTEM.center.y);
    const expectedY = new Vector2D(CARTESIAN_COORD_SYSTEM.center.x, CARTESIAN_COORD_SYSTEM.center.y - CARTESIAN_COORD_SYSTEM.axisLength);
    const expectedZ = new Vector2D(CARTESIAN_COORD_SYSTEM.center.x, CARTESIAN_COORD_SYSTEM.center.z - CARTESIAN_COORD_SYSTEM.axisLength);

    expect(coordSys.getAxisX().x).to.be.equal(expectedX.x);
    expect(coordSys.getAxisX().y).to.be.equal(expectedX.y);
    expect(coordSys.getAxisX().z).to.be.equal(expectedX.z);

    expect(coordSys.getAxisY().x).to.be.equal(expectedY.x);
    expect(coordSys.getAxisY().y).to.be.equal(expectedY.y);

  });

  it('should calculate the correct rotated vector', function() {
    // Test the getRotatedVector method with a specific angle
    const angle = 45;
    const rotatedVector = coordSys.getRotatedVector(angle);
    const expectedVector =  new Vector2D(-176.78, 176.78);

    expect(parseFloat(rotatedVector.x.toFixed(2))).to.be.equal(expectedVector.x);
    expect(parseFloat(rotatedVector.y.toFixed(2))).to.be.equal(expectedVector.y);
  });


});
