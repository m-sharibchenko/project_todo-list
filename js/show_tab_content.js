const tabs = document.querySelector('.tabs');
const currentTasks = document.querySelector('.tab-current-tasks');
const completedTasks = document.querySelector('.tab-completed-tasks');
const deletedTasks = document.querySelector('.tab-deleted-tasks');

const tabsList = [currentTasks, completedTasks, deletedTasks];
let activeTab = currentTasks;
activeTab.click();
activeTab.classList.add("active");

function openTab(evt) {
    const index = tabsList.findIndex(tab => tab === evt.target ||
        tab.firstElementChild === evt.target);

    if (tabsList.some(tab => tab === evt.target ||
        tab.firstElementChild === evt.target)) {
        tabsList.forEach(tab => tab.classList.remove("active"));
        activeTab = tabsList[index];
        activeTab.classList.add("active");
    }
}

tabs.addEventListener('click', openTab);
// localStorage.clear();
