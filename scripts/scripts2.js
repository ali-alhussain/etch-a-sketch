var gridArea = document.getElementById("main");
var tip = 0;
grid = 16;

creategrid();

function changetip() {
  if (tip === 0) {
    tip = 1;
  } else if (tip === 1) {
    tip = 0;
  } else return;
}

function creategrid() {
  for (var i = 0; i < grid; i++) {
    var row = document.createElement("div");
    row.classList = "row";
    row.style.height = `${720 / grid}px`;
    for (x = 0; x < grid; x++) {
      var cell = document.createElement("div");
      cell.classList = "gridsquare";
      cell.style.height = `${720 / grid}px`;
      cell.style.width = `${720 / grid}px`;
      row.appendChild(cell);
    }
    gridArea.appendChild(row);
  }

  function hoverChange() {
    if (tip === 0) {
      this.style.background = "black";
    } else if (tip === 1) {
      var rndcolour = Math.floor(Math.random() * 16777215).toString(16);
      this.style.background = "#" + rndcolour;
    }
  }

  function clearChange() {
    box.forEach(box => {
      box.style.background = "white";
    });
  }

  function resizegrid() {
    var newsize = prompt("New grid length and height?");
    grid = newsize;
    document.getElementById("main").innerHTML = "";
    creategrid();
  }

  var clear = document.getElementById("reset");
  clear.addEventListener("click", clearChange);

  var resize = document.getElementById("resize");
  resize.addEventListener("click", resizegrid);

  var colourtoggle = document.getElementById("clrchange");
  colourtoggle.addEventListener("click", changetip);

  var box = document.querySelectorAll(".gridsquare");

  box.forEach(box => {
    box.addEventListener("mouseover", hoverChange);
  });
}
