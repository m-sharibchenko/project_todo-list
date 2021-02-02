import {addTask} from "./task.js";
import {completedTasksTable, currentTasksTable, deletedTasksTable} from "./tab-content.js";

let tasksArray = JSON.parse(localStorage.getItem("tasks") ?? '[]');

window.onload = () => {
    const current = tasksArray.filter(item => item.status === 'current');
    current.forEach(item => addTask(item, currentTasksTable));

    const deleted = tasksArray.filter(item => item.status === 'deleted');
    deleted.forEach(item => addTask(item, deletedTasksTable));
    const btnDoneDeleted = deletedTasksTable.querySelectorAll('.btn-done');
    btnDoneDeleted.forEach(item => item.classList.add('hide'));
    const btnRecover = deletedTasksTable.querySelectorAll('.btn-recover');
    btnRecover.forEach(item => item.classList.remove('hide'));

    const completed = tasksArray.filter(item => item.status === 'completed');
    completed.forEach(item => addTask(item, completedTasksTable));
    const btnDoneCompleted = completedTasksTable.querySelectorAll('.btn-done')
    btnDoneCompleted.forEach(item => item.classList.add('btn-done-checked'));
}

export {tasksArray};