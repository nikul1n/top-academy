const square = document.getElementById("square");
let size = 50; 
let x = 0;
let y = 0;
const speed = 5; 
let grow = 0.3;
let side = "top";

const screenSizes = {
    get width() {
        return window.innerWidth;
    },
    get height() { return window.innerHeight; }
};

function animate() {
    if (side === "top") {
        x+= grow;
        if (x+size === (window.innerHeight || window.innerWidth)) {

        }
    }
}