import {tasksArray} from "./local-storage.js";

const countCurrentTasks = document.querySelector('.current-tasks-count');
countCurrentTasks.textContent = '0';
const countCompletedTasks = document.querySelector('.completed-tasks-count');
countCompletedTasks.textContent = '0';
const countDelTasks = document.querySelector('.deleted-tasks-count');
countDelTasks.textContent = '0';

function countTasks() {
    const TODOS = tasksArray.reduce((acc, value) => {
        switch (value.status) {
            case 'current':
                acc.current += 1;
                break;
            case 'completed':
                acc.completed += 1;
                break;
            case 'deleted':
                acc.deleted += 1;
                break;
        }
        return acc

    }, {
        current: 0,
        completed: 0,
        deleted: 0,
    });

    countCurrentTasks.textContent = TODOS.current;
    countCompletedTasks.textContent = TODOS.completed;
    countDelTasks.textContent = TODOS.deleted;
}

export {countTasks};
