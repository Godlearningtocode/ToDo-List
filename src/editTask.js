//5. function to add edit box under the task for edit click event
export function editBox() {
    const editBoxContainer = ((event.target.parentNode).parentNode).parentNode;
    editBoxContainer.classList.add('editBox');

    const editForm = document.createElement('form');
    editForm.classList.add('editForm');

    const editTitle = document.createElement('label');
    editTitle.htmlFor = 'editTitle';
    editTitle.classList.add('editTitle');
    editTitle.innerText = 'Title:';
    const titleInput = document.createElement('input');
    titleInput.name = 'editTitle';
    titleInput.id = 'editTitle';
    titleInput.type = 'text';
    titleInput.required = true;
    const editDescription = document.createElement('label');
    editDescription.htmlFor = 'editDescription';
    editDescription.classList.add('editDescription');
    editDescription.innerText = 'Description:';
    const descriptionInput = document.createElement('input');
    descriptionInput.name = 'editDescription';
    descriptionInput.id = 'editDescription';
    descriptionInput.type = 'text';
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

    editForm.appendChild(editTitle);
    editForm.appendChild(titleInput);
    editForm.appendChild(editDescription);
    editForm.appendChild(descriptionInput);
    editForm.appendChild(editDeadline);
    editForm.appendChild(deadlineInput);
    editForm.appendChild(formButtons);

    editBoxContainer.appendChild(editForm);
}

//6. add editBox input values to task.
export function editValue() {
    const title = ((document.querySelector('.editBox').firstChild).firstChild).firstChild.nextSibling.firstChild;
    const description = title.nextSibling;
    const date = document.querySelector('.editBox').firstChild.firstChild.nextSibling.firstChild;
    const titleValue = document.querySelector('#editTitle').value;
    const descriptionValue = document.querySelector('#editDescription').value;
    const dateValue = document.querySelector('#editDeadline').value;
    title.innerText = titleValue;
    description.innerText = descriptionValue;
    date.innerText = dateValue;
}

//7. functio to remove editBox when editAddButton is clicked
export function removeEditBox() {
    const taskCard = document.querySelector('.editBox').firstChild.nextSibling;
    (taskCard.parentNode).removeChild(taskCard);
}

//8. function to remove pre edit values from tasksarray
export function removeValue(tasksArray) {
    const taskCardSection = document.querySelector('.editBox');
    const removeTitle = taskCardSection.firstChild.firstChild.firstChild.nextSibling.firstChild.innerText;
    for(let i = 0; i < tasksArray.length; i++) {
        if(removeTitle == tasksArray[i].titleValue) {
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