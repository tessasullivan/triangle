import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Triangle } from './triangle.js';

$(document).ready(function() {
  $("form#triangle").click(function() {
    var sideA = parseInt($("#sideA").val());
    var sideB = parseInt($("#sideB").val());
    var sideC = parseInt($("#sideC").val());
    if (sideA && sideB && sideC) {
      var triangle = new Triangle(sideA, sideB, sideC);
      var result = triangle.checkType();
    } else {
      //User left a field blank
      alert("Please enter values for all 3 sides.");
    }
    $("#output").text(result);
  });
});
