// delete task from the dom tree.
export default function deleteTask() {
    const deletedTask = document.querySelector('.deleted');
    (deletedTask.parentElement).removeChild(deletedTask);
}