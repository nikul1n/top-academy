const image = document.querySelector(".image-container");
const position = { x: 0, y: 0 };
const screenSizes = {
    get width() {
        return window.innerWidth;
    },
    get height() { return window.innerHeight; }
};
const speed = { x: 10, y: 10 };
let hueRotation = 0;
const minHueRotation = 60;
const maxHueRotation = 270;

function render() {
    if (position.x + speed.x < 0 || position.x + image.clientWidth + speed.x >= screenSizes.width) {
        hueRotation = Math.floor(Math.random() * (maxHueRotation - minHueRotation) + minHueRotation) % 360;
        image.style.filter = `hue-rotate(${hueRotation}deg)`;
        position.x = speed.x > 0 ? screenSizes.width - image.clientWidth : 0;
        image.style.left = `${screenSizes.width - image.clientWidth}px`;
        speed.x *= -1;
    } else {
        position.x += speed.x;
    }
    image.style.left = `${position.x}px`;


    if (position.y + speed.y < 0 || position.y + image.clientHeight + speed.y >= screenSizes.height) {
        hueRotation = Math.floor(Math.random() * (maxHueRotation - minHueRotation) + minHueRotation) % 360;
        image.style.filter = `hue-rotate(${hueRotation}deg)`;
        position.y = speed.y > 0 ? screenSizes.height - image.clientHeight : 0;
        image.style.top = `${screenSizes.height - image.clientHeight}px`;
        speed.y *= -1;
    } else {
        position.y += speed.y;
    }
    image.style.top = `${position.y}px`;

    requestAnimationFrame(render);
};
render();

function vertical() {

}