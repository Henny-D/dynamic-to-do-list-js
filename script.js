
// Ensure the script runs only after the DOM has fully loaded
document.addEventListener('DOMContentLoaded' ,  () =>{

    //select DOM Elements to ADD, take input, and create list for tasks
const addButton=document.getElementById('add-task-btn');//to add task
const taskInput=document.getElementById('task-input');//input fielsd for new task
const taskList=document.getElementById('task-list');//add task list to display task


// Define the addTask function
    function addTask() {

    // Retrieve and trim the input value
        const taskText=taskInput.value.trim();
// Check if the taskText is not empty
         if ( taskText===""){
        alert("Please enter a task!");
        }else{
            //Create a new li element and set its textContent
        const taskItem=document.createElement("li");
        taskItem.textContent=taskText;

        // Create a remove button
        const removeButton=document.createElement("button");
        removeButton.textContent="Remove";
        removeButton.className="remove-btn";

        // Assign an onclick event to the remove button
        removeButton.onclick = ()=>{
            taskList.removeChild(taskItem);
        };
         // Append the remove button to the li element
        taskItem.appendChild(removeButton);
        // Append the li element to the task list
        taskList.appendChild(taskItem);

        // Clear the task input field
        taskInput.value="";

         }
        }
        // Attach an event listener to addButton
         addButton.addEventListener("click", addTask);
        // Attach an event listener to taskInput for the 'keypress' event
         taskInput.addEventListener("keypress", (event)=>{
             if (event.key==="Enter"){
                 addTask();
             }
            });

});