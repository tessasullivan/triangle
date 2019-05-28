import { Triangle } from './../src/triangle.js';
describe('Triangle', function() {
  it('should test whether a Triangle has 3 sides', function() {
    var triangle = new Triangle(3,4,5);
    expect(triangle.sideA).toEqual(3);
    expect(triangle.sideB).toEqual(4);
    expect(triangle.sideC).toEqual(5);
  });
  it('should correctly determine whether 3 lengths make up a triangle', function() {
    var notTriangle = new Triangle(3,9,22);
    console.log(notTriangle);
    expect(notTriangle.checkType()).toEqual("These values do not make up a triangle");
  });
});