// Remove tasks with checked class
export function checkedTask() {
    const checked = document.querySelector('.checked');
    (checked.parentElement).removeChild(checked);
}

// Remove the checked task from array of tasks.
export function removeTaskArray(tasksArray) {
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