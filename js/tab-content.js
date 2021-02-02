const tabs = document.querySelector('.tabs');
const currentTasks = document.querySelector('.tab-current-tasks');
const completedTasks = document.querySelector('.tab-completed-tasks');
const deletedTasks = document.querySelector('.tab-deleted-tasks');
let targetContent = document.getElementById('current-tasks');
const tabsList = [currentTasks, completedTasks, deletedTasks];
let activeTab = currentTasks;

const currentTasksTable = document.querySelector('.table-current-tasks .table-body');
const completedTasksTable = document.querySelector('.table-completed-tasks .table-body');
const deletedTasksTable = document.querySelector('.table-deleted-tasks .table-body');

function openTab(evt) {
    const btn = evt.target.closest('a');

    if (btn) {
        targetContent.classList.remove("target");
        activeTab.classList.remove("active");

        const activeIndex = tabsList.findIndex(tab => tab === btn);
        activeTab = tabsList[activeIndex];
        let activeLink = activeTab.getAttribute('href');
        targetContent = document.querySelector(`${activeLink}`);

        targetContent.classList.add("target");
        activeTab.classList.add("active");
    }
}

tabs.addEventListener('click', openTab);

// localStorage.clear();

export {currentTasksTable, completedTasksTable, deletedTasksTable};
