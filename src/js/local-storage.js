import {addTask} from "./task.js";

let tasksArray = JSON.parse(localStorage.getItem("tasks") ?? '[]');

window.onbeforeunload = () => {
    localStorage.setItem("tasks", JSON.stringify(tasksArray));
}

window.onload = () => {
    tasksArray.forEach(item => addTask(item));
    console.log(localStorage);
}

export {tasksArray}