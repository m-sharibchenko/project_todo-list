function getElements(evt, tr) {
    const titleElement = tr.querySelector('.task__title');
    const descriptionElement = tr.querySelector('.task__description');
    const radioElement = tr.querySelector('.task__priority');

    return [titleElement, descriptionElement, radioElement];
}

function getData(evt, tr) {
    const [titleElement, descriptionElement, radioElement] = getElements(evt, tr);
    const titleValue = titleElement.textContent;
    const descriptionValue = descriptionElement.textContent;
    const radioValue = radioElement.textContent;

    return [titleValue, descriptionValue, radioValue];
}

function changeStatus(evt, tr, status) {
    const [titleValue, descriptionValue, radioValue] = getData(evt, tr);
    const element = currentTasksArray.find(el =>
        el.title === titleValue
        && el.description === descriptionValue
        && el.priority === radioValue);
    element.status = status;
}

function completeTask(evt) {
    const tr = evt.target.closest('tr');

    completedTasksTable.prepend(tr);
    changeStatus(evt, tr, 'complete');
    evt.currentTarget.classList.add('btn-done-checked');
    countTasks();
}

function deleteTask(evt) {
    const tr = evt.target.closest('tr');

    deletedTasksTable.prepend(tr);
    changeStatus(evt, tr, 'delete');
    evt.currentTarget.classList.add("hide");
    evt.currentTarget.nextElementSibling.classList.remove("hide");
    countTasks();
}

function recoverTask(evt) {
    const tr = evt.target.closest('tr');

    currentTasksTable.prepend(tr);
    changeStatus(evt, tr, 'current');
    evt.currentTarget.classList.add("hide");
    evt.currentTarget.previousElementSibling.classList.remove("hide");
    tr.querySelector('.btn-done').classList.remove('btn-done-checked');
    countTasks();
}

let selectedRow;

function addDataInForm(evt) {
    btnCreateTask.classList.add('hide');
    btnAddChanges.classList.remove('hide');

    selectedRow = evt.target.closest('tr');
    const [titleValue, descriptionValue, radioValue] = getData(evt, selectedRow);

    title.value = titleValue;
    description.value = descriptionValue;
    [...radio].forEach(el => {
        if (el.value === radioValue) {
            el.checked = true;
        }
    });

    modal.showModal();
}


function updateTask(evt, {title, description, priority}) {
    let [titleValue, descriptionValue, radioValue] = getData(evt, selectedRow);
    let [titleElement, descriptionElement, radioElement] = getElements(evt, selectedRow);
    const btnShowDescription = selectedRow.querySelector('.btn-description');

    let element = currentTasksArray.find(el =>
        el.title === titleValue
        && el.description === descriptionValue
        && el.priority === radioValue);

    element.title = title;
    element.description = description;
    element.priority = priority;

    if (element.description !== "") {
        btnShowDescription.classList.remove('hide');
    }
    else {
        btnShowDescription.classList.add('hide');
    }

    titleElement.textContent = title;
    descriptionElement.textContent = description;
    radioElement.textContent = priority;
}


btnAddChanges.addEventListener('click', (evt) => {
    evt.preventDefault();

    priority = [...radio].find(radio => radio.checked);

    const task = {
        title: title.value,
        description: description.value,
        priority: priority.value,
    };

    updateTask(evt, task);
    modal.close();
    btnAddChanges.classList.add('hide');
    btnCreateTask.classList.remove('hide');
})







