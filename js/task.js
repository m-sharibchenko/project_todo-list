import {completeTask, deleteTask, recoverTask} from "./manage-tasks.js";
import {addDataInForm} from "./edit-task.js";
import {countTasks} from "./count-tasks.js";

const templateContent = document.getElementById('template__table-content').content;
const taskContent = templateContent.querySelector('.table-body__task');

function createTask({title, description, priority}) {
    const newTask = taskContent.cloneNode(true);

    const btnDone = newTask.querySelector('.btn-done');
    btnDone.addEventListener('click', completeTask);

    const btnRecoverTask = newTask.querySelector('.btn-recover');
    btnRecoverTask.addEventListener('click', recoverTask);

    const taskName = newTask.querySelector('.task__title');
    taskName.textContent = title;

    const taskDescription = newTask.querySelector('.task__description');
    taskDescription.textContent = description;

    const btnShowDescription = newTask.querySelector('.btn-description');
    btnShowDescription.textContent = 'Описание';

    if (description) {
        btnShowDescription.classList.remove('hide');
    }

    btnShowDescription.addEventListener('click', () => {
        taskDescription.classList.toggle('hide');

        if (btnShowDescription.textContent === 'Описание') {
            btnShowDescription.textContent = 'Скрыть';
        } else {
            btnShowDescription.textContent = 'Описание';
        }
    });

    const taskPriority = newTask.querySelector('.task__priority');
    taskPriority.textContent = priority;

    // const manageColumn = newTask.querySelector('.task__management');
    const btnEditTask = newTask.querySelector('.task__btn-edit');
    const btnDeleteTask = newTask.querySelector('.task__btn-delete');

    btnDeleteTask.addEventListener('click', deleteTask);
    btnEditTask.addEventListener('click', addDataInForm);

    return newTask;
}

function addTask(task, table) {
    const newTask = createTask(task);

    table.append(newTask);
    countTasks();
}

export {createTask, addTask};