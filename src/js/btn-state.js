import {completedTasksTable, currentTasksTable, deletedTasksTable} from "./manage-tasks.js";

function stateBtnInDeletedTable() {
    const btnDoneDeleted = deletedTasksTable.querySelectorAll('.btn-done');
    btnDoneDeleted.forEach(item => item.classList.add('hide'));

    const btnRecover = deletedTasksTable.querySelectorAll('.btn-recover');
    btnRecover.forEach(item => item.classList.remove('hide'));
}

function stateBtnInCompletedTable() {
    const btnDoneCompleted = completedTasksTable.querySelectorAll('.btn-done');
    btnDoneCompleted.forEach(item => {
        item.classList.add('checked');
        item.classList.remove('hide');
    });

    const btnRecover = completedTasksTable.querySelectorAll('.btn-recover');
    btnRecover.forEach(item => item.classList.add('hide'));
}

function stateBtnInCurrentTable() {
    const btnRecover = currentTasksTable.querySelectorAll('.btn-recover');
    btnRecover.forEach(item => item.classList.add('hide'));

    const btnDone = currentTasksTable.querySelectorAll('.btn-done');
    btnDone.forEach(item => item.classList.remove('checked', 'hide'));
}

export {stateBtnInCompletedTable, stateBtnInCurrentTable, stateBtnInDeletedTable}