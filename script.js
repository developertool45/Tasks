const taskInput = document.querySelector(".task-input");
const addTaskBtn = document.querySelector(".add-task button");
const allItems = document.querySelectorAll(".item");
const allBoard = document.querySelectorAll(".board");

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
    const parent = document.querySelector(".main .items");       
    const item = document.createElement("p");
    item.classList.add("item");
    item.draggable = true;
    item.innerText = task;   

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
        item.classList.add('flying')       
    })
    item.addEventListener("dragend", () => {
        item.classList.remove("flying");        
    })
})

allBoard.forEach((board) => {
    board.addEventListener("dragover", (e) => {
        console.log(board.className == "board progress");        
        
        const flyingItem = document.querySelector(".flying");
        const items = board.querySelector('.items')

        let ourclass = board.className;
        console.log(ourclass);
        

        if (ourclass == "board progress") {
             flyingItem.classList.remove("pd");
             flyingItem.classList.add('pt')            
        }else if (ourclass == "board completed") {
            flyingItem.classList.remove("pt");
            flyingItem.classList.add("pd");
        } else if (ourclass == "board todo") {
            flyingItem.classList.remove("pt", "pd");           
        } else {
            ourclass 
        }
        items.appendChild(flyingItem);
    });
})
   

