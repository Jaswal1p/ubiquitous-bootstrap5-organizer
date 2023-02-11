var buttonEl = document.querySelector("#btn1");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function () {

    var taskNameInput = document.querySelector("input[name='task-name']").value; 
    console.log(taskNameInput);
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    console.log(taskTypeInput);
    
    // create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    // create div to hold name of task & type
    var taskInfoEl = document.createElement("div");
    // give it a class name
    taskInfoEl.className = "task-info";
    // it needs some dynamic HTML
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "<h5><span class='task-type'>" + taskTypeInput + "</span>"
    
    listItemEl.appendChild(taskInfoEl);

    // taskItemEl.className = "task-item";
    // taskItemEl.textContent = taskNameInput;
    tasksToDoEl.appendChild(listItemEl);
}


buttonEl.addEventListener("click", createTaskHandler);


