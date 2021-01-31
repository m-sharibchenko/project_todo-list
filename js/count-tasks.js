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
    const number = currentTasksArray.reduce((acc, value) => {
        if (value.status === 'current') {
            acc[0] += 1;
        }
        else {
            if (value.status === 'complete') {
                acc[1] += 1;
            }
            else {
                acc[2] += 1;
            }
        }

        return acc

    }, [0, 0, 0]);

    countCurrentTasks.textContent = number[0];
    countCompletedTasks.textContent = number[1];
    countDelTasks.textContent = number[2];
}

