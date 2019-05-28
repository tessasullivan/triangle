import { Triangle } from './../src/triangle.js';
describe('Triangle', function() {
  it('should test whether a Triangle has 3 sides', function() {
    var triangle = new Triangle(3,4,5);
    expect(triangle.sideA).toEqual(3);
    expect(triangle.sideB).toEqual(4);
    expect(triangle.sideC).toEqual(5);
  });
  // it('should correctly determine whether 3 lengths make up a triangle', function() {
  //   var notTriangle = new Triangle(3,9,22);
  //   expect(notTriangle.checkType()).toEqual("These values do not make up a triangle");
  // });
  // it('should correctly determine whether 3 sides make up an equilateral triangle', function() {
  //   var eqTriangle = new Triangle(5,5,5);
  //   expect(eqTriangle.checkType()).toEqual("This is an equilatoral triangle.");
  // });
  // it('should correctly determine whether 3 sides make up an isosceles triangle', function() {
  //   var eqTriangle = new Triangle(5,5,9);
  //   expect(eqTriangle.checkType()).toEqual("This is an isosceles triangle.");
  // });
  // it('should correctly determine whether 3 sides make up a scalene triangle', function() {
  //   var eqTriangle = new Triangle(3,4,5);
  //   expect(eqTriangle.checkType()).toEqual("This is a scalene triangle.");
  // });
});