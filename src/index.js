//importing assets
import './styles.css';
import logoImage from './double-tick.png'
import starImage from './star_icon.png';
import editImage from './edit_icon.png';
import deleteImage from './delete_icon.png';
import addTask from './addTask.js';
import appendTask from './appendTask.js';

//assigning var to dom elements
const taskContent = document.querySelector('.taskContent');
const taskCardSection = document.querySelector('.taskCardSection');
const addTaskButton = document.querySelector('.addTask');
const todayButton = document.querySelector('#today');
let isFormPresent = false;  


//header logo in header section
const headerLogo = document.querySelector('.logo');
headerLogo.src = logoImage;


//array for storing form data
let tasksArray = [];


//EVENTLISTENERS:-
//1. click listener for addtask for form input
addTaskButton.addEventListener('click', () => {
    if(!isFormPresent) {
        addTask();
        isFormPresent = true;
    }
})

//2. click event listener for addbutton on form for addtask
document.body.addEventListener('click', (event) => {
    if(event.target.id == 'addButton') {
        const titleValue = document.querySelector('#title').value;
        const descriptionValue = document.querySelector('#description').value;
        const deadlineValue = document.querySelector('#deadline').value;

        const task = {titleValue, descriptionValue, deadlineValue};
        const form = document.querySelector('form');
        if(form.checkValidity()) {
            tasksArray.push(task);
            taskContent.removeChild(taskContent.lastChild);
            appendTask(task);
        } else {
            alert ('Please fill all required fields!')
        }
        isFormPresent = false;
        event.preventDefault();
    }
});

//3. Click event for remove addtaskwindow
document.body.addEventListener('click', (event) => {
    if(event.target.id == 'cancelButton') {
        taskContent.removeChild(taskContent.lastChild);
    }
})

//4. click event listener for today section
todayButton.addEventListener('click', () => {
    todayPage()
})

//5. click event for removing task with checked div from dom and tasksArray
document.body.addEventListener('click', (event) => {
    if (event.target.classList.contains('checkbox') == true) {
        (event.target.parentNode).parentNode.classList.add('checked');
        removeTaskArray();
        checkedTask();
    }
})

//6. click event for delete icon on task.
document.body.addEventListener('click', (event) => {
    if(event.target.classList.contains('delete') == true) {
        console.log(tasksArray);
        (event.target.parentNode).parentNode.classList.add('deleted');
        removeTaskArray();
        deleteTask();
        console.log(tasksArray);
    }
})

//7. click event for edit icon
document.body.addEventListener('click', (event) => {
    if(event.target.classList.contains('edit') == true) {
        editBox();
    }
})

//8. click event for editBox addButton
document.body.addEventListener('click', (event) => {
    if(event.target.id == 'editAddButton') {
        console.log(true);
        editValue();
    }
})


//FUNCTIONS:-
//1. function for display of dom tree of today page
function todayPage() {
    while(taskContent.firstChild) {
        taskContent.removeChild(taskContent.firstChild);
    }
    const header = document.createElement('div');
    header.classList.add('header');
    header.innerText = 'Today';
    taskContent.appendChild(header);
}

//2. Remove tasks with checked class
function checkedTask() {
    const checked = document.querySelector('.checked');
    (checked.parentElement).removeChild(checked);
}

//3. Remove the checked task from array of tasks.
function removeTaskArray() {
    const checkedBox = document.querySelector('.checked');
    if(checkedBox) {
        const checkbox = document.querySelector('.checkbox');
        const removeTitle = checkbox.nextSibling.firstChild.innerText;
        for (let i = 0; i < tasksArray.length; i++) {
            if(tasksArray[i].titleValue == removeTitle) {
                tasksArray.splice(i, 1);
                break;
            }
        }
    } else {
        const deletedTask = document.querySelector('.deleted');
        if(deletedTask) {
            const checkbox = document.querySelector('.checkbox');
            const removeTitle = checkbox.nextSibling.firstChild.innerText;
            for (let i = 0; i < tasksArray.length; i++) {
                if(tasksArray[i].titleValue == removeTitle) {
                    tasksArray.splice(i, 1);
                    break;
                }
            }
        }
    }
}

//4. delete task from the dom tree.
function deleteTask() {
    const deletedTask = document.querySelector('.deleted');
    (deletedTask.parentElement).removeChild(deletedTask);
}

//5. function to add edit box under the task for edit click event
function editBox() {
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
function editValue() {
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
function removeEditBox() {
    const taskCard = document.querySelector('.editBox').firstChild.nextSibling;
    (taskCard.parentNode).removeChild(taskCard);
}