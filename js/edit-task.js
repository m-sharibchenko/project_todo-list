import {modal, btnAddTaskChanges, btnCreateTask} from "./modal-window.js";
import {title, description, radio} from "./form.js";
import {getData, getElements} from "./subsidary-function.js";
import {tasksArray} from "./local-storage.js";

let selectedRow;

function addDataInForm(evt) {
    btnCreateTask.classList.add('hide');
    btnAddTaskChanges.classList.remove('hide');

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

    let element = tasksArray.find(el =>
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

btnAddTaskChanges.addEventListener('click', (evt) => {
    evt.preventDefault();

    const priority = [...radio].find(radio => radio.checked);

    const task = {
        title: title.value,
        description: description.value,
        priority: priority.value,
    };

    updateTask(evt, task);
    modal.close();
    btnAddTaskChanges.classList.add('hide');
    btnCreateTask.classList.remove('hide');
});

export {addDataInForm};