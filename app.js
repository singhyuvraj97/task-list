//UI variables declaration and definiton
const newTaskInput = document.querySelector(".taskInputCont input[type='text']");
const addTaskBtn = document.querySelector(".taskInputCont .cardBtn");
const taskListCont = document.querySelector(".taskListCont");
const clearTaskBtn = document.querySelector(".filterTask .cardBtn");

//all event listener
addTaskBtn.addEventListener("click",addTask);

//all event handler
function addTask(e){
  console.log(document.forms.querySelector("input[type:'submit']"));
  if(newTaskInput.value.length === 0){
    alert("no input");
  }

  //create li node for task
  let task = document.createElement("li");

  //create textnode and store form input value
  let text = document.createTextNode(newTaskInput.value);

  //append textnode to li node
  task.appendChild(text);

  console.log(task);

}