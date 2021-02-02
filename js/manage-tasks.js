import {currentTasksTable, completedTasksTable, deletedTasksTable} from "./tab-content.js";
import {changeStatus, deleteFromArray} from "./subsidary-function.js";
import {countTasks} from "./count-tasks.js";
import {tasksArray} from "./local-storage.js";

function completeTask(evt) {
    const tr = evt.target.closest('tr');

    changeStatus(evt, tr, 'completed');
    localStorage.setItem("tasks", JSON.stringify(tasksArray));
    completedTasksTable.prepend(tr);
    evt.currentTarget.classList.add('btn-done-checked');
    countTasks();
}

function deleteTask(evt) {
    const tr = evt.target.closest('tr');

    if (tr.parentElement === deletedTasksTable) {
        tr.remove();
        deleteFromArray(evt, tr);
        localStorage.setItem("tasks", JSON.stringify(tasksArray));
        countTasks();
    }
    else{
        changeStatus(evt, tr, 'deleted');
        localStorage.setItem("tasks", JSON.stringify(tasksArray));
        deletedTasksTable.prepend(tr);
        tr.querySelector('.btn-done').classList.add("hide");
        tr.querySelector('.btn-recover').classList.remove("hide");
        countTasks();
    }
}

function recoverTask(evt) {
    const tr = evt.target.closest('tr');

    changeStatus(evt, tr, 'current');
    localStorage.setItem("tasks", JSON.stringify(tasksArray));
    currentTasksTable.prepend(tr);
    evt.currentTarget.classList.add("hide");
    tr.querySelector('.btn-done').classList.remove('btn-done-checked', 'hide');
    countTasks();
}

export {completeTask, deleteTask, recoverTask};






