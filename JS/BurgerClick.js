var nav_on = false;

function burgerClickSelector(){
    
    if (localStorage.getItem("mode") === "dark") {
        burgerClickDM();
    }
    else{
        burgerClick();
    }
}


function burgerClick() {
  var css = '#box-container:hover { background-color: white; color: black; border-bottom: 5px solid black;}';
  var css2 = '#box-container:hover i{ color: black;}';
  var css3 = '#box-container:hover h1{ color: black;}';
  var css4 = '#box-container:hover .search-svg__path{ stroke: black;}';
  var css5 = '#box-container:hover .search-input{ color: black;}'

  var a = document.getElementById("myLinks");
  var b = document.getElementById("box-container");
  var c = document.getElementById("burgericon");
  var d = document.getElementById("h1");
  var e = document.getElementById("search-svg__path");
  var f = document.getElementById("search-input");
  var g = document.getElementById("gearicon");

  var searchCloseStyle = document.head.appendChild(document.createElement("style"));

  while (1==1){
    if (nav_on == true) {
      a.style.display = "none";
      b.style = css;
      c.style = css2;
      d.style = css3;
      e.style = css4;
      f.style = css5;
      g.style = css2;

      searchCloseStyle.innerHTML = ".search-close:before, .search-close:after {background: black;}";
      nav_on = false;
      break;
    }
    if (nav_on == false) {
      a.style.display = "block";
      b.style.backgroundColor = "white";
      b.style.borderBottom = "5px solid black";
      c.style.color = "black";
      d.style.color = "black";
      e.style.stroke = "black";
      f.style.color = "black";
      g.style.color = "black";

      searchCloseStyle.innerHTML = ".search-close:before, .search-close:after {background: black;}";
      nav_on = true;
      break;
    }
  }
}

function burgerClickDM() {
    var css = '#box-container:hover { background-color: black; color: white; border-bottom: 5px solid white;}';
  
    var a = document.getElementById("myLinks");
    var b = document.getElementById("box-container");
  
    var searchCloseStyle = document.head.appendChild(document.createElement("style"));
  
    while (1==1){
      if (nav_on == true) {
        a.style.display = "none";
        b.style = css;
        nav_on = false;
        break;
      }
      if (nav_on == false) {
        a.style.display = "block";
        b.style.backgroundColor = "black";
        b.style.borderBottom = "5px solid white";
        nav_on = true;
        break;
      }
    }
  }