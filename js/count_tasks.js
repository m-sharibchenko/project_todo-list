const currentTasksTable = document.querySelector('.table-current-tasks .table-body');
const completedTasksTable = document.querySelector('.table-completed-tasks .table-body');
const deletedTasksTable = document.querySelector('.table-deleted-tasks .table-body');

const countCurrentTasks = document.querySelector('.current-tasks-count');
countCurrentTasks.textContent = '0';
const countCompletedTasks = document.querySelector('.completed-tasks-count');
countCompletedTasks.textContent = '0';
const countDelTasks = document.querySelector('.deleted-tasks-count');
countDelTasks.textContent = '0';

function countTasks() {
    countCurrentTasks.textContent = `${currentTasksTable.rows.length}`;
    countCompletedTasks.textContent = `${completedTasksTable.rows.length}`;
    countDelTasks.textContent = `${deletedTasksTable.rows.length}`;
}