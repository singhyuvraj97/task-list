//UI variables declaration and definiton
const newTaskInput = document.querySelector(".taskInputCont input[type='text']");
const addTaskBtn = document.querySelector(".taskInputCont .cardBtn");
const taskListCont = document.querySelector(".taskListCont");
const clearTaskBtn = document.querySelector(".clearAllTask .cardBtn");
const filterTaskInput = document.querySelector(".filterTaskCont ul li input[type='text']");
const filterTaskBtn = document.querySelector(".filterTaskCont ul li input[type='submit']");

// console.log(filterTaskInput);
// console.log(filterTaskInput.value);
// console.log(filterTaskBtn);

//all event listener
addTaskBtn.addEventListener("click", addTask);
newTaskInput.addEventListener("focus", clrInpt);
clearTaskBtn.addEventListener("click", delAllTask);
filterTaskInput.addEventListener("focus", clrInpt);
filterTaskInput.addEventListener("focus",resetList);
filterTaskBtn.addEventListener("click", filterTask);


//all event handler
function addTask(e) {

  //checking for empty input
  if (newTaskInput.value.length === 0) {
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
  rmBtn.addEventListener("click", rmTask);

  //append remove button to li
  task.appendChild(rmBtn);

  //appending task to task container
  taskListCont.appendChild(task);

}

function clrInpt(e) {
  if (e.target.value.length !== 0) {
    e.target.value = "";
  }
}

function rmTask(e) {
  let task = e.target.parentElement;
  task.remove();
}

function delAllTask(e) {
  while (taskListCont.firstElementChild) {
    taskListCont.firstElementChild.remove();
  }
}

function filterTask(e) {
  e.preventDefault();
  const inputStr = filterTaskInput.value.toLowerCase();

  if (taskListCont.children.length !== 0) {
    console.log("filter can work");
    //convert htmlCollection object to array, so that forEach loop can be applied
    let newArr = Array.from(taskListCont.children);
    newArr.forEach(shout);
    function shout(val,key) {
      if(!val.firstChild.nodeValue.includes(inputStr)){
        console.log(key,val,"substring not found");
        val.style.display = "none";
      }
    }
  }
  else {
    console.log("filter can't work");
  }
}

function resetList(e){
  // console.log(taskListCont.children);
  for(let val of taskListCont.children){
    val.style.display = "block";
  }
}