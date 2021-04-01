import {tasksArray} from "./local-storage.js";

function findTaskByID(tr) {
    const id = tr.getAttribute('data-id');
    return tasksArray.find(item => item.id.toString() === id);
}

function getValueOfTask(tr) {
    const task = findTaskByID(tr);
    const titleValue = task.title;
    const descriptionValue = task.description;
    const radioValue = task.priority;

    return [titleValue, descriptionValue, radioValue];
}

function changeTaskStatus(tr, status) {
    const task = findTaskByID(tr);
    task.status = status;
}


export {findTaskByID, getValueOfTask, changeTaskStatus};