"use strict";

const btnOpenModal = document.querySelector("[data-open-modal]");
const btnCloseModal = document.querySelector("[data-close-modal]");
const btnSaveEmpl = document.querySelector(".btn.save-employee");
const cardOpenEmpl = document.querySelector(".list-employee");

const modal = document.getElementById("modal");
const cardSaveForm = document.querySelector('.card-save-form');

let cardFieldsElementsToEdit = null;

btnOpenModal.addEventListener('click', () => {
    modal.classList.toggle('active');

});

btnCloseModal.addEventListener('click', () => {
    modal.classList.toggle('active');
});

cardOpenEmpl.addEventListener('click', (event) => {
    const card = event.target.closest('.card');
    if (!card) return;
    modal.classList.toggle('active');

    const cardNameInput = cardSaveForm.querySelector("[name='name']")
    const cardRoleInput = cardSaveForm.querySelector("[name='role']") 
    const cardContactInput = cardSaveForm.querySelector("[name='contact']")
    const cardName = card.querySelector('.name');
    const cardName = card.querySelector('.name');
    const cardName = card.querySelector('.name');
    cardName.value = cardNameInput.textContent;
    cardRoleInput.textContent = cardRoleInput.value;
    cardContactInput.textContent = cardContactInput.value;

    cardFieldsElementsToEdit = {name: cardNameInput, role: cardRoleInput, contact: cardContactInput};
});

const gridEmpl = document.querySelector(".list-employee");

btnSaveEmpl.addEventListener('click', (event) => {
    event.preventDefault();
    if (!cardFieldsElementsToEdit) {
        cardFieldsElementsToEdit = createEmployee();
    } else {
    }
    updateCardFieldsByInputs(cardFieldsElementsToEdit);
});

function updateCardFieldsByInputs(cardFields) {
    const inputName = cardSaveForm.newEmployee.name;
    cardFields.name.textContent = inputName.value;

    const inputRole = cardSaveForm.newEmployee.role;
    cardFields.role.textContent = inputRole.value;

    const inputContact = cardSaveForm.newEmployee.contact;
    cardFields.contact.textContent = inputContact.value;
}

function createEmployee() {
    const newEmployee = document.createElement('div');
    const cardName = document.createElement('div');
    const cardRole = document.createElement('div');
    const cardContact = document.createElement('div');

    cardName.classList.add("name");
    const inputName = document.querySelector("[name='name']")
    cardName.textContent = inputName.value;

    cardRole.classList.add("role");
    const inputRole = document.querySelector("[name='role']")
    cardRole.textContent = inputRole.value;

    cardContact.classList.add("contact");
    const inputContact = document.querySelector("[name='contact']")
    cardContact.textContent = inputContact.value;

    newEmployee.classList.add('card');
    gridEmpl.appendChild(newEmployee);
    newEmployee.appendChild(cardName);
    newEmployee.appendChild(cardRole);
    newEmployee.appendChild(cardContact);

    return { name: cardName, role: cardRole, contact: cardContact };
};