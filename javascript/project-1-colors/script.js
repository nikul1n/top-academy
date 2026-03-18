// const lights = document.querySelectorAll(".light");
const trafficLight = document.createElement("div");
trafficLight.classList.add("traffic-lights");
const container = document.querySelector(".container");
container.appendChild(trafficLight);
const lights = [];

for (let i = 0; i < 3; i++) {
    lights.push(document.createElement("div"));
    lights[i].classList.add("light");
    trafficLight.appendChild(lights[i]);
}



// lights[0].dataset.color = "red";
// lights[1].dataset.color = "yellow";
// lights[2].dataset.color = "green";

let n = 0;

setInterval(function () {
    lights[n].style.backgroundColor = lignts[n].dataset.color;
    lights[n > 0 ? n - 1 : light.length - 1].style.backgroundColor = "";
    n = (n + 1) % lights.length;
}, 1000
);