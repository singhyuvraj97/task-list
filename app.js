//UI variables declaration and definiton
const newTaskInput = document.querySelector(".taskInputCont input[type='text']");
const addTaskBtn = document.querySelector(".taskInputCont .cardBtn");
const taskListCont = document.querySelector(".taskListCont");
const clearTaskBtn = document.querySelector(".filterTask .cardBtn");

//all event listener
addTaskBtn.addEventListener("click",addTask);
newTaskInput.addEventListener("focus",clrInpt);
clearTaskBtn.addEventListener("click",delAllTask);


//all event handler
function addTask(e){

  //checking for empty input
  if(newTaskInput.value.length === 0){
    return;
  }

  //create li node for task
  let task = document.createElement("li");

  //adding class to task
  task.classList.add("task");

  //create textnode and store form input value
  let text = document.createTextNode(newTaskInput.value);

  //append textnode to li node
  task.appendChild(text);

  //create remove button
  let rmBtn = document.createElement("a");
  rmBtn.innerText = "x";

  //add class to remove button
  rmBtn.classList.add("removeBtn");

  //adding event listener to x
  rmBtn.addEventListener("click",rmTask);
  
  //append remove button to li
  task.appendChild(rmBtn);

  //appending task to task container
  taskListCont.appendChild(task);

}

function clrInpt(e){
  if(e.target.value.length !== 0){
    e.target.value = "";
  }
}

function rmTask(e){
  let task = e.target.parentElement;
  task.remove();
}

function delAllTask(e){
  let count = taskListCont.children.length;
  while(taskListCont.firstElementChild){
    taskListCont.firstElementChild.remove();
  }
}