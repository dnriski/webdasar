function myFunction() {
  var x = document.getElementById("myMaiNav");
  if (x.className === "mainNav") {
    x.className += " responsive";
  } else {
    x.className = "mainNav";
  }
}
