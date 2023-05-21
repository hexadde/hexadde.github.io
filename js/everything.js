function help(x, y) {
    x.style.display = "block";
    x.style.animation="god 0.8s linear";
    y.style.animation="etext 1.6s linear";
};

function off(x) {
    x.style.display = "none";
};

function gone(x) {
    x.style.animation="byebitch 4s linear";
    x.addEventListener("animationend", () => {
        x.style.display="none";
    });

};

function fu(y, l, b, h, m) {
    if (y == "" || l == "") {
        b.textContent="Please, input your name and the name of your loved one.";
    } else {
        h.classList.remove("heartache");
        setTimeout(()=> {h.classList.add("heartache");}, 0);
        b.textContent="Calculating...";
        m.textContent="?%";
        h.addEventListener("animationend", () => {
                b.textContent ="Congratulations! You are NOT compatible!";
                m.textContent="0%";
                confetti.start(0, 50, 150);
                setTimeout(function() {
                    confetti.stop();
                }, 5000);
            });
    };
};

function carousel(x) {
    var i;
    var x = document.getElementsByClassName("hot");
    for (i=0; i<x.length; i++) {
        x[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > x.length) {
        slideIndex = 1;
    }
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 3000);
};


var images = [];
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
};

preload(
    "../img/amyiscold45.png",
    "../img/Brandon.png",
    "../img/Coffee.png",
    "../img/Croisssant.png",
    "../img/Ducky.png",
    "../img/eye.png",
    "../img/Heert.png",
    "../img/lilghost.png",
    "../img/Love-calc.png",
    "../img/panboy.png",
    "../img/sky.jpeg",
    "../img/Transgender_Pride_flag.svg.png",
    "../img/Twoster.png",

)
