/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/complete.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "complete": () => (/* binding */ complete)
/* harmony export */ });
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions.js */ "./src/functions.js");


const tasksDiv = document.querySelector('.to-do-list');

const complete = () => {
  tasksDiv.addEventListener('click', (e) => {
    if (e.target.classList.contains('make-complete')) {
      if (e.target.innerHTML === '<i class="fa-regular fa-square complete"></i>') {
        e.target.innerHTML = '<i class="fa-sharp fa-solid fa-check t-com"></i>';
        e.target.childNodes[0].style.color = '#87ceeb';
        e.target.parentElement.childNodes[1].style['text-decoration'] = 'line-through';
        e.target.parentElement.childNodes[1].style['font-size'] = '20px';
        e.target.parentElement.childNodes[1].style.color = '#d3d3d3';
        for (let i = 0; i < _functions_js__WEBPACK_IMPORTED_MODULE_0__.tasks.length; i+=1) {
          if (_functions_js__WEBPACK_IMPORTED_MODULE_0__.tasks[i].id == e.target.parentElement.getAttribute('data-id')) {
            _functions_js__WEBPACK_IMPORTED_MODULE_0__.tasks[i].complete = true;
            (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.addToLocalStorage)(_functions_js__WEBPACK_IMPORTED_MODULE_0__.tasks);
          }
        }
      } else {
        e.target.innerHTML = '<i class="fa-regular fa-square complete"></i>';
        e.target.childNodes[0].style.color = '#808080';
        e.target.parentElement.childNodes[1].style['text-decoration'] = 'none';
        e.target.parentElement.childNodes[1].style['font-size'] = '25px';
        e.target.parentElement.childNodes[1].style.color = '#454544';
        for (let i = 0; i < _functions_js__WEBPACK_IMPORTED_MODULE_0__.tasks.length; i++) {
          if (_functions_js__WEBPACK_IMPORTED_MODULE_0__.tasks[i].id == e.target.parentElement.getAttribute('data-id')) {
            _functions_js__WEBPACK_IMPORTED_MODULE_0__.tasks[i].complete = false;
            (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.addToLocalStorage)(_functions_js__WEBPACK_IMPORTED_MODULE_0__.tasks);
          }
        }
      }
    }
  });
};



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGxldGUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AseUJBQXlCLGtCQUFrQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZ0NBQWdDO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdDQUFnQztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7VUM5SUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ04wRDtBQUMxRDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsSUFBSSx1REFBWSxFQUFFO0FBQzFDLGNBQWMsZ0RBQUs7QUFDbkIsWUFBWSxnREFBSztBQUNqQixZQUFZLGdFQUFpQixDQUFDLGdEQUFLO0FBQ25DO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixJQUFJLHVEQUFZLEVBQUU7QUFDMUMsY0FBYyxnREFBSztBQUNuQixZQUFZLGdEQUFLO0FBQ2pCLFlBQVksZ0VBQWlCLENBQUMsZ0RBQUs7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvY29tcGxldGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvLWRvLWxpc3RcIik7XHJcbmNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRcIik7XHJcbmNvbnN0IGNsZWFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsZWFyLWFsbCcpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFRvTG9jYWxTdG9yYWdlID0gKHRhc2tzKSA9PiB7XHJcbiAgZm9yIChsZXQgaSA9IDAsIGogPSAxOyBpIDwgdGFza3MubGVuZ3RoOyBpKyssIGorKykge1xyXG4gICAgdGFza3NbaV0uSURYID0gajtcclxuICB9XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xyXG59O1xyXG5cclxuY29uc3QgZGVsZXRlVGFza1dpdGggPSAodGFza0lkKSA9PiB7XHJcbiAgdGFza3MgPSB0YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suaWQgIT0gdGFza0lkKTtcclxuICBhZGRUb0xvY2FsU3RvcmFnZSh0YXNrcyk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRGcm9tTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHN0b3JhZ2UgPVxyXG4gICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSA9PT0gbnVsbFxyXG4gICAgICA/IFtdXHJcbiAgICAgIDogSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKTtcclxuICByZXR1cm4gc3RvcmFnZTtcclxufTtcclxuZXhwb3J0IGxldCB0YXNrcyA9IGdldEZyb21Mb2NhbFN0b3JhZ2UoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBkaXNwbGF5VGFza3MgPSAoKSA9PiB7XHJcbiAgdGFza3NEaXYuaW5uZXJIVE1MID0gXCJcIjtcclxuICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZGl2LmNsYXNzTmFtZSA9IFwidGFza1wiO1xyXG4gICAgZGl2LnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgdGFzay5pZCk7XHJcbiAgICBjb25zdCBjaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgY2hlY2suY2xhc3NOYW1lID0gXCJtYWtlLWNvbXBsZXRlXCI7XHJcbiAgICBjaGVjay5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLXNxdWFyZSBjb21wbGV0ZVwiPjwvaT4nO1xyXG4gICAgZGl2LmFwcGVuZChjaGVjayk7XHJcbiAgICBjb25zdCB0YXNrVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIHRhc2tUZXh0LmNsYXNzTmFtZSA9IFwidGV4dFwiO1xyXG4gICAgdGFza1RleHQudHlwZSA9IFwidGV4dFwiO1xyXG4gICAgdGFza1RleHQudmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xyXG4gICAgdGFza1RleHQuc2V0QXR0cmlidXRlKFwicmVhZG9ubHlcIiwgXCJyZWFkb25seVwiKTtcclxuICAgIGRpdi5hcHBlbmQodGFza1RleHQpO1xyXG4gICAgY29uc3QgZHJhZ2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgZHJhZ2J0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1lbGxpcHNpcy12ZXJ0aWNhbFwiPjwvaT4nO1xyXG4gICAgZHJhZ2J0bi5jbGFzc05hbWUgPSBcImRyYWdcIjtcclxuICAgIGRpdi5hcHBlbmQoZHJhZ2J0bik7XHJcbiAgICB0YXNrc0Rpdi5hcHBlbmQoZGl2KTtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRUYXNrID0gKCkgPT4ge1xyXG4gIGlmIChpbnB1dC52YWx1ZSAhPT0gXCJcIikge1xyXG4gICAgY29uc3QgaWQgPSBEYXRlLm5vdygpO1xyXG4gICAgY29uc3QgdGFzayA9IHtcclxuICAgICAgSURYOiB0YXNrcy5sZW5ndGgsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBpbnB1dC52YWx1ZSxcclxuICAgICAgY29tcGxldGU6IGZhbHNlLFxyXG4gICAgICBpZCxcclxuICAgIH07XHJcbiAgICB0YXNrcy5wdXNoKHRhc2spO1xyXG4gICAgaW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gIH1cclxuICBkaXNwbGF5VGFza3MoKTtcclxuICBhZGRUb0xvY2FsU3RvcmFnZSh0YXNrcyk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlID0gKCkgPT4ge1xyXG4gIHRhc2tzRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInJlbW92ZVwiKSkge1xyXG4gICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgIGRlbGV0ZVRhc2tXaXRoKFxyXG4gICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG50YXNrc0Rpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGV4dFwiKSkge1xyXG4gICAgY29uc3QgcGFyZW50ID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcclxuICAgIHBhcmVudC5sYXN0Q2hpbGQuaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmEtc29saWQgZmEtdHJhc2gtY2FuIHJlbW92ZVwiPjwvaT5gO1xyXG4gICAgZS50YXJnZXQucmVtb3ZlQXR0cmlidXRlKFwicmVhZG9ubHlcIik7XHJcbiAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSBcIiNGRkY5QTZcIjtcclxuICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmQgPSBcIiNGRkY5QTZcIjtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHRhc2tzW2ldLmlkID09IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKSkge1xyXG4gICAgICAgIHRhc2tzW2ldLmRlc2NyaXB0aW9uID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0ZXh0XCIpKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzRGl2LmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHRhc2tzRGl2LmNoaWxkTm9kZXNbaV0uZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKSAhPT1cclxuICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIilcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGFza3NEaXYuY2hpbGROb2Rlc1tpXS5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjZmZmXCI7XHJcbiAgICAgICAgdGFza3NEaXYuY2hpbGROb2Rlc1tpXS5jaGlsZE5vZGVzWzFdLnN0eWxlLmJhY2tncm91bmQgPSBcIiNmZmZcIjtcclxuICAgICAgICB0YXNrc0Rpdi5jaGlsZE5vZGVzW2ldLmNoaWxkTm9kZXNbMl0uaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmEtc29saWQgZmEtZWxsaXBzaXMtdmVydGljYWxcIj48L2k+YDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcblxyXG4vLyB1bmNsaWNrIG91dCBzaWRlIHRoZSB0YXNrXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGV4dFwiKSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrc0Rpdi5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRhc2tzRGl2LmNoaWxkTm9kZXNbaV0uc3R5bGUuYmFja2dyb3VuZCA9IFwiI2ZmZlwiO1xyXG4gICAgICB0YXNrc0Rpdi5jaGlsZE5vZGVzW2ldLmNoaWxkTm9kZXNbMV0uc3R5bGUuYmFja2dyb3VuZCA9IFwiI2ZmZlwiO1xyXG4gICAgICB0YXNrc0Rpdi5jaGlsZE5vZGVzW1xyXG4gICAgICAgIGlcclxuICAgICAgXS5jaGlsZE5vZGVzWzJdLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWVsbGlwc2lzLXZlcnRpY2FsXCI+PC9pPmA7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vIHNhdmluZyBjaGFuZ2VzIHdoZW5ldmVyIGlucGl0IGluIHRoZSB0YXNrIHRleHQuXHJcbnRhc2tzRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xyXG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0ZXh0XCIpKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0YXNrc1tpXS5pZCA9PSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIikpIHtcclxuICAgICAgICB0YXNrc1tpXS5kZXNjcmlwdGlvbiA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIGFkZFRvTG9jYWxTdG9yYWdlKHRhc2tzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGNsZWFyQWxsQ29tcGxldGVkID0gKCkgPT4ge1xyXG4gIGNsZWFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgXHJcbiAgIHRhc2tzID0gdGFza3MuZmlsdGVyKChlbGVtZW50KSA9PiAhZWxlbWVudC5jb21wbGV0ZSk7XHJcbiAgIFxyXG4gICAgYWRkVG9Mb2NhbFN0b3JhZ2UodGFza3MpO1xyXG4gICAgZGlzcGxheVRhc2tzKHRhc2tzKTtcclxuICAgXHJcbiAgfSk7XHJcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyB0YXNrcywgYWRkVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tICcuL2Z1bmN0aW9ucy5qcyc7XHJcblxyXG5jb25zdCB0YXNrc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1kby1saXN0Jyk7XHJcblxyXG5leHBvcnQgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XHJcbiAgdGFza3NEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbWFrZS1jb21wbGV0ZScpKSB7XHJcbiAgICAgIGlmIChlLnRhcmdldC5pbm5lckhUTUwgPT09ICc8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtc3F1YXJlIGNvbXBsZXRlXCI+PC9pPicpIHtcclxuICAgICAgICBlLnRhcmdldC5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1zaGFycCBmYS1zb2xpZCBmYS1jaGVjayB0LWNvbVwiPjwvaT4nO1xyXG4gICAgICAgIGUudGFyZ2V0LmNoaWxkTm9kZXNbMF0uc3R5bGUuY29sb3IgPSAnIzg3Y2VlYic7XHJcbiAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzFdLnN0eWxlWyd0ZXh0LWRlY29yYXRpb24nXSA9ICdsaW5lLXRocm91Z2gnO1xyXG4gICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1sxXS5zdHlsZVsnZm9udC1zaXplJ10gPSAnMjBweCc7XHJcbiAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzFdLnN0eWxlLmNvbG9yID0gJyNkM2QzZDMnO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKz0xKSB7XHJcbiAgICAgICAgICBpZiAodGFza3NbaV0uaWQgPT0gZS50YXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSkge1xyXG4gICAgICAgICAgICB0YXNrc1tpXS5jb21wbGV0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGFkZFRvTG9jYWxTdG9yYWdlKHRhc2tzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZS50YXJnZXQuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1zcXVhcmUgY29tcGxldGVcIj48L2k+JztcclxuICAgICAgICBlLnRhcmdldC5jaGlsZE5vZGVzWzBdLnN0eWxlLmNvbG9yID0gJyM4MDgwODAnO1xyXG4gICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1sxXS5zdHlsZVsndGV4dC1kZWNvcmF0aW9uJ10gPSAnbm9uZSc7XHJcbiAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzFdLnN0eWxlWydmb250LXNpemUnXSA9ICcyNXB4JztcclxuICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbMV0uc3R5bGUuY29sb3IgPSAnIzQ1NDU0NCc7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgaWYgKHRhc2tzW2ldLmlkID09IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpIHtcclxuICAgICAgICAgICAgdGFza3NbaV0uY29tcGxldGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYWRkVG9Mb2NhbFN0b3JhZ2UodGFza3MpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==