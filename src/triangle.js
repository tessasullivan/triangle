export function triangle (sideA, sideB, sideC) {
  var outputString;
  if (sideA === sideB && sideB === sideC) {
    outputString = "This is an equilatoral triangle.";
  } else if (sideA === sideB || sideA === sideC || sideB === sideC){
    outputString = "This is an isosceles triangle.";
  } else {
    if (sideA + sideB <= sideC || sideA + sideC <= sideB || sideB + sideC <= sideA){
      outputString = "This is a scalene triangle";
    } else {
      outputString = "These values do not make up a triangle";
    }
  }
  return outputString;
}
