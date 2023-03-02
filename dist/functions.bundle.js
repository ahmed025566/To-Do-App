/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "addToLocalStorage": () => (/* binding */ addToLocalStorage),
/* harmony export */   "clearAllCompleted": () => (/* binding */ clearAllCompleted),
/* harmony export */   "displayTasks": () => (/* binding */ displayTasks),
/* harmony export */   "remove": () => (/* binding */ remove),
/* harmony export */   "tasks": () => (/* binding */ tasks)
/* harmony export */ });
const tasksDiv = document.querySelector(".to-do-list");
const input = document.querySelector(".add");
const clear = document.getElementById('clear-all');

const addToLocalStorage = (tasks) => {
  for (let i = 0, j = 1; i < tasks.length; i++, j++) {
    tasks[i].IDX = j;
  }
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const deleteTaskWith = (taskId) => {
  tasks = tasks.filter((task) => task.id != taskId);
  addToLocalStorage(tasks);
};

const getFromLocalStorage = () => {
  const storage =
    localStorage.getItem("tasks") === null
      ? []
      : JSON.parse(localStorage.getItem("tasks"));
  return storage;
};
let tasks = getFromLocalStorage();

const displayTasks = () => {
  tasksDiv.innerHTML = "";
  tasks.forEach((task) => {
    const div = document.createElement("div");
    div.className = "task";
    div.setAttribute("data-id", task.id);
    const check = document.createElement("span");
    check.className = "make-complete";
    check.innerHTML = '<i class="fa-regular fa-square complete"></i>';
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

const addTask = () => {
  if (input.value !== "") {
    const id = Date.now();
    const task = {
      IDX: tasks.length,
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

const remove = () => {
  tasksDiv.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove")) {
      e.target.parentElement.parentElement.remove();
      deleteTaskWith(
        e.target.parentElement.parentElement.getAttribute("data-id")
      );
    }
  });
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

  if (e.target.classList.contains("text")) {
    for (let i = 0; i < tasksDiv.childNodes.length; i++) {
      if (
        tasksDiv.childNodes[i].getAttribute("data-id") !==
        e.target.parentElement.getAttribute("data-id")
      ) {
        tasksDiv.childNodes[i].style.background = "#fff";
        tasksDiv.childNodes[i].childNodes[1].style.background = "#fff";
        tasksDiv.childNodes[i].childNodes[2].innerHTML = `<i class="fa-solid fa-ellipsis-vertical"></i>`;
      }
    }
  }
});

// unclick out side the task
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

// saving changes whenever inpit in the task text.
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





const clearAllCompleted = () => {
  clear.addEventListener('click', () => {
    
   tasks = tasks.filter((element) => !element.complete);
   
    addToLocalStorage(tasks);
    displayTasks(tasks);
   
  });
};
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb25zLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLHlCQUF5QixrQkFBa0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0JBQWtCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdDQUFnQztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixnQ0FBZ0M7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0JBQWtCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2Z1bmN0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IHRhc2tzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50by1kby1saXN0XCIpO1xyXG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkXCIpO1xyXG5jb25zdCBjbGVhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGVhci1hbGwnKTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRUb0xvY2FsU3RvcmFnZSA9ICh0YXNrcykgPT4ge1xyXG4gIGZvciAobGV0IGkgPSAwLCBqID0gMTsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrLCBqKyspIHtcclxuICAgIHRhc2tzW2ldLklEWCA9IGo7XHJcbiAgfVxyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcclxufTtcclxuXHJcbmNvbnN0IGRlbGV0ZVRhc2tXaXRoID0gKHRhc2tJZCkgPT4ge1xyXG4gIHRhc2tzID0gdGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmlkICE9IHRhc2tJZCk7XHJcbiAgYWRkVG9Mb2NhbFN0b3JhZ2UodGFza3MpO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0RnJvbUxvY2FsU3RvcmFnZSA9ICgpID0+IHtcclxuICBjb25zdCBzdG9yYWdlID1cclxuICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikgPT09IG51bGxcclxuICAgICAgPyBbXVxyXG4gICAgICA6IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSk7XHJcbiAgcmV0dXJuIHN0b3JhZ2U7XHJcbn07XHJcbmV4cG9ydCBsZXQgdGFza3MgPSBnZXRGcm9tTG9jYWxTdG9yYWdlKCk7XHJcblxyXG5leHBvcnQgY29uc3QgZGlzcGxheVRhc2tzID0gKCkgPT4ge1xyXG4gIHRhc2tzRGl2LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRpdi5jbGFzc05hbWUgPSBcInRhc2tcIjtcclxuICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIHRhc2suaWQpO1xyXG4gICAgY29uc3QgY2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIGNoZWNrLmNsYXNzTmFtZSA9IFwibWFrZS1jb21wbGV0ZVwiO1xyXG4gICAgY2hlY2suaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1zcXVhcmUgY29tcGxldGVcIj48L2k+JztcclxuICAgIGRpdi5hcHBlbmQoY2hlY2spO1xyXG4gICAgY29uc3QgdGFza1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICB0YXNrVGV4dC5jbGFzc05hbWUgPSBcInRleHRcIjtcclxuICAgIHRhc2tUZXh0LnR5cGUgPSBcInRleHRcIjtcclxuICAgIHRhc2tUZXh0LnZhbHVlID0gdGFzay5kZXNjcmlwdGlvbjtcclxuICAgIHRhc2tUZXh0LnNldEF0dHJpYnV0ZShcInJlYWRvbmx5XCIsIFwicmVhZG9ubHlcIik7XHJcbiAgICBkaXYuYXBwZW5kKHRhc2tUZXh0KTtcclxuICAgIGNvbnN0IGRyYWdidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIGRyYWdidG4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtZWxsaXBzaXMtdmVydGljYWxcIj48L2k+JztcclxuICAgIGRyYWdidG4uY2xhc3NOYW1lID0gXCJkcmFnXCI7XHJcbiAgICBkaXYuYXBwZW5kKGRyYWdidG4pO1xyXG4gICAgdGFza3NEaXYuYXBwZW5kKGRpdik7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWRkVGFzayA9ICgpID0+IHtcclxuICBpZiAoaW5wdXQudmFsdWUgIT09IFwiXCIpIHtcclxuICAgIGNvbnN0IGlkID0gRGF0ZS5ub3coKTtcclxuICAgIGNvbnN0IHRhc2sgPSB7XHJcbiAgICAgIElEWDogdGFza3MubGVuZ3RoLFxyXG4gICAgICBkZXNjcmlwdGlvbjogaW5wdXQudmFsdWUsXHJcbiAgICAgIGNvbXBsZXRlOiBmYWxzZSxcclxuICAgICAgaWQsXHJcbiAgICB9O1xyXG4gICAgdGFza3MucHVzaCh0YXNrKTtcclxuICAgIGlucHV0LnZhbHVlID0gXCJcIjtcclxuICB9XHJcbiAgZGlzcGxheVRhc2tzKCk7XHJcbiAgYWRkVG9Mb2NhbFN0b3JhZ2UodGFza3MpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZSA9ICgpID0+IHtcclxuICB0YXNrc0Rpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJyZW1vdmVcIikpIHtcclxuICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICBkZWxldGVUYXNrV2l0aChcclxuICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxudGFza3NEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInRleHRcIikpIHtcclxuICAgIGNvbnN0IHBhcmVudCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XHJcbiAgICBwYXJlbnQubGFzdENoaWxkLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXRyYXNoLWNhbiByZW1vdmVcIj48L2k+YDtcclxuICAgIGUudGFyZ2V0LnJlbW92ZUF0dHJpYnV0ZShcInJlYWRvbmx5XCIpO1xyXG4gICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjRkZGOUE2XCI7XHJcbiAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjRkZGOUE2XCI7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0YXNrc1tpXS5pZCA9PSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIikpIHtcclxuICAgICAgICB0YXNrc1tpXS5kZXNjcmlwdGlvbiA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGV4dFwiKSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrc0Rpdi5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0YXNrc0Rpdi5jaGlsZE5vZGVzW2ldLmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIikgIT09XHJcbiAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRhc2tzRGl2LmNoaWxkTm9kZXNbaV0uc3R5bGUuYmFja2dyb3VuZCA9IFwiI2ZmZlwiO1xyXG4gICAgICAgIHRhc2tzRGl2LmNoaWxkTm9kZXNbaV0uY2hpbGROb2Rlc1sxXS5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjZmZmXCI7XHJcbiAgICAgICAgdGFza3NEaXYuY2hpbGROb2Rlc1tpXS5jaGlsZE5vZGVzWzJdLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWVsbGlwc2lzLXZlcnRpY2FsXCI+PC9pPmA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG5cclxuLy8gdW5jbGljayBvdXQgc2lkZSB0aGUgdGFza1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInRleHRcIikpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3NEaXYuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB0YXNrc0Rpdi5jaGlsZE5vZGVzW2ldLnN0eWxlLmJhY2tncm91bmQgPSBcIiNmZmZcIjtcclxuICAgICAgdGFza3NEaXYuY2hpbGROb2Rlc1tpXS5jaGlsZE5vZGVzWzFdLnN0eWxlLmJhY2tncm91bmQgPSBcIiNmZmZcIjtcclxuICAgICAgdGFza3NEaXYuY2hpbGROb2Rlc1tcclxuICAgICAgICBpXHJcbiAgICAgIF0uY2hpbGROb2Rlc1syXS5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1lbGxpcHNpcy12ZXJ0aWNhbFwiPjwvaT5gO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcblxyXG4vLyBzYXZpbmcgY2hhbmdlcyB3aGVuZXZlciBpbnBpdCBpbiB0aGUgdGFzayB0ZXh0LlxyXG50YXNrc0Rpdi5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcclxuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGV4dFwiKSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodGFza3NbaV0uaWQgPT0gZS50YXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpKSB7XHJcbiAgICAgICAgdGFza3NbaV0uZGVzY3JpcHRpb24gPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBhZGRUb0xvY2FsU3RvcmFnZSh0YXNrcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBjbGVhckFsbENvbXBsZXRlZCA9ICgpID0+IHtcclxuICBjbGVhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIFxyXG4gICB0YXNrcyA9IHRhc2tzLmZpbHRlcigoZWxlbWVudCkgPT4gIWVsZW1lbnQuY29tcGxldGUpO1xyXG4gICBcclxuICAgIGFkZFRvTG9jYWxTdG9yYWdlKHRhc2tzKTtcclxuICAgIGRpc3BsYXlUYXNrcyh0YXNrcyk7XHJcbiAgIFxyXG4gIH0pO1xyXG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==