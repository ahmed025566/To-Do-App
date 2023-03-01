const tasksDiv = document.querySelector(".to-do-list");
const input = document.querySelector(".add");

const addToLocalStorage = (tasks) => {
  for (let i = 0, j = 1; i < tasks.length; i++, j++) {
    tasks[i].index = j;
  }
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const getFromLocalStorage = () => {
  const storage =
    localStorage.getItem("tasks") === null
      ? []
      : JSON.parse(localStorage.getItem("tasks"));
  return storage;
};
let tasks = getFromLocalStorage();
const deleteTaskWith = (taskId) => {
   tasks = tasks.filter((task) => task.id != taskId);
   console.log(tasks);
   addToLocalStorage(tasks);
}
export const displayTasks = () => {
  tasksDiv.innerHTML = "";
  tasks.forEach((task) => {
    const div = document.createElement("div");
    div.className = "task";
    div.setAttribute("data-id", task.id);
    const check = document.createElement("span");
    check.className = "check";
    check.innerHTML = '<i class="fa-regular fa-square"></i>';
    div.append(check);
    const taskText = document.createElement("input");
    taskText.className = "text";
    taskText.type = "text";
    taskText.value = task.description;
    taskText.setAttribute("readonly", "readonly");
    div.append(taskText);
    const dragbtn = document.createElement("span");
    dragbtn.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';
    dragbtn.className = "drag";
    div.append(dragbtn);
    tasksDiv.append(div);
  });
};

export const addTask = () => {
  if (input.value !== "") {
    const id = Date.now();
    const task = {
      index: tasks.length,
      description: input.value,
      complete: false,
      id,
    };
    tasks.push(task);
    input.value = "";
  }
  displayTasks();
  addToLocalStorage(tasks);
};

tasksDiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("text")) {
    const parent = e.target.parentElement;
    parent.lastChild.innerHTML = `<i class="fa-solid fa-trash-can remove"></i>`;
    e.target.removeAttribute("readonly");
    e.target.parentElement.style.background = "#FFF9A6";
    e.target.style.background = "#FFF9A6";
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id == e.target.parentElement.getAttribute("data-id")) {
        tasks[i].description = e.target.value;
      }
    }
  }
  if(e.target.classList.contains("remove")) {
    deleteTaskWith(e.target.parentElement.parentElement.getAttribute("data-id"));
    e.target.parentElement.parentElement.remove();
  }
  
  
  if (e.target.classList.contains("text")) {
    for (let i = 0; i < tasksDiv.childNodes.length; i++) {
      if (
        tasksDiv.childNodes[i].getAttribute("data-id") !==
        e.target.parentElement.getAttribute("data-id")
      ) {
        tasksDiv.childNodes[i].style.background = "#fff";
        tasksDiv.childNodes[i].childNodes[1].style.background = "#fff";
        tasksDiv.childNodes[
          i
        ].childNodes[2].innerHTML = `<i class="fa-solid fa-ellipsis-vertical"></i>`;
      }
    }
  }
});
document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("text")) {
    for (let i = 0; i < tasksDiv.childNodes.length; i++) {
      tasksDiv.childNodes[i].style.background = "#fff";
      tasksDiv.childNodes[i].childNodes[1].style.background = "#fff";
      tasksDiv.childNodes[
        i
      ].childNodes[2].innerHTML = `<i class="fa-solid fa-ellipsis-vertical"></i>`;
    }
  }
});
tasksDiv.addEventListener("input", (e) => {
  if (e.target.classList.contains("text")) {
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id == e.target.parentElement.getAttribute("data-id")) {
        tasks[i].description = e.target.value;
        addToLocalStorage(tasks);
      }
    }
  }
});

