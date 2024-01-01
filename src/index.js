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
import { todayPage } from './today.js';
import { todayDate } from './today.js';
import { thisWeekPage } from './thisWeek.js';
import { oneWeekDate } from './thisWeek.js';
import { importantPage } from './importantPage.js'
import { addProjectWindow } from './appendProject.js';
import { appendProject } from './appendProject.js';
import { removeAddProject } from './appendProject.js';
import { cancelButtonProject } from './appendProject.js';
import { projectTab } from './appendProject.js';
import { appendProjectTasks } from './appendProject.js';
import { deleteProject } from './appendProject.js';

//assigning var to dom elements
const taskContent = document.querySelector('.taskContent');
const allTasksButton = document.querySelector('#allTasks');
const taskCardSection = document.querySelector('.taskCardSection');
const addTaskButton = document.querySelector('.addTask');
const todayButton = document.querySelector('#today');
const addProject = document.querySelector('.addProject');
let isFormPresent = false;
let isProjectFormPresent = false;


//header logo in header section
const headerLogo = document.querySelector('.logo');
headerLogo.src = logoImage;


//array for storing form data
let tasksArray = [];
let projectsArray = [];


//EVENTLISTENERS:-
//1. click listener for addtask for form input
document.body.addEventListener('click', (event) => {
    if(event.target.classList.contains('addTask') === true) {
        if(!isFormPresent) {
            addTask(projectsArray);
            isFormPresent = true;
        }
    }
})

//2. click event listener for addbutton on form for addtask
document.body.addEventListener('click', (event) => {
    if(event.target.id == 'addButton') {
        const titleValue = document.querySelector('#title').value;
        const descriptionValue = document.querySelector('#description').value;
        const deadlineValue = document.querySelector('#deadline').value;
        const importantValue = document.querySelector('#importance').value;
        const projectValue = document.querySelector('#projectInput').value;

        const task = {titleValue, descriptionValue, deadlineValue, importantValue, projectValue};
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
    todayPage(tasksArray, appendTask);
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
        addImportantTasks(tasksArray);
        changeStar();
    } else if(event.target.classList.contains('filledStar') == true) {
        removeImportantTasks(tasksArray);
        changeFilledStar();
        if(taskContent.id == 'importantTab'){
            importantPage(tasksArray, appendTask);
        }
    }
})

//10. click event for this week tab
document.body.addEventListener('click', (event) => {
    if(event.target.id == 'thisWeek') {
        thisWeekPage(tasksArray, appendTask, todayDate);
    }
})

//11. click event for impotant tab
document.body.addEventListener('click', (event) => {
    if(event.target.id == 'important') {
        importantPage(tasksArray, appendTask);
    }
})

//12. click event for all tasks page
allTasksButton.addEventListener('click', () => {
    allTasks();
})

//13. function for add project window for value input for new project
document.body.addEventListener('click', (event) => {
    if(event.target.classList.contains('addProject') === true) {
        if(!isProjectFormPresent) {
            addProjectWindow();
            isProjectFormPresent = true;
        }
    }
})

//14. function to append project to the projectList.
document.body.addEventListener('click', (event) => {
    if(event.target.classList.contains('addButtonProject') === true) {
        let projectTitle = document.querySelector('#projectValue');
        if(projectTitle.value.length >= 1) {
            let project = {projectTitle: projectTitle.value};
            projectsArray.push(project);
    
            appendProject();
            removeAddProject();
            isProjectFormPresent = false;
        } else {
            alert ('Please fill all required details.');
        }
    }
})

//15. click event for when cancelProjectButton is clicked
document.body.addEventListener('click', (event) => {
    if(event.target.classList.contains('cancelButtonProject') === true) {
        removeAddProject();
        isProjectFormPresent = false;
    }
})

//16. click event to delte a project from the list.
document.body.addEventListener('click', (event) => {
    if(event.target.classList.contains('projectDelete') === true) {
        deleteProject(projectsArray);
    }
})

//17. click event for project lists tab for switching display to respective tab
document.body.addEventListener('click', (event) => {
    if(event.target.classList.contains('projectTitle') === true) {
        projectTab(event, projectsArray);
        appendProjectTasks(tasksArray, event)
    }
})


//FUNCTIONS:-
//1. function for display of all tasks tab
function allTasks(tasksArray) {
    while(taskContent.firstChild){
        taskContent.removeChild(taskContent.firstChild);
    }
    const header = document.createElement('div');
    header.classList.add('header');
    header.innerText = 'All Tasks';
    const taskCardSection = document.createElement('div');
    taskCardSection.classList.add('taskCardSection');
    const addTask = document.createElement('div');
    addTask.classList.add('addTask');
    addTask.innerText = 'Add Task';

    taskContent.appendChild(header);
    taskContent.appendChild(taskCardSection);
    taskContent.appendChild(addTask);

    for(let i = 0; i < tasksArray.length; i++) {
        let task = {
            titleValue: tasksArray[i].titleValue,
            descriptionValue: tasksArray[i].descriptionValue,
            deadlineValue: tasksArray[i].deadlineValue,
            importantValue: tasksArray[i].importantValue
        }
        appendTask(task);
    }
}