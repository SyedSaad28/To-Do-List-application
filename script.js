function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();

    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');

    li.innerHTML = `
        ${taskText}
        <button onclick="toggleComplete(this)">Complete</button>
        <button class="remove" onclick="removeTask(this)">Remove</button>
    `;

    taskList.appendChild(li);
    input.value = '';
}

function toggleComplete(button) {
    const li = button.parentElement;
    li.classList.toggle('completed');
}

function removeTask(button) {
    const li = button.parentElement;
    li.remove();
}
