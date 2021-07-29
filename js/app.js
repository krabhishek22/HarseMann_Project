window.addEventListener('resize', function () {
    addRequiredClass();
})

function addRequiredClass() {
    if (window.innerWidth < 860) {
        document.body.classList.add('mobile')
    } else {
        document.body.classList.remove('mobile')
    }
}

window.onload = addRequiredClass

let hamburger = document.querySelector('.hamburger');
let mobileNav = document.querySelector('.nav-list');
let bars = document.querySelectorAll('.hamburger span');

let isActive = false;

hamburger.addEventListener('click', function () {
    mobileNav.classList.toggle('open')
    if (!isActive) {
        bars[0].style.transform = 'rotate(45deg)'
        bars[1].style.opacity = '0'
        bars[2].style.transform = 'rotate(-45deg)'
        isActive = true;
    } else {
        bars[0].style.transform = 'rotate(0deg)'
        bars[1].style.opacity = '1'
        bars[2].style.transform = 'rotate(0deg)'
        isActive = false;
    }
});



var ctx = document.querySelector("canvas").getContext("2d"),
    dashLen = 240,
    dashOffset = dashLen,
    speed = 9,
    txt = "Brands",
    x = 20,
    i = 0;

ctx.font = "4rem'Dancing Script', cursive";
ctx.lineWidth = 1;
ctx.lineJoin = "round";
ctx.globalAlpha = 2 / 3;
ctx.strokeStyle = ctx.fillStyle = "rgb(114, 97, 1)";

(function loop() {
    ctx.clearRect(x, 0, 60, 150);
    ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]); // create a long dash mask
    dashOffset -= speed; // reduce dash length
    ctx.strokeText(txt[i], x, 90); // stroke letter

    if (dashOffset > 0) requestAnimationFrame(loop); // animate
    else {
        ctx.fillText(txt[i], x, 90); // fill final letter
        dashOffset = dashLen; // prep next char
        x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();
        ctx.setTransform(1, 0, 0, 1, 0, 3 * Math.random()); // random y-delta
        ctx.rotate(Math.random() * 0.005); // random rotation
        if (i < txt.length) requestAnimationFrame(loop);
    }
})();