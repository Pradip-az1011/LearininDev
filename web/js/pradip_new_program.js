let $x = 10;

//alert($x);

resetButton = document.getElementById("resetButton");

resetButton.addEventListener("click", function () {
    alert("Reset button clicked!");
});

$("#resetButton").text("Reset Button 2"); // jQuery command

document.getElementById("submitButton").addEventListener("click", function () {
  alert("Button clicked!"+ new Date()) ;
  
});
