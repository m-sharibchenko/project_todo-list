function completeTask(evt) {
    completedTasksTable.prepend(evt.target.closest('tr'));
    countTasks();
}

function deleteTask(evt) {
    deletedTasksTable.prepend(evt.target.closest('tr'));
    evt.target.classList.add("hide");
    evt.target.nextElementSibling.classList.remove("hide");
    countTasks();
}

function recoverTask(evt) {
    currentTasksTable.prepend(evt.target.closest('tr'));
    evt.target.classList.add("hide");
    evt.target.previousElementSibling.classList.remove("hide");
    countTasks();
}

const arrOfListeners = [];

function editTask(evt) {
    btnCreateTask.classList.add('hide');
    btnAddChanges.classList.remove('hide');

    const closest = evt.target.closest('tr');
    const titleValue = closest.querySelector('.title');
    const btnShowDescription = closest.querySelector('.btn-description');
    const descriptionValue = closest.querySelector('.description');
    const radioValue = closest.querySelector('.priority');

    task.value = titleValue.textContent;
    description.value = descriptionValue.textContent;
    [...radio].forEach(el => {
        if (el.value === radioValue.textContent) {
            el.checked = true;
        }
    })

    modal.showModal();

    function addChanges(task, description) {
        titleValue.textContent = task.value;
        descriptionValue.textContent = description.value;

        if (description.value) {
            btnShowDescription.classList.remove('hide');
        }
        else {
            btnShowDescription.classList.add('hide');
        }

        const priority = [...radio].find(radio => radio.checked);
        radioValue.textContent = priority.value;
    }

    function listenerFunction(evt) {
        evt.preventDefault();
        addChanges(task, description);

        modal.close();
        btnAddChanges.classList.add('hide');
        btnCreateTask.classList.remove('hide');
    }

    arrOfListeners.push(listenerFunction);
    arrOfListeners.forEach(func => btnAddChanges.removeEventListener('click', func));

    btnAddChanges.addEventListener('click', listenerFunction)
}






