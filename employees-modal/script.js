"use strict";

const btnOpenModal = document.querySelector("[data-open-modal]");
const btnCloseModal = document.querySelector("[data-close-modal]");
const btnSaveEmpl = document.querySelector(".btn.save-employee");
const modal = document.getElementById("modal");

btnOpenModal.addEventListener('click', () => {
    modal.classList.toggle('active')
});

btnCloseModal.addEventListener('click', () => {
    modal.classList.toggle('active')
});

btnSaveEmpl.addEventListener('click', (event) => {
    event.preventDefault();

    const gridEmpl = document.querySelector(".grid");
    const newEmployee = document.createElement('div');
    const cardName = document.createElement('div');
    cardName.classList.add("name");
    const inputName = document.querySelector("[name='name']")
    cardName.textContent = inputName.value;
    
    // const inputRole = document.querySelector("[name='role']")
    // const inputContact = document.querySelector("[name='contact']")
    // const name = document.querySelector("name").value;
    // const nameEmpl = name.value;
    newEmployee.classList.add('card');
    gridEmpl.appendChild(newEmployee);
    newEmployee.appendChild(cardName);
    // gridEmpl.newEmployee


    // newEmployee.appendChild('div');
    // appendChild.newEmployee;
    // newEmployee.name.add("123123");
    // newEmployee.role.add("123123");
    // newEmployee.contact.add("123123");
    // return false;
});

