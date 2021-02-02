import {tasksArray} from "./local-storage.js";

const countCurrentTasks = document.querySelector('.current-tasks-count');
countCurrentTasks.textContent = '0';
const countCompletedTasks = document.querySelector('.completed-tasks-count');
countCompletedTasks.textContent = '0';
const countDelTasks = document.querySelector('.deleted-tasks-count');
countDelTasks.textContent = '0';

function countTasks() {
    const number = tasksArray.reduce((acc, value) => {
        if (value.status === 'current') {
            acc[0] += 1;
        }
        else {
            if (value.status === 'completed') {
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

export {countTasks};
