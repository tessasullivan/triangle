import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Triangle } from './triangle.js';

$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    var sideA = parseInt($("#sideA").val());
    var sideB = parseInt($("#sideB").val());
    var sideC = parseInt($("#sideC").val());
    if (sideA && sideB && sideC) {
      var outputString = Triangle(sideA, sideB, sideC);
    } else {
      //User left a field blank
      alert("Please enter values for all 3 sides.");
    }
    $("#output").text(outputString);
    event.preventDefault();
  });
});
