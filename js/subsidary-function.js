import {tasksArray} from "./local-storage.js";

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
    const element = tasksArray.find(el =>
        el.title === titleValue
        && el.description === descriptionValue
        && el.priority === radioValue);
    element.status = status;
}

function deleteFromArray(evt, tr) {
    const [titleValue, descriptionValue, radioValue] = getData(evt, tr);
    const element = tasksArray.indexOf(el =>
        el.title === titleValue
        && el.description === descriptionValue
        && el.priority === radioValue
        && el.status === 'deleted');
    tasksArray.splice(element, 1);
}

export {getElements, getData, changeStatus, deleteFromArray};