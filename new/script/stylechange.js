/*eslint-env browser*/

function setCookie(cname, cvalue, exdays) {
    "use strict";
    var d, expires;
    d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

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
        setCookie("theme", "dark", 365);
    } else {
        setCookie("theme", "light", 365);
    }
}

function swapCookie() {
    "use strict";
    var theme = getCookie("theme");
    if (theme === "light") {
        setCookie("theme", "dark", 365);
    } else {
        setCookie("theme", "light", 365);
    }
}

function toggleCSS(id) {
    "use strict";
    var stylesheet, active, disabled, current;
    stylesheet = document.getElementById(id);
    active = "stylesheet";
    disabled = "alternate stylesheet";
    current = stylesheet.rel;

    if (current === active) {
        stylesheet.rel = disabled;
    } else {
        stylesheet.rel = active;
    }
}

function swapCSS() {
    "use strict";
    toggleCSS("light");
    toggleCSS("dark");
    swapCookie();
}

checkTheme();
var button = document.getElementById("edit");
button.onclick = function () { "use strict"; swapCSS(); };