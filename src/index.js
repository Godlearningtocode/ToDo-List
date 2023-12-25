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


//header logo in header section
const headerLogo = document.querySelector('.logo');
headerLogo.src = logoImage;

//array for storing form data
let tasksArray = [];

//EVENTLISTENERS:-
//1. click listener for addtask for form input
addTaskButton.addEventListener('click', () => {
    addTask();
})

//2. click event listener for addbutton on form for addtask
document.body.addEventListener('click', (event) => {
    if(event.target.id == 'addButton') {
        const titleValue = document.querySelector('#title').value;
        const descriptionValue = document.querySelector('#description').value;
        const deadlineValue = document.querySelector('#deadline').value;

        const task = {titleValue, descriptionValue, deadlineValue};
        tasksArray.push(task);

        taskContent.removeChild(taskContent.lastChild);
        appendTask(task);
        event.preventDefault();
    }
});

//3. click event listener for today section
todayButton.addEventListener('click', () => {
    todayPage()
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