var button = document.getElementById("edit");

function toggleCSS(id) {
    var stylesheet = document.getElementById(id);
    var active = "stylesheet";
    var disabled = "alternate stylesheet";
    var current = stylesheet.rel;

    if (current == active) {
        stylesheet.rel = disabled;
    } else {
        stylesheet.rel = active;
    }
}

function swapCSS() {
    toggleCSS("light");
    toggleCSS("dark");
}

button.onclick = function(){ swapCSS(); }