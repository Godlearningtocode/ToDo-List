//5. function to add edit box under the task for edit click event
export function editBox(event) {
    const editBoxContainer = ((event.target.parentNode).parentNode).parentNode;
    editBoxContainer.classList.add('editBox');

    const editForm = document.createElement('form');
    editForm.classList.add('editForm');

    const titleContainer = document.createElement('div');
    titleContainer.classList.add('titleContainer');
    const editTitle = document.createElement('label');
    editTitle.htmlFor = 'editTitle';
    editTitle.classList.add('editTitle');
    editTitle.innerText = 'Title:';
    const titleInput = document.createElement('input');
    titleInput.name = 'editTitle';
    titleInput.id = 'editTitle';
    titleInput.type = 'text';
    titleInput.required = true;

    const descriptionContainer = document.createElement('div');
    descriptionContainer.classList.add('descriptionContainer');
    const editDescription = document.createElement('label');
    editDescription.htmlFor = 'editDescription';
    editDescription.classList.add('editDescription');
    editDescription.innerText = 'Description:';
    const descriptionInput = document.createElement('input');
    descriptionInput.name = 'editDescription';
    descriptionInput.id = 'editDescription';
    descriptionInput.type = 'text';

    const deadlineContainer = document.createElement('div');
    deadlineContainer.classList.add('deadlineContainer');
    const editDeadline = document.createElement('label');
    editDeadline.htmlFor = 'editDeadline';
    editDeadline.classList.add('editDeadline');
    editDeadline.innerText = 'Deadline:';
    const deadlineInput = document.createElement('input');
    deadlineInput.name = 'editDeadline';
    deadlineInput.id = 'editDeadline';
    deadlineInput.type = 'date';
    deadlineInput.required = true;

    const formButtons = document.createElement('div');
    formButtons.classList.add('formButtons');
    const addButton = document.createElement('button');
    addButton.type = 'button';
    addButton.id = 'editAddButton';
    addButton.innerText = 'Add'
    const cancelButton = document.createElement('button');
    cancelButton.type = 'button';
    cancelButton.id = 'editCancelButton';
    cancelButton.innerText = 'Cancel';

    formButtons.appendChild(addButton);
    formButtons.appendChild(cancelButton);

    titleContainer.appendChild(editTitle);
    titleContainer.appendChild(titleInput);

    descriptionContainer.appendChild(editDescription);
    descriptionContainer.appendChild(descriptionInput);

    deadlineContainer.appendChild(editDeadline);
    deadlineContainer.appendChild(deadlineInput);

    editForm.appendChild(titleContainer);
    editForm.appendChild(descriptionContainer);
    editForm.appendChild(deadlineInput);
    editForm.appendChild(formButtons);

    editBoxContainer.appendChild(editForm);
}

//6. add editBox input values to task.
export function editValue() {
    const editContainer = document.querySelector('.editContainer');
    const title = editContainer.firstChild.firstChild.nextSibling.firstChild;
    const description = title.nextSibling;
    const date = editContainer.firstChild.nextSibling.firstChild;
    const titleValue = document.querySelector('#editTitle').value;
    const descriptionValue = document.querySelector('#editDescription').value;
    const dateValue = document.querySelector('#editDeadline').value;
    title.innerText = titleValue;
    description.innerText = descriptionValue;
    date.innerText = dateValue;
}

//7. functio to remove editBox when editCancelButton is clicked
export function removeFormBox(event) {
    const taskCardSection = document.querySelector('.taskCardSection');
    taskCardSection.removeChild(taskCardSection.lastChild)
}

//8. function to remove pre edit values from tasksarray
export function removeValue(tasksArray) {
    const editContainer = document.querySelector('.editContainer');
    const removeTitle = editContainer.firstChild.firstChild.nextSibling.firstChild;
    console.log(removeTitle.innerText)
;    for(let i = 0; i < tasksArray.length; i++) {
        if(removeTitle.innerText === tasksArray[i].titleValue) {
            tasksArray.splice(i, 1);
        }
    }
}

//9. fucntion to add new values to tasksarray after editAddButton is clicked 
export function addEditValues(tasksArray) {
    const titleValue = document.querySelector('#editTitle').value;
    const descriptionValue = document.querySelector('#editDescription').value;
    const deadlineValue = document.querySelector('#editDeadline').value;

    const task = {titleValue,descriptionValue,deadlineValue};
    tasksArray.push(task);
}