let $x = 10;

alert($x);

resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", function () {
    alert("Reset button clicked!");
});


document.getElementById("myButton").addEventListener("click", function () {
  alert("Button clicked!");
  let $x = 20;
  alert(Today());
});
