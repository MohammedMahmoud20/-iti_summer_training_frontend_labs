//1-Using the document default collection (HTMLCollection) :-
var images = document.images;
console.log(images);
//////////////////////////////////////////////////////////////////
//1-Using document methods:
var images = document.getElementsByTagName("img");
console.log(images);
//////////////////////////////////////////////////////////////////
//2-Finding all options for the City drop-down list :-
var cityDropdown = document.getElementsByName("City")[0];
var options = cityDropdown.options;
console.log(options);
//////////////////////////////////////////////////////////////////
//3-Finding all rows for the second table in the page :-
var table = document.getElementsByTagName("table")[1];
var rows = table.getElementsByTagName("tr");
console.log(rows);
/////////////////////////////////////////////////////////////////
//4-Finding all elements that contain the class name "fontBlue" :-
var elements = document.getElementsByClassName("fontBlue");
console.log(elements);
/////////////////////////////////////////////////////////////////
//lab2
//1-Getting the first anchor inside the second table and change its href property to "training.com" and its text to "Training" :-
var secondTable = document.getElementsByTagName("table")[1];
var anchor = secondTable.getElementsByTagName("a")[0];
anchor.href = "training.com";
anchor.textContent = "Training";
/////////////////////////////////////////////////////////////////
//2-Finding the last image and change its borders to solid pink with a width of 2 pixels :-
var images = document.getElementsByTagName("img");
var lastImage = images[images.length - 1];
lastImage.style.border = "2px solid pink";
////////////////////////////////////////////////////////////////
//3-Creating a JavaScript function to find all checked checkboxes in the userData form and alert their values :-
function alertCheckedCheckboxes() {
    var checkboxes = document.querySelectorAll("#UserData input[type='checkbox']:checked");
    var values = Array.from(checkboxes).map(function(checkbox) {
      return checkbox.value;
    });
    alert("Checked checkboxes: " + values.join(", "));
  }
///////////////////////////////////////////////////////////////
//4-Finding the element with the id value "example" and change its background color to pink :-
var exampleElement = document.getElementById("example");
exampleElement.style.backgroundColor = "pink";
//////////////////////////////////////////////////////////////