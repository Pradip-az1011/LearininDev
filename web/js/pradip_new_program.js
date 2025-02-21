let $x = 10;

//alert($x);

resetButton = document.getElementById("resetButton");
$y = resetButton;

resetButton.addEventListener("click", function () {
    alert("Reset button clicked!");
});

$("#resetButton").text("Reset Button 2"); // jQuery command

document.getElementById("submitButton").addEventListener("click", function () {
  alert("Button clicked!");
  let $x = 20;
  alert(datetime); // FIX THIS
});
