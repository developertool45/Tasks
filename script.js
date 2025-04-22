const taskInput = document.querySelector(".task-input");
const addTaskBtn = document.querySelector(".add-task button");
const allItems = document.querySelectorAll(".item");
const allBoard = document.querySelectorAll(".board");
const removeTask = document.querySelectorAll(".ri-close-line");
const editTask = document.querySelectorAll(".ri-edit-line");

addTaskBtn.addEventListener("click", () => {
  const task = taskInput.value.trim();
  if (!task) {
    return alert("Please enter a task");
  }
  if (task) {
    addTask(task);
    taskInput.value = "";
  }
});
function addTask(task) {
  const parent = document.querySelector(".todo .items");
  const item = document.createElement("p");
  item.classList.add("item");
  item.draggable = true;
  item.innerText = task;
  const div = document.createElement("div");
  const i = document.createElement("i");
  const i2 = document.createElement("i");
  i.classList.add("ri-edit-line");
  i2.classList.add("ri-close-line");
  div.appendChild(i);
  div.appendChild(i2);

  //REMOVE TASK
  i.addEventListener("click", () => {
    i.parentNode.parentNode.remove();
  });
  i2.addEventListener("click", () => {
    i.parentNode.parentNode.remove();
  });

  div.classList.add("btns");
  item.appendChild(div);
  // DRAG EVENT
  item.addEventListener("dragstart", () => {
    item.classList.add("flying");
  });
  item.addEventListener("dragend", () => {
    item.classList.remove("flying");
  });

  parent.appendChild(item);
}

allItems.forEach((item) => {
  item.addEventListener("dragstart", () => {
    item.classList.add("flying");
  });
  item.addEventListener("dragend", () => {
    item.classList.remove("flying");
  });
});

allBoard.forEach((board) => {
  board.addEventListener("dragover", (e) => {
    console.log(board.className == "board progress");

    const flyingItem = document.querySelector(".flying");
    const items = board.querySelector(".items");

    let ourclass = board.className;
    console.log(ourclass);

    if (ourclass == "board progress") {
      flyingItem.classList.remove("pd");
      flyingItem.classList.add("pt");
    } else if (ourclass == "board completed") {
      flyingItem.classList.remove("pt");
      flyingItem.classList.add("pd");
    } else if (ourclass == "board todo") {
      flyingItem.classList.remove("pt", "pd");
    } else {
      ourclass;
    }
    items.appendChild(flyingItem);
  });
});

//EDIT TASK
editTask &&
  editTask.forEach((task) => {
    task.addEventListener("click", (e) => {
      const taskElement = task.parentElement.parentElement;
      taskElement.contentEditable = true;
      taskElement.focus();
      if (taskElement.contentEditable) {
        const editBtn = taskElement.children[0].children[0];
        editBtn.classList.remove("ri-edit-line");
        editBtn.classList.add("ri-save-line");
        if (editBtn.classList.contains("ri-save-line")) {
          editBtn.addEventListener("click", () => {
            taskElement.contentEditable = false;
            editBtn.classList.remove("ri-save-line");
            editBtn.classList.add("ri-edit-line");
          });
        }
        // console.log(taskElement.children[0].children[0]);
      }
    });
  });

//remove task
removeTask &&
  removeTask.forEach((task) => {
    task.addEventListener("click", () => {
      task.parentElement.parentElement.remove();
    });
  });

