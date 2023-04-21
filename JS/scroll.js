/* Author - Cameron Donnelly 40533520 */
/* This script file changes the colour of the items in the header when the users scrolls down from the original position of the page.*/

const docElement = document.documentElement;

window.addEventListener('scroll', scrollSelector);

function scrollSelector(){
    if (localStorage.getItem("mode") === "dark") {
        scrollDM();
    }
    else{
        scroll();
    }
}

function scroll() {
    var css = '#box-container:hover { background-color: white; color: black;  border-bottom: 5px solid black;}';
    var css2 = '#box-container:hover i{ color: black;}';
    var css3 = '#box-container:hover h1{ color: black;}';
    var css4 = '.search-close:before, .search-close:after { background: black; }';
    var css5 = '.search-close:before, .search-close:after { background: white; }';

    var a = document.getElementById("box-container");
    var b = document.getElementById("burgericon");
    var c = document.getElementById("h1");
    var d = document.getElementById("search-svg__path");
    var e = document.getElementById("search-input");
    var f = document.getElementById("search-close");
    var g = document.getElementById("gearicon");
    var h = document.getElementById("myLinks");

    var searchCloseStyle = document.head.appendChild(document.createElement("style"));

    if (docElement.scrollTop === 0) {
        a.style = css;
        b.style = css2;
        c.style = css3;
        d.style = css2;
        e.style = css2;
        f.style = css5;
        g.style = css2;
        h.style = css2;

        searchCloseStyle.innerHTML = ".search-close:before, .search-close:after {background: white;}";
    }

    if (docElement.scrollTop != 0) {
        a.style.backgroundColor = "white";
        a.style.borderBottom = "5px solid black";
        b.style.color = "black";
        c.style.color = "black";
        d.style.stroke = "black";
        e.style.color = "black";
        f.style = css4;
        g.style.color = "black";
        h.style.display = "none";

        searchCloseStyle.innerHTML = ".search-close:before, .search-close:after {background: black;}";
    }
}

function scrollDM() {
    var css = '#box-container:hover { background-color: black; color: white;  border-bottom: 5px solid white;}';
    var css2 = '#box-container:hover i{ color: white;}';
    var css3 = '#box-container:hover h1{ color: white;}';
    var css4 = '.search-close:before, .search-close:after { background: white; }';
    var css5 = '.search-close:before, .search-close:after { background: white; }';

    var a = document.getElementById("box-container");
    var b = document.getElementById("burgericon");
    var c = document.getElementById("h1");
    var d = document.getElementById("search-svg__path");
    var e = document.getElementById("search-input");
    var f = document.getElementById("search-close");
    var g = document.getElementById("gearicon");
    var h = document.getElementById("myLinks");

    var searchCloseStyle = document.head.appendChild(document.createElement("style"));

    if (docElement.scrollTop === 0) {
        a.style = css;
        b.style = css2;
        c.style = css3;
        d.style = css2;
        e.style = css2;
        f.style = css5;
        g.style = css2;
        h.style = css2;

        searchCloseStyle.innerHTML = ".search-close:before, .search-close:after {background: white;}";
    }

    if (docElement.scrollTop != 0) {
        a.style.backgroundColor = "black";
        a.style.borderBottom = "5px solid white";
        b.style.color = "white";
        c.style.color = "white";
        d.style.stroke = "white";
        e.style.color = "white";
        f.style = css4;
        g.style.color = "white";
        h.style.display = "none";

        searchCloseStyle.innerHTML = ".search-close:before, .search-close:after {background: white;}";
    }
}