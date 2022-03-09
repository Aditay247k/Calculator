function display(value) {
    document.getElementById("input").value += value;
  }
  
  function clearScreen() {
    document.getElementById("input").value = "";
  }
  
  function calculate() {
    var p = document.getElementById("input").value;
    var q = eval(p);
    document.getElementById("input").value = q;
  }
  