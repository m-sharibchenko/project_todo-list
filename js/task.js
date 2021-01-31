const templateContent = document.getElementById('template__table-content').content;
const taskContent = templateContent.querySelector('.table-body__task');

// let currentTasksArray = JSON.parse(localStorage.getItem("currentTasks") ?? []);
//
// currentTasksArray.forEach(item => addData(item.task, item.description, item.priority));
//На window unload писать куда душе угодно, в cookies, local storage, на сервер запросом слать...
// а по onload читать (или перезапрашивать с сервера) и строить таблицу.

function createTask({title, description, priority}) {
    const newTask = taskContent.cloneNode(true);

    const btnDone = newTask.querySelector('.btn-done');
    btnDone.addEventListener('click', completeTask);
    //кнопка должна быть неактивной когда задача в удаленных!!

    const taskName = newTask.querySelector('.task__title');
    taskName.textContent = title;

    const taskDescription = newTask.querySelector('.task__description');
    taskDescription.textContent = description;

    const btnShowDescription = newTask.querySelector('.btn-description');
    btnShowDescription.textContent = 'Описание';

    if (description) {
        btnShowDescription.classList.remove('hide');
    }

    btnShowDescription.addEventListener('click', () => {
        taskDescription.classList.toggle('hide');

        if (btnShowDescription.textContent === 'Описание') {
            btnShowDescription.textContent = 'Скрыть';
        } else {
            btnShowDescription.textContent = 'Описание';
        }
    });

    const taskPriority = newTask.querySelector('.task__priority');
    taskPriority.textContent = priority;

    // const manageColumn = newTask.querySelector('.task__management');
    const btnEditTask = newTask.querySelector('.task__btn-edit');
    const btnRecoverTask = newTask.querySelector('.task__btn-recover');
    const btnDeleteTask = newTask.querySelector('.task__btn-delete');

    btnDeleteTask.addEventListener('click', deleteTask);
    btnEditTask.addEventListener('click', addDataInForm);
    btnRecoverTask.addEventListener('click', recoverTask);

    return newTask;
}

function addTask(task) {
    const newTask = createTask(task);

    currentTasksTable.append(newTask);
    countTasks();
}
