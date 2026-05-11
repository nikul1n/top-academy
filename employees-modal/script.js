"use strict";

const btnOpenModal = document.querySelector("[data-open-modal]");
const btnCloseModal = document.querySelector("[data-close-modal]");
const btnSaveEmpl = document.querySelector(".save-employee");
const cardOpenEmpl = document.querySelector(".list-employee");
const cardSaveForm = document.querySelector('.card-save-form');

const modal = document.getElementById("modal");

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
    const cardRole = card.querySelector('.role');
    const cardContact = card.querySelector('.contact');

    cardNameInput.value = cardName.textContent;
    cardRoleInput.value = cardRole.textContent;
    cardContactInput.value = cardContact.textContent;

    cardFieldsElementsToEdit = { name: cardName, role: cardRole, contact: cardContact };
});

const gridEmpl = document.querySelector(".list-employee");

btnSaveEmpl.addEventListener('click', (event) => {
    event.preventDefault();
    if (!cardFieldsElementsToEdit) {
        cardFieldsElementsToEdit = createEmployee();
    }
    updateCardFieldsByInputs(cardFieldsElementsToEdit);
    cardFieldsElementsToEdit = null;
    modal.classList.toggle('active');
});

function updateCardFieldsByInputs(cardFields) {
    const inputName = document.querySelector("[name='name']")
    cardFields.name.textContent = inputName.value;
    inputName.value = "";
    
    const inputRole = document.querySelector("[name='role']");
    cardFields.role.textContent = inputRole.value;
    inputRole.value = "";
    
    const inputContact = document.querySelector("[name='contact']");
    cardFields.contact.textContent = inputContact.value;
    inputContact.value = "";
}


function createEmployee() {
    const newEmployee = document.createElement('div');
    const cardName = document.createElement('div');
    const cardRole = document.createElement('div');
    const cardContact = document.createElement('div');

    cardName.classList.add("name");
    cardRole.classList.add("role");
    cardContact.classList.add("contact");

    newEmployee.classList.add('card');
    gridEmpl.appendChild(newEmployee);
    newEmployee.appendChild(cardName);
    newEmployee.appendChild(cardRole);
    newEmployee.appendChild(cardContact);

    return { name: cardName, role: cardRole, contact: cardContact };
};