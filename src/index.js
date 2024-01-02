//importing assets
import './styles.css';
import logoImage from './todo.png'
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
import { removeFormBox } from './editTask.js';
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
import { projectOnLoad } from './appendProject.js';

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
let retrievedTasksArray = [];
let arrProjectlists = ['All Tasks', 'Today', 'This Week', 'Important']
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
        console.log(tasksArray);
        const titleValue = document.querySelector('#title').value;
        const descriptionValue = document.querySelector('#description').value;
        const deadlineValue = document.querySelector('#deadline').value;
        const importantValue = document.querySelector('#importance').value;
        const projectValue = document.querySelector('#projectInput').value;

        const task = {titleValue, descriptionValue, deadlineValue, importantValue, projectValue};
        const form = document.querySelector('.form');
        if(form.checkValidity()) {
            tasksArray.push(task);
            console.log(tasksArray);
            taskContent.removeChild(taskContent.lastChild);
            appendTask(task);
            tasksLocalStorage();
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
    activeBox(event);
})

//5. click event for removing task with checked div from dom and tasksArray
document.body.addEventListener('click', (event) => {
    if (event.target.classList.contains('checkbox') == true) {
        event.target.classList.add('checked');
        removeTaskArray(tasksArray);
        checkedTask();
        tasksLocalStorage()
    }
})

//6. click event for delete icon on task.
document.body.addEventListener('click', (event) => {
    if(event.target.classList.contains('delete') == true) {
        (event.target.parentNode).parentNode.classList.add('deleted');
        removeTaskArray(tasksArray);
        deleteTask();
        tasksLocalStorage();
    }
})

//7. click event for edit icon
document.body.addEventListener('click', (event) => {
    if(event.target.classList.contains('edit') === true) {
        if(!isFormPresent) {
            editBox(event);
            const editContainer = event.target.parentNode.parentNode
            editContainer.classList.add('editContainer');
            isFormPresent = true;
        }
    }
})

//8. click event for editBox addButton
document.body.addEventListener('click', (event) => {
    if(event.target.id == 'editAddButton') {
        const editForm = document.querySelector('.editForm');
        if(editForm.checkValidity()) {
            removeValue(tasksArray);
            addEditValues(tasksArray);
            editValue();
            tasksLocalStorage();
            removeFormBox();
            isFormPresent = false;
        } else {
            alert ("Please fill all the required details!");
        }
    }
})

//9. click event for important icon to change empty star to filled star and add task values to importantTasks array.
document.body.addEventListener('click', (event) => {
    if(event.target.classList.contains('star') == true) {
        addImportantTasks(tasksArray);
        changeStar();
        tasksLocalStorage()
    } else if(event.target.classList.contains('filledStar') == true) {
        removeImportantTasks(tasksArray);
        changeFilledStar();
        tasksLocalStorage();
        if(taskContent.id == 'importantTab'){
            importantPage(tasksArray, appendTask);
        }
    }
})

//10. click event for this week tab
document.body.addEventListener('click', (event) => {
    if(event.target.id == 'thisWeek') {
        thisWeekPage(tasksArray, appendTask, todayDate);
        activeBox(event);
    }
})

//11. click event for impotant tab
document.body.addEventListener('click', (event) => {
    if(event.target.id == 'important') {
        importantPage(tasksArray, appendTask);
        activeBox(event);
    }
})

//12. click event for all tasks page
allTasksButton.addEventListener('click', () => {
    allTasks(tasksArray);
    activeBox(event);
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
            projectLocalStorage();
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
        deleteProject(projectsArray, event);
        projectLocalStorage();
    }
})

//17. click event for project lists tab for switching display to respective tab
document.body.addEventListener('click', (event) => {
    if(event.target.classList.contains('projectTitle') === true) {
        projectTab(event, projectsArray);
        appendProjectTasks(tasksArray, event, appendTask);
        activeBoxProject(event);
    }
})

//18. Final click event for when the page loads. display any existing tasks and projects in local storage on the screen
window.addEventListener('load', (tasksArray) => {
    const allTasksButton = document.querySelector('#allTasks');
    allTasksButton.classList.add('activeBox');
    allTasks(tasksArray);
    onLoadTasks(tasksArray);

})

//19. click event to remove editForm when editCancelButton is clicked
document.body.addEventListener('click', (event) => {
    if(event.target.id === 'editCancelButton') {
        removeFormBox(event)
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
    addTask.innerText = '+ Add Task';

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

//2. function for adding css to active tab on sidebar 
function activeBox(event) {
    const activeBox = document.querySelector('.activeBox')
    if(activeBox !== null) {
        activeBox.classList.remove('activeBox');
    }
    event.target.classList.add('activeBox');
}

//3. function for adding css to active tab on sidebar 
function activeBoxProject(event) {
    const activeBox = document.querySelector('.activeBox')
    if(activeBox !== null) {
        activeBox.classList.remove('activeBox');
    }
    event.target.parentNode.classList.add('activeBox');
}

//4. function for accesing localStorage to store arrays for appending tasks when page loads and for saving tasks when new tasks are added to the array. as well as for storing projects.
function tasksLocalStorage() {
    localStorage.setItem('tasksArr', JSON.stringify(tasksArray));
}

//5. function for project storage
function projectLocalStorage() {
    localStorage.setItem('projectArr', JSON.stringify(projectsArray))
}

//6. function to retrieve tasks from storage
function onLoadTasks() {
    tasksArray = JSON.parse(localStorage.getItem('tasksArr'));
    for(let i = 0; i < tasksArray.length; i++) {
        let task = {
            titleValue: tasksArray[i].titleValue,
            descriptionValue: tasksArray[i].descriptionValue,
            deadlineValue: tasksArray[i].deadlineValue,
            importantValue: tasksArray[i].importantValue
        }
        appendTask(task);
    }

    projectsArray = JSON.parse(localStorage.getItem('projectArr'));
    for(let i = 0; i < projectsArray.length; i++) {
        let project = {
            projectTitle: projectsArray[i].projectTitle
        }
        projectOnLoad(project);
    }
}