//1. function for display of dom tree of today page
export function todayPage(tasksArray, appendTask) {
    const taskContent = document.querySelector('.taskContent');
    while(taskContent.firstChild) {
        taskContent.removeChild(taskContent.firstChild);
    }
    const header = document.createElement('div');
    header.classList.add('header');
    header.innerText = 'Today';
    taskContent.appendChild(header);
    const taskCardSection = document.createElement('div');
    taskCardSection.classList.add('taskCardSection');
    taskContent.appendChild(taskCardSection);
    for(let i = 0; i < tasksArray.length; i++) {
        if(tasksArray[i].deadlineValue == todayDate().currentDate){
            let task = {
                titleValue: tasksArray[i].titleValue,
                descriptionValue: tasksArray[i].descriptionValue,
                deadlineValue: tasksArray[i].deadlineValue,
                importantValue: tasksArray[i].importantValue,
            }
            appendTask(task);
        }
    }
}

//2. function to get todays date
export function todayDate() {
    const taskContent = document.querySelector('.taskContent');
    taskContent.id = 'todayTab';
    const date = new Date();
    
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let currentDate = `${year}-${month}-${day}`;
    return { currentDate };
}