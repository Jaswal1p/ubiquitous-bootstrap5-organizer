var buttonEl = document.querySelector("#btn1");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function () {

    var taskNameInput = document.querySelector("input[name='task-name']").value; 
    // console.log(taskNameInput);
    

    var taskItemEl = document.createElement("li");
    taskItemEl.className = "task-item";
    taskItemEl.textContent = taskNameInput;
    tasksToDoEl.appendChild(taskItemEl);
}


buttonEl.addEventListener("click", createTaskHandler);


