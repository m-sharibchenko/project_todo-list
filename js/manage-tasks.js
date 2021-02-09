import {findTaskByID, changeStatus, getValueOfTask} from "./subsidary-function.js";
import {countTasks} from "./count-tasks.js";
import {tasksArray} from "./local-storage.js";
import {stateBtnInDeletedTable, stateBtnInCurrentTable, stateBtnInCompletedTable} from "./btn-state.js";
import {btnAddTaskChanges, btnCreateTask, modal} from "./modal-window.js";
import {description, radio, title} from "./form.js";

const currentTasksTable = document.querySelector('.table-current-tasks .table-body');
const completedTasksTable = document.querySelector('.table-completed-tasks .table-body');
const deletedTasksTable = document.querySelector('.table-deleted-tasks .table-body');

function completeTask(evt) {
    const tr = evt.target.closest('tr');

    changeStatus(tr, 'completed');
    completedTasksTable.prepend(tr);
    stateBtnInCompletedTable();
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
        changeStatus(tr, 'deleted');
        deletedTasksTable.prepend(tr);
        stateBtnInDeletedTable();
        countTasks();
    }
}

function recoverTask(evt) {
    const tr = evt.target.closest('tr');

    changeStatus(tr, 'current');
    currentTasksTable.prepend(tr);
    stateBtnInCurrentTable();
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
    const btnShowDescription = selectedRow.querySelector('.btn-description');

    task.title = title;
    task.description = description;
    task.priority = priority;

    if (task.description !== "") {
        btnShowDescription.classList.remove('hide');
    }
    else {
        btnShowDescription.classList.add('hide');
    }

    const titleElement = selectedRow.querySelector('.task__title');
    const descriptionElement = selectedRow.querySelector('.task__description');
    const radioElement = selectedRow.querySelector('.task__priority');

    titleElement.textContent = title;
    descriptionElement.textContent = description;
    radioElement.textContent = priority;
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






