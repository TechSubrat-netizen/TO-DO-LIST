let taskForm = document.querySelector('#task-list');
    let inputField = document.querySelector('#input-field');
    let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

    taskForm.addEventListener('submit', function (e) {
        e.preventDefault();
        let task = inputField.value.trim();
        if (task) {
            taskList.unshift(task);
            localStorage.setItem('tasks', JSON.stringify(taskList));
            displayTasks();
            inputField.value = '';
        }
    });
//Display  tasks
    function displayTasks() {
        let eachTask = '';
        taskList.forEach(function (val, i) {
            eachTask += `<li class="list-group-item d-flex justify-content-between align-items-center">
                            <span>${val}</span>
                            <div>
                                <i class="bi bi-pen-fill me-3 text-warning" onclick="updateTask(${i})"></i>
                                <i class="bi bi-trash text-danger" onclick="deleteTask(${i})"></i>
                            </div>
                         </li>`;
        });
        document.querySelector('.list-group').innerHTML = eachTask;
    }

 //Update or edit functionality
    function updateTask(index) {
        inputField.value = taskList[index];
        taskList.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(taskList));
        displayTasks();
    }
//Delete functionality
    function deleteTask(index) {
        taskList.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(taskList));
        displayTasks();
    }

  