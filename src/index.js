//importing assets
import './styles.css';
import logoImage from './double-tick.png'
import starImage from './star_icon.png';
import filledStarImage from './filled_star.png';
import editImage from './edit_icon.png';
import deleteImage from './delete_icon.png';
import addTask from './addTask.js';
import appendTask from './appendTask.js';
import {checkedTask} from './checkbox.js';
import {removeTaskArray} from './checkbox.js';
import deleteTask from './deleteTask.js';
import { editBox } from './editTask.js';
import { editValue } from './editTask.js';
import { removeEditBox } from './editTask.js';
import { removeValue } from './editTask.js';
import { addEditValues } from './editTask.js';
import { changeStar } from './importantTasks.js';
import { addImportantTasks } from './importantTasks.js';
import { changeFilledStar } from './importantTasks.js';
import { removeImportantTasks } from './importantTasks.js';

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
let importantTasksArray = [];


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
        removeTaskArray(tasksArray);
        checkedTask();
    }
})

//6. click event for delete icon on task.
document.body.addEventListener('click', (event) => {
    if(event.target.classList.contains('delete') == true) {
        (event.target.parentNode).parentNode.classList.add('deleted');
        removeTaskArray(tasksArray);
        deleteTask();
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
        removeValue(tasksArray);
        addEditValues(tasksArray);
        editValue();
        removeEditBox();
    }
})

//9. click event for important icon to change empty star to filled star and add task values to importantTasks array.
document.body.addEventListener('click', (event) => {
    if(event.target.classList.contains('star') == true) {
        addImportantTasks(importantTasksArray);
        changeStar();
    } else if(event.target.classList.contains('filledStar') == true) {
        removeImportantTasks(importantTasksArray);
        changeFilledStar();
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