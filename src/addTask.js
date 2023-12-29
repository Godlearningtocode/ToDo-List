export default function addTask() {
    const taskContent = document.querySelector('.taskContent');
    const form = document.createElement('form');
    form.classList.add('form');
    const titleLabel = document.createElement('label');
    titleLabel.htmlFor = 'title';
    titleLabel.classList.add('title');
    titleLabel.innerText = 'Title:';
    const titleInput = document.createElement('input');
    titleInput.name = 'title';
    titleInput.id = 'title';
    titleInput.type = 'text';
    titleInput.required = true;
    const descriptionLabel = document.createElement('label');
    descriptionLabel.htmlFor = 'description';
    descriptionLabel.classList.add('description');
    descriptionLabel.innerText = 'Description:';
    const descriptionInput = document.createElement('input');
    descriptionInput.name = 'description';
    descriptionInput.id = 'description';
    descriptionInput.type = 'text';
    const deadlineLabel = document.createElement('label');
    deadlineLabel.htmlFor = 'deadline';
    deadlineLabel.classList.add('deadline');
    deadlineLabel.innerText = 'Deadline:';
    const deadlineInput = document.createElement('input');
    deadlineInput.name = 'deadline';
    deadlineInput.id = 'deadline';
    deadlineInput.type = 'date';
    deadlineInput.required = true;
    const importanceLabel = document.createElement('label');
    importanceLabel.htmlFor = 'importance';
    importanceLabel.classList.add('importance');
    importanceLabel.innerText = 'Important:';
    const importanceInput = document.createElement('SELECT');
    importanceInput.id = 'importance';
    const importanceYes = document.createElement('option');
    importanceYes.value = 'yes';
    importanceYes.innerText = 'Yes';
    const importanceNo = document.createElement('option');
    importanceNo.value = 'no';
    importanceNo.innerText = 'No'
    const formButtons = document.createElement('div');
    formButtons.classList.add('formButtons');
    const addButton = document.createElement('button');
    addButton.type = 'button';
    addButton.id = 'addButton';
    addButton.innerText = 'Add'
    const cancelButton = document.createElement('button');
    cancelButton.type = 'button';
    cancelButton.id = 'cancelButton';
    cancelButton.innerText = 'Cancel';

    importanceInput.appendChild(importanceYes);
    importanceInput.appendChild(importanceNo);

    formButtons.appendChild(addButton);
    formButtons.appendChild(cancelButton);

    form.appendChild(titleLabel);
    form.appendChild(titleInput);
    form.appendChild(descriptionLabel);
    form.appendChild(descriptionInput);
    form.appendChild(deadlineLabel);
    form.appendChild(deadlineInput);
    form.appendChild(importanceLabel);
    form.appendChild(importanceInput);
    form.appendChild(formButtons);

    taskContent.appendChild(form);
}