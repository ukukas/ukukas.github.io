/*eslint-env browser*/

function getCookie(cname) {
    "use strict";
    var name, ca, i, c;
    name = cname + "=";
    ca = document.cookie.split(';');
    for (i = 0; i < ca.length; i += 1) {
        c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
}

function checkTheme() {
    "use strict";
    var theme = getCookie("theme");
    if (theme === "dark") {
        document.getElementById("dark").rel = "stylesheet";
        document.getElementById("light").rel = "alternate stylesheet";
    }
}

checkTheme();