// Show tab content
const tabs = document.querySelectorAll('.tab');
const defaultTask = document.querySelector('.default-open');
const currentTasks = document.querySelector('.current-tasks');
const completedTasks = document.querySelector('.completed-tasks');
const deletedTasks = document.querySelector('.deleted-tasks');

function openTab(evt) {
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].className = tabs[i].className.replace("tab-active", "");
    }
    evt.currentTarget.className += " tab-active"
}

currentTasks.addEventListener('click', openTab);
completedTasks.addEventListener('click', openTab);
deletedTasks.addEventListener('click', openTab);

defaultTask.click();

// Count amount of tasks

const countCurTasks = document.querySelector('.current-tasks-count');
countCurTasks.textContent = '0';
const countCompletedTasks = document.querySelector('.completed-tasks-count');
countCompletedTasks.textContent = '0';
const countDelTasks = document.querySelector('.deleted-tasks-count');
countDelTasks.textContent = '0';

function countTasks() {
    countCurTasks.textContent = `${currentTasksTable.rows.length}`;
    countCompletedTasks.textContent = `${completedTasksTable.rows.length}`;
    countDelTasks.textContent = `${deletedTasksTable.rows.length}`;
}

// Show/close Modal Window

const btnOpenModal = document.querySelector('.tasks-create-btn');
const modal = document.querySelector('.modal-window');
btnOpenModal.addEventListener('click', function() {
    modal.showModal();
});
const form = modal.querySelector('[name = "form"]');
const btnCloseModal = form.querySelector('.form__btn-close');
btnCloseModal.addEventListener('click', function() {
    modal.close();
});

// Create task. Add task in current task table

const task = form.querySelector('#task');
const description = form.querySelector('#description');
const radio = form.querySelectorAll('.form__priority-btn');
let radioValue;
function findRadioValue () {
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            radioValue = radio[i];
        }
    }
    return radioValue.value;
}


const currentTasksTable = document.querySelector('.tab-content__current-tasks .table-body');
const completedTasksTable = document.querySelector('.tab-content__completed-tasks .table-body');
const deletedTasksTable = document.querySelector('.tab-content__deleted-tasks .table-body');

const template = document.getElementById('template__table-content').content;

function addData(task, description, priority) {
    const node = template.querySelector('.table-body__task');
    const newTask = node.cloneNode(true);
    const doneCol = newTask.querySelector('.table-body__task__done-btn');
    const taskInfoCol = newTask.querySelector('.table-body__task__info');
    const priorityCol = newTask.querySelector('.table-body__task__priority');
    const manageCol = newTask.querySelector('.table-body__task__management');

    const btnDone = document.createElement('input');
    btnDone.setAttribute('type', 'radio');
    doneCol.append(btnDone);

    const taskName = document.createElement('p');
    taskName.textContent = task.value;
    taskInfoCol.append(taskName);

    const taskDescription = document.createElement('p');
    taskDescription.textContent = description.value;
    taskDescription.className = 'table__description-hide';
    taskInfoCol.append(taskDescription);

    if (description.value) {
        const showDescription = document.createElement('button');
        showDescription.textContent = 'Описание';
        showDescription.className = 'table__description-btn';
        taskInfoCol.append(showDescription);

        showDescription.addEventListener('click', function () {
            taskDescription.classList.toggle("table__description-hide");
            taskDescription.classList.toggle("table__description-show");
            if (showDescription.textContent === 'Описание') {
                showDescription.textContent = 'Скрыть'
            }
            else {
                showDescription.textContent = 'Описание'
            }
        })
    }

    priorityCol.textContent = priority;

    const editTask = document.createElement('button');
    editTask.textContent = 'Редактировать';
    manageCol.append(editTask);

    const deleteTask = document.createElement('button');
    deleteTask.textContent = 'Удалить';
    manageCol.append(deleteTask);

    const recoverTask = document.createElement('button');
    recoverTask.textContent = 'Восстановить';

    currentTasksTable.append(newTask);

    countTasks()

    // Move task to completed tasks table

    btnDone.addEventListener('click', function () {
        completedTasksTable.prepend(btnDone.closest('tr'));
        editTask.remove();
        manageCol.prepend(recoverTask);
        countTasks()
    })

    // Move task to deleted tasks table

    deleteTask.addEventListener('click', function () {
        deletedTasksTable.prepend(deleteTask.closest('tr'));
        btnDone.remove()
        if (editTask || (editTask && !recoverTask)) {
            editTask.remove();
            manageCol.prepend(recoverTask);
        }
        countTasks();
    })

}

form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    addData(task, description, findRadioValue());
    modal.close();
})


// let dataArray = localStorage.getItem("validData") ?
//     JSON.parse(localStorage.getItem("validData")) : [];
// dataArray.forEach(item => addData(item.task, item.description, item.priority));
//
// dataArray.push({task: task.value, description: description.value, priority: findRadioValue()});
// localStorage.setItem("validData", JSON.stringify(dataArray));
//
//