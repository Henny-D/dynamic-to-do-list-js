
// Ensure the script runs only after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // Select DOM Elements to ADD, take input, and create list for tasks
    const addButton = document.getElementById('add-task-btn'); // To add task
    const taskInput = document.getElementById('task-input'); // Input field for new task
    const taskList = document.getElementById('task-list'); // Add task list to display task

    // Function to load tasks from Local Storage and add them to the DOM
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]'); // Get tasks from localStorage or default to an empty array
        storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' ensures it doesn't add the task again to Local Storage
    }

    // Define the addTask function
    function addTask(taskText, save = true) {
        if (taskText === undefined) {
            // Retrieve and trim the input value
            taskText = taskInput.value.trim();
        }

        if (taskText === "") {
            alert("Please enter a task!");
        } else {
            // Create a new li element and set its textContent
            const taskItem = document.createElement("li");
            taskItem.textContent = taskText;
            taskItem.classList.add("task-item");

            // Create a remove button
            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.classList.add("remove-btn");

            // Assign an onclick event to the remove button
            removeButton.onclick = () => {
                // Remove task from task list
                taskList.removeChild(taskItem);

                // Remove task from Local Storage
                const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
                const updatedTasks = tasks.filter(task => task !== taskText); // Remove the task
                localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Update Local Storage
            };

            // Append the remove button to the li element
            taskItem.appendChild(removeButton);

            // Append the li element to the task list
            taskList.appendChild(taskItem);

            // Save the task to Local Storage if necessary
            if (save) {
                const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
                tasks.push(taskText);
                localStorage.setItem('tasks', JSON.stringify(tasks));
            }

            // Clear the task input field
            taskInput.value = "";
        }
    }

    // Attach an event listener to addButton
    addButton.addEventListener("click", () => addTask(undefined, true));

    // Attach an event listener to taskInput for the 'keypress' event
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask(undefined, true);
        }
    });

    // Load tasks from Local Storage when the page loads
    loadTasks();
});


