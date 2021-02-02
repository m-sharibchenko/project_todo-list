import {modal, form} from './modal-window.js';
import {addTask} from "./task.js";
import {countTasks} from "./count-tasks.js";
import {currentTasksTable} from "./tab-content.js";
import {tasksArray} from "./local-storage.js";

const title = document.getElementById('title');
const description = document.getElementById('description');
const radio = form.querySelectorAll('.form__btn-priority');
let priority;

form.addEventListener('submit', function (evt) {
    evt.preventDefault();

    priority = [...radio].find(radio => radio.checked);

    const task = {
        title: title.value,
        description: description.value,
        priority: priority.value,
        status: 'current'
    };

    addTask(task, currentTasksTable);
    tasksArray.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasksArray));
    console.log(localStorage);
    countTasks();
    modal.close();
});

export {title, description, radio, priority};