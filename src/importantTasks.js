import logoImage from './double-tick.png'
import starImage from './star_icon.png';
import filledStarImage from './filled_star.png';
import editImage from './edit_icon.png';
import deleteImage from './delete_icon.png';

// function to change importnt icon to filled 
export function changeStar() {
    const star = document.querySelector('.star');
    if(star.src = starImage) {
        star.src = filledStarImage;
        star.classList.add('filledStar');
        star.classList.remove('star');
    }
}

// function to add values to importantTasks array
export function addImportantTasks(tasksArray) {
    const star = document.querySelector('.star');
    star.parentElement.parentElement.classList.add('important');
    const important = document.querySelector('.important');
    const titleValue = important.firstChild.firstChild.nextSibling.firstChild.innerText;

    for(let i = 0; i < tasksArray.length; i++) {
        if(tasksArray[i].titleValue == titleValue) {
            tasksArray[i].importantValue = 'yes'
        }
    }
}

// function to change importnt filled icon to non filled icon and remove important class from parents parent node
export function changeFilledStar() {
    const filledStar = document.querySelector('.filledStar');
    filledStar.parentElement.parentElement.classList.remove('important');
    if(filledStar.src = filledStarImage){
        filledStar.src = starImage;
        filledStar.classList.add('star');
        filledStar.classList.remove('filledStar');
    }
}

// remove task from importantTaskArray
export function removeImportantTasks(tasksArray) {
    const importantTaskCard = document.querySelector('.important');
    const removeImportantTitle = importantTaskCard.firstChild.firstChild.nextSibling.firstChild.innerText;
    for(let i = 0; i < tasksArray.length; i++) {
        if(removeImportantTitle == tasksArray[i].titleValue) {
            tasksArray[i].importantValue = 'no';
        }
    }
}