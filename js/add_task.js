const task = form.querySelector('#task');
const description = form.querySelector('#description');
const radio = form.querySelectorAll('.form__btn-priority');
let priority;

const template = document.getElementById('template__table-content').content;
const node = template.querySelector('.table-body__task');

let currentTasksArray = localStorage.getItem("currentTasks") ?
    JSON.parse(localStorage.getItem("currentTasks")) : [];

currentTasksArray.forEach(item => addData(item.task, item.description, item.priority));

function addData(task, description, prior) {
    const newTask = node.cloneNode(true);

    const btnDone = newTask.querySelector('.btn-done');
    btnDone.addEventListener('click', completeTask);

    const taskName = newTask.querySelector('.title');
    taskName.textContent = task;

    const btnShowDescription = newTask.querySelector('.btn-description');
    btnShowDescription.textContent = 'Описание';

    const taskDescription = newTask.querySelector('.description');
    taskDescription.textContent = description;

    if (description) {
        btnShowDescription.classList.remove('hide');
        btnShowDescription.addEventListener('click', () => {
            taskDescription.classList.toggle('hide');
            if (btnShowDescription.textContent === 'Описание') {
                btnShowDescription.textContent = 'Скрыть'
            } else {
                btnShowDescription.textContent = 'Описание'
            }
        })
    }

    const taskPriority = newTask.querySelector('.priority');
    taskPriority.textContent = prior;

    // const manageColumn = newTask.querySelector('.task__management');
    const btnEditTask = newTask.querySelector('.btn-edit-task');
    const btnRecoverTask = newTask.querySelector('.btn-recover-task');
    const btnDeleteTask = newTask.querySelector('.btn-delete-task');

    btnDeleteTask.addEventListener('click', deleteTask);
    btnEditTask.addEventListener('click', editTask);
    btnRecoverTask.addEventListener('click', recoverTask);

    currentTasksTable.append(newTask);

    countTasks();
}

form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    priority = [...radio].find(radio => radio.checked)
    addData(task.value, description.value, priority.value);
    currentTasksArray.push({task: task.value, description: description.value, priority: priority.value});
    localStorage.setItem("currentTasks", JSON.stringify(currentTasksArray));
    console.log(localStorage);
    modal.close();
})