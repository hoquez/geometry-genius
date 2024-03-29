/**
 * Objective: get base, height of a triangle. calculate the area by using the provided formula. and then display the area.
 * step -1: get the base value
 *
 */
function calculateTriangleArea() {
  //get triangle base
  const triangleBaseInput = document.getElementById("triangle-base").value;
  const base = parseFloat(triangleBaseInput);
  //get triangle height
  const triangleHeightInput = document.getElementById("triangle-height").value;
  const height = parseFloat(triangleHeightInput);
  //calculate area

  const triangleArea = 0.5 * base * height;

  //display triangle area
  const triangleAreaSpan = document.getElementById("triangle-area");
  triangleAreaSpan.innerText = triangleArea;
}

//rectangle area calculation
function calculateRectangleArea() {
  //get rectangle width
  const rectangleWidthInput = document.getElementById("rectangle-width").value;
  const rectangleWidth = parseFloat(rectangleWidthInput);
  //get rectangle width
  const rectangleLengthInput =
    document.getElementById("rectangle-length").value;
  const rectangleLength = parseFloat(rectangleLengthInput);
  //calculate area

  const rectangleArea = rectangleWidth * rectangleLength;

  //display triangle area
  const rectangleAreaSpan = document.getElementById("rectangle-area");
  rectangleAreaSpan.innerText = rectangleArea;
}

//COMMON FUNCTION FOR ALL AREA CALCULATION

function getFirstInputValue(inputFieldId) {
  const firstInput = document.getElementById(inputFieldId).value;
  const firstValue = parseFloat(firstInput);
  return firstValue;
}

function setInnerTextById(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}

//Area calculation for parallelogram
function calculatePlArea() {
  const plBase = getFirstInputValue("pl-base");
  const plHeight = getFirstInputValue("pl-height");
  const plArea = plBase * plHeight;

  setInnerTextById("pl-area", plArea);
}
