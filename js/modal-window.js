const btnOpenModal = document.querySelector('.tasks-create-btn');
const modal = document.querySelector('.modal-window');
const form = modal.querySelector('[name = "form"]');
const btnCloseModal = form.querySelector('.form__btn-close');
const btnAddTaskChanges = form.querySelector('.form__btn-edit');
const btnCreateTask = form.querySelector('.form__btn-create');

btnOpenModal.addEventListener('click', () => {
    form.reset();
    modal.showModal();
});

btnCloseModal.addEventListener('click', () => {
    btnAddTaskChanges.classList.add('hide');
    btnCreateTask.classList.remove('hide');
    modal.close();
});

export {modal, form, btnCreateTask, btnAddTaskChanges};