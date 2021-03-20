var speed = 250,
    str = document.getElementById("str").textContent,
    pos = str.length;


function type() {
    "use strict";
    if (pos < str.length) {
        document.getElementById("str").textContent += str.charAt(pos);
        pos++;
        setTimeout(type, speed);
    } else {
        setTimeout(erase, speed);
    }
}

setTimeout(type, speed);

function erase() {
    "use strict";
    if (pos >= 0) {
        var temp = str.substring(0, pos);
        document.getElementById("str").textContent = temp;
        pos--;
        setTimeout(erase, speed);
    } else {
        setTimeout(type, speed);
    }
}

var up = document.getElementById("up")

window.onscroll = function () {
    if (scrollY == 0) {
        up.style.display = "none";
    } else {
        up.style.display = "block";
    }
}

var activeLink = document.querySelectorAll("nav ul li a"),
    m,
    z;

for (m = 0; m < activeLink.length; m++) {
    activeLink[m].onclick = function () {
        for (z = 0; z < activeLink.length; z++) {
            activeLink[z].classList.remove("active");
        }
        this.classList.add("active");
    }

}

var LM1 = document.getElementById("LM1"),
    more1 = document.getElementById("more1"),
    div1 = document.getElementById("div1"),
    close1 = document.getElementById("close1");


LM1.onclick = function () {
    "use strict";
    more1.style.display = "block";
    div1.style.opacity = "0";
}
close1.onclick = function () {
    "use strict";
    more1.style.display = "none";
    div1.style.opacity = "100";
}
var LM2 = document.getElementById("LM2"),
    more2 = document.getElementById("more2"),
    div2 = document.getElementById("div2"),
    close2 = document.getElementById("close2");


LM2.onclick = function () {
    "use strict";
    more2.style.display = "block";
    div2.style.opacity = "0";
}
close2.onclick = function () {
    "use strict";
    more2.style.display = "none";
    div2.style.opacity = "100";
}
var LM3 = document.getElementById("LM3"),
    more3 = document.getElementById("more3"),
    div3 = document.getElementById("div3"),
    close3 = document.getElementById("close3");


LM3.onclick = function () {
    "use strict";
    more3.style.display = "block";
    div3.style.opacity = "0";
}
close3.onclick = function () {
    "use strict";
    more3.style.display = "none";
    div3.style.opacity = "100";
}
