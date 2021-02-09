import {modal, form, btnAddTaskChanges, btnCreateTask} from './modal-window.js';
import {addTask} from "./task.js";
import {countTasks} from "./count-tasks.js";
import {updateTask} from "./manage-tasks.js";
import {tasksArray} from "./local-storage.js";

const title = document.getElementById('title');
const description = document.getElementById('description');
const radio = form.querySelectorAll('.form__btn-priority');
let priority;

form.addEventListener('submit', function (evt) {
    evt.preventDefault();

    priority = [...radio].find(radio => radio.checked);

    const task = {
        id: Math.random(),
        title: title.value,
        description: description.value,
        priority: priority.value,
        status: 'current'
    };

    tasksArray.push(task);
    addTask(task);
    countTasks();
    modal.close();
});

btnAddTaskChanges.addEventListener('click', (evt) => {
    evt.preventDefault();

    const priority = [...radio].find(radio => radio.checked);

    const task = {
        title: title.value,
        description: description.value,
        priority: priority.value,
    };

    updateTask(task);
    modal.close();
    btnAddTaskChanges.classList.add('hide');
    btnCreateTask.classList.remove('hide');
});

export {title, description, radio, priority};