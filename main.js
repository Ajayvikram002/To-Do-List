document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') return;

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');

    li.textContent = taskText;

    const deleteIcon = document.createElement('i');
    deleteIcon.className = 'bx bx-x';
    
    deleteIcon.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    li.appendChild(deleteIcon);
    taskList.appendChild(li);

    taskInput.value = '';
}
