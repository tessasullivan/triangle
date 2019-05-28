export function Triangle (sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}

Triangle.prototype.checkType = function() {
  var outputString;
  // if (this.sideA === this.sideB && this.sideB === this.sideC) {
  //   outputString = "This is an equilatoral triangle.";
  // } else if (this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC){
  //   outputString = "This is an isosceles triangle.";
  // } else {
  //   if (this.sideA + this.sideB <= this.sideC || this.sideA + this.sideC <= this.sideB || this.sideB + this.sideC <= this.sideA){
  //     outputString = "This is a scalene triangle";
  //   } else {
  //     outputString = "These values do not make up a triangle";
  //   }
  // }
  if ((this.sideA > (this.sideB + this.sideC)) || (this.sideB > (this.sideA + this.sideC)) || (this.sideC > (this.sideA + this.sideB))) {
    outputString = "These values do not make up a triangle";
  }

  return outputString;
}
