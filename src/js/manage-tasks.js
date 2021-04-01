import {findTaskByID, changeTaskStatus, getValueOfTask} from "./subsidary-function.js";
import {countTasks} from "./count-tasks.js";
import {tasksArray} from "./local-storage.js";
import {btnAddTaskChanges, btnCreateTask, modal} from "./modal-window.js";
import {description, radio, title} from "./form.js";

const currentTasksTable = document.querySelector('.table-current-tasks .table-body');
const completedTasksTable = document.querySelector('.table-completed-tasks .table-body');
const deletedTasksTable = document.querySelector('.table-deleted-tasks .table-body');

function completeTask(evt) {
    const tr = evt.target.closest('tr');

    changeTaskStatus(tr, 'completed');
    completedTasksTable.prepend(tr);
    tr.querySelector('.btn-done').classList.add('checked');
    tr.querySelector('.btn-done').classList.remove('hide');
    tr.querySelector('.btn-recover').classList.add('hide');
    countTasks();
}

function deleteTask(evt) {
    const tr = evt.target.closest('tr');
    const task = findTaskByID(tr);
    const taskIndex = tasksArray.findIndex(item => item === task);

    if (task.status === 'deleted') {
        tr.remove();
        tasksArray.splice(taskIndex, 1);
        countTasks();
    }
    else{
        changeTaskStatus(tr, 'deleted');
        deletedTasksTable.prepend(tr);
        tr.querySelector('.btn-done').classList.add('hide');
        tr.querySelector('.btn-recover').classList.remove('hide');
        countTasks();
    }
}

function recoverTask(evt) {
    const tr = evt.target.closest('tr');

    changeTaskStatus(tr, 'current');
    currentTasksTable.prepend(tr);
    tr.querySelector('.btn-recover').classList.add('hide');
    tr.querySelector('.btn-done').classList.remove('checked', 'hide');
    countTasks();
}

let selectedRow;

function addDataInForm(evt) {
    btnCreateTask.classList.add('hide');
    btnAddTaskChanges.classList.remove('hide');

    selectedRow = evt.target.closest('tr');
    const [titleValue, descriptionValue, radioValue] = getValueOfTask(selectedRow);

    title.value = titleValue;
    description.value = descriptionValue;
    [...radio].forEach(el => {
        if (el.value === radioValue) {
            el.checked = true;
        }
    });

    modal.showModal();
}

function updateTask({title, description, priority}) {
    const task = findTaskByID(selectedRow);

    task.title = title;
    task.description = description;
    task.priority = priority;

    const titleElement = selectedRow.querySelector('.task__title');
    const descriptionElement = selectedRow.querySelector('.task__description');
    const radioElement = selectedRow.querySelector('.task__priority');

    titleElement.textContent = title;
    descriptionElement.textContent = description;
    radioElement.textContent = priority;

    const btnShowDescription = selectedRow.querySelector('.btn-description');

    if (task.description !== "") {
        btnShowDescription.classList.remove('hide');
    }
    else {
        btnShowDescription.classList.add('hide');
    }
}

export {
    addDataInForm,
    updateTask,
    completeTask,
    deleteTask,
    recoverTask,
    currentTasksTable,
    completedTasksTable,
    deletedTasksTable
};






