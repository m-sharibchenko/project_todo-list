const btnOpenModal = document.querySelector('.tasks-create-btn');
const modal = document.querySelector('.modal-window');
const form = modal.querySelector('[name = "form"]');
const btnCloseModal = form.querySelector('.form__btn-close');
const btnAddChanges = form.querySelector('.form__btn-edit');
const btnCreateTask = form.querySelector('.form__btn-create');

const title = document.getElementById('title');
const description = document.getElementById('description');
const radio = form.querySelectorAll('.form__btn-priority');
let priority;

btnOpenModal.addEventListener('click', () => {
    form.reset();
    modal.showModal();
});

btnCloseModal.addEventListener('click', () => {
    btnAddChanges.classList.add('hide');
    btnCreateTask.classList.remove('hide');
    modal.close();
});


form.addEventListener('submit', function (evt) {
    evt.preventDefault();

    priority = [...radio].find(radio => radio.checked);

    const task = {
        title: title.value,
        description: description.value,
        priority: priority.value,
        status: 'current'
    };

    addTask(task);
    currentTasksArray.push(task);
    countTasks();
    // localStorage.setItem("currentTasks", JSON.stringify(currentTasksArray));
    // console.log(localStorage);
    modal.close();
});
