const tabs = document.querySelector('.tabs');
const currentTasks = document.querySelector('.tab-current-tasks');
const completedTasks = document.querySelector('.tab-completed-tasks');
const deletedTasks = document.querySelector('.tab-deleted-tasks');
let targetContent = document.getElementById('current-tasks');
const tabsList = [currentTasks, completedTasks, deletedTasks];
let activeTab = currentTasks;

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












// async function sendData() {
//     try {
//         let user = {
//             name: 'John',
//             surname: 'Smith'
//         };
//
//         let response = await fetch('https://67b41c3d-b3d2-4cb2-8ea5-4e61d4b13b6a.mock.pstmn.io/', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json;charset=utf-8'
//             },
//             body: JSON.stringify(user)
//         });
//         console.log('------------------')
//         console.log(response.status);
//     }
//     catch (error) {
//         console.log('error');
//     }
// }
//
// sendData();
//
// async function getData() {
//     try {
//         let response = await fetch('https://67b41c3d-b3d2-4cb2-8ea5-4e61d4b13b6a.mock.pstmn.io/');
//         const users = await response.json();
//         console.log(users);
//     }
//     catch (error) {
//         console.log(error);
//     }
// }
//
// getData();

// localStorage.clear();