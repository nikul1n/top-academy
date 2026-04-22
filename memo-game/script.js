"use strict";

// import { ColorSwitcher } from "./ColorSwitch.js";
import { GameContainer } from "./GameContainer.js";

const gameElement = document.querySelector



const blocksList = document.querySelector(".blocks-list");
const switchers = [];
const switchersCount = 4 * 4;

for (let i = 0; i < switchersCount; i++) {
    const element = document.createElement('div');
    element.classList.add('colored-block');
    const switcher = new ColorSwitcher(
        element, ['hsl(0, 70%, 80%)', 'hsl(180, 70%, 80%)'], Math.floor(Math.random() * 2));  //Math.floor(Math.random() * 10)); //document.createElement('div'));
        switchers.push(switcher);
        blocksList.appendChild(switcher.getElement());
    }

    
    // const switcher = new ColorSwitcher(
    //     document.createElement('div'));
    // const switcher1 = new ColorSwitcher(document.getElementById("button-switcher-color-1"));
    
    // blocksList.appendChild(switcher.getElement());