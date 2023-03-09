/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/update.js":
/*!*******************************!*\
  !*** ./src/modules/update.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearList": () => (/* binding */ clearList),
/* harmony export */   "updateCompleted": () => (/* binding */ updateCompleted),
/* harmony export */   "updateCompletedV2": () => (/* binding */ updateCompletedV2)
/* harmony export */ });
const listContainer = document.getElementById('list-container');

const clearList = () => {
  const listItems = listContainer.querySelectorAll('li');
  listItems.forEach((element) => {
    element.remove();
  });
};

const updateCompleted = (checkbox) => !checkbox.completed;

const updateCompletedV2 = (index, array) => {
  array[index].completed = !array[index].completed;
  return array;
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
/*!****************************************!*\
  !*** ./src/modules/add-remove-list.js ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addToList": () => (/* binding */ addToList),
/* harmony export */   "clearCompleted": () => (/* binding */ clearCompleted),
/* harmony export */   "clearSelected": () => (/* binding */ clearSelected),
/* harmony export */   "filterListItem": () => (/* binding */ filterListItem),
/* harmony export */   "pushListItem": () => (/* binding */ pushListItem),
/* harmony export */   "renameListItem": () => (/* binding */ renameListItem),
/* harmony export */   "renderList": () => (/* binding */ renderList)
/* harmony export */ });
/* harmony import */ var _update_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update.js */ "./src/modules/update.js");


// VARIABLES
const listContainer = document.getElementById('list-container');
const listArray = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
let counter = 1;

// UPDATE LOCAL STORAGE
const updateLocalStorage = () => {
  localStorage.setItem('list', JSON.stringify(listArray));
};

// PURE FUNCTIONS
const pushListItem = (desc) => {
  listArray.push({ description: desc, completed: false, indexVal: listArray.length + 1 });
  return listArray;
};

const filterListItem = (id, listArray) => {
  listArray = listArray.filter((item) => item.indexVal !== id);
  return listArray;
};

const renameListItem = (index, desc, listArray) => {
  listArray[index - 1].description = desc;
  return listArray;
};

const clearSelected = (listArray) => {
  listArray = listArray.filter((item) => item.completed !== true);
  return listArray;
};

// OBJECT UPDATES
const updateKeys = () => {
  listArray.forEach((element) => {
    element.completed = false;
    element.indexVal = counter;
    counter += 1;
  });
  counter = 1;
  updateLocalStorage();
};

const updateDescription = (index, desc) => {
  renameListItem(index, desc, listArray);
  updateLocalStorage();
};

// LISTENERS
const createListeners = () => {
  const checkboxes = document.querySelectorAll('.checkbox');
  const descTextareas = document.querySelectorAll('.desc');

  checkboxes.forEach((checkbox) => {
    if (checkbox.getAttribute('listener') !== true) {
      checkbox.addEventListener('change', () => {
        const arrayindex = Number(checkbox.parentElement.id - 1);
        listArray[arrayindex].completed = (0,_update_js__WEBPACK_IMPORTED_MODULE_0__.updateCompleted)(checkbox);
        updateLocalStorage();
      });
    }
  });

  descTextareas.forEach((textarea) => {
    if (textarea.getAttribute('listener') !== true) textarea.addEventListener('keyup', (e) => updateDescription(e.target.dataset.ta, textarea.value));
  });
};

// EXPORTS
const renderList = () => {
  updateKeys();
  listArray.forEach((element) => {
    listContainer.insertAdjacentHTML('beforeend', `
      <li id="${element.indexVal}">
        <input class="checkbox" type="checkbox">
        <textarea class="desc" maxlength="255" data-ta="${element.indexVal}">${element.description}</textarea>
        <i class="move fa-solid fa-ellipsis-vertical"></i>
        <i class="erase fa-solid fa-trash" data-id="${element.indexVal}"></i>   
      </li>
    `);
  });
  createListeners();
  const removeBtns = document.querySelectorAll('.erase');
  removeBtns.forEach((button) => {
    if (button.getAttribute('listener') !== true) {
      button.addEventListener('click', (e) => {
        (0,_update_js__WEBPACK_IMPORTED_MODULE_0__.clearList)();
        filterListItem(+e.target.dataset.id);
        renderList();
      });
    }
  });
};



const clearCompleted = () => {
  clearSelected();
  (0,_update_js__WEBPACK_IMPORTED_MODULE_0__.clearList)();
  renderList();
};

const addToList = (desc) => {
  pushListItem(desc);
  (0,_update_js__WEBPACK_IMPORTED_MODULE_0__.clearList)();
  renderList();
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkX3JlbW92ZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ087QUFDUDtBQUNPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7VUNkQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsbUJBQW1CLHFFQUFxRTtBQUN4RjtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLDJEQUFlO0FBQ3pEO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQSwwREFBMEQsaUJBQWlCLElBQUksb0JBQW9CO0FBQ25HO0FBQ0Esc0RBQXNELGlCQUFpQjtBQUN2RTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFEQUFTO0FBQ2pCO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0EsRUFBRSxxREFBUztBQUNYO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxFQUFFLHFEQUFTO0FBQ1g7QUFDQSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL21vZHVsZXMvdXBkYXRlLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9tb2R1bGVzL2FkZC1yZW1vdmUtbGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3QtY29udGFpbmVyJyk7XHJcblxyXG5leHBvcnQgY29uc3QgY2xlYXJMaXN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGxpc3RJdGVtcyA9IGxpc3RDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnbGknKTtcclxuICBsaXN0SXRlbXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgZWxlbWVudC5yZW1vdmUoKTtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVDb21wbGV0ZWQgPSAoY2hlY2tib3gpID0+ICFjaGVja2JveC5jb21wbGV0ZWQ7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlQ29tcGxldGVkVjIgPSAoaW5kZXgsIGFycmF5KSA9PiB7XHJcbiAgYXJyYXlbaW5kZXhdLmNvbXBsZXRlZCA9ICFhcnJheVtpbmRleF0uY29tcGxldGVkO1xyXG4gIHJldHVybiBhcnJheTtcclxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNsZWFyTGlzdCwgdXBkYXRlQ29tcGxldGVkIH0gZnJvbSAnLi91cGRhdGUuanMnO1xyXG5cclxuLy8gVkFSSUFCTEVTXHJcbmNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdC1jb250YWluZXInKTtcclxuY29uc3QgbGlzdEFycmF5ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xpc3QnKSA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xpc3QnKSkgOiBbXTtcclxubGV0IGNvdW50ZXIgPSAxO1xyXG5cclxuLy8gVVBEQVRFIExPQ0FMIFNUT1JBR0VcclxuY29uc3QgdXBkYXRlTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsaXN0JywgSlNPTi5zdHJpbmdpZnkobGlzdEFycmF5KSk7XHJcbn07XHJcblxyXG4vLyBQVVJFIEZVTkNUSU9OU1xyXG5leHBvcnQgY29uc3QgcHVzaExpc3RJdGVtID0gKGRlc2MpID0+IHtcclxuICBsaXN0QXJyYXkucHVzaCh7IGRlc2NyaXB0aW9uOiBkZXNjLCBjb21wbGV0ZWQ6IGZhbHNlLCBpbmRleFZhbDogbGlzdEFycmF5Lmxlbmd0aCArIDEgfSk7XHJcbiAgcmV0dXJuIGxpc3RBcnJheTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmaWx0ZXJMaXN0SXRlbSA9IChpZCwgbGlzdEFycmF5KSA9PiB7XHJcbiAgbGlzdEFycmF5ID0gbGlzdEFycmF5LmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pbmRleFZhbCAhPT0gaWQpO1xyXG4gIHJldHVybiBsaXN0QXJyYXk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVuYW1lTGlzdEl0ZW0gPSAoaW5kZXgsIGRlc2MsIGxpc3RBcnJheSkgPT4ge1xyXG4gIGxpc3RBcnJheVtpbmRleCAtIDFdLmRlc2NyaXB0aW9uID0gZGVzYztcclxuICByZXR1cm4gbGlzdEFycmF5O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNsZWFyU2VsZWN0ZWQgPSAobGlzdEFycmF5KSA9PiB7XHJcbiAgbGlzdEFycmF5ID0gbGlzdEFycmF5LmZpbHRlcigoaXRlbSkgPT4gaXRlbS5jb21wbGV0ZWQgIT09IHRydWUpO1xyXG4gIHJldHVybiBsaXN0QXJyYXk7XHJcbn07XHJcblxyXG4vLyBPQkpFQ1QgVVBEQVRFU1xyXG5jb25zdCB1cGRhdGVLZXlzID0gKCkgPT4ge1xyXG4gIGxpc3RBcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBlbGVtZW50LmNvbXBsZXRlZCA9IGZhbHNlO1xyXG4gICAgZWxlbWVudC5pbmRleFZhbCA9IGNvdW50ZXI7XHJcbiAgICBjb3VudGVyICs9IDE7XHJcbiAgfSk7XHJcbiAgY291bnRlciA9IDE7XHJcbiAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XHJcbn07XHJcblxyXG5jb25zdCB1cGRhdGVEZXNjcmlwdGlvbiA9IChpbmRleCwgZGVzYykgPT4ge1xyXG4gIHJlbmFtZUxpc3RJdGVtKGluZGV4LCBkZXNjLCBsaXN0QXJyYXkpO1xyXG4gIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xyXG59O1xyXG5cclxuLy8gTElTVEVORVJTXHJcbmNvbnN0IGNyZWF0ZUxpc3RlbmVycyA9ICgpID0+IHtcclxuICBjb25zdCBjaGVja2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrYm94Jyk7XHJcbiAgY29uc3QgZGVzY1RleHRhcmVhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZXNjJyk7XHJcblxyXG4gIGNoZWNrYm94ZXMuZm9yRWFjaCgoY2hlY2tib3gpID0+IHtcclxuICAgIGlmIChjaGVja2JveC5nZXRBdHRyaWJ1dGUoJ2xpc3RlbmVyJykgIT09IHRydWUpIHtcclxuICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFycmF5aW5kZXggPSBOdW1iZXIoY2hlY2tib3gucGFyZW50RWxlbWVudC5pZCAtIDEpO1xyXG4gICAgICAgIGxpc3RBcnJheVthcnJheWluZGV4XS5jb21wbGV0ZWQgPSB1cGRhdGVDb21wbGV0ZWQoY2hlY2tib3gpO1xyXG4gICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgZGVzY1RleHRhcmVhcy5mb3JFYWNoKCh0ZXh0YXJlYSkgPT4ge1xyXG4gICAgaWYgKHRleHRhcmVhLmdldEF0dHJpYnV0ZSgnbGlzdGVuZXInKSAhPT0gdHJ1ZSkgdGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4gdXBkYXRlRGVzY3JpcHRpb24oZS50YXJnZXQuZGF0YXNldC50YSwgdGV4dGFyZWEudmFsdWUpKTtcclxuICB9KTtcclxufTtcclxuXHJcbi8vIEVYUE9SVFNcclxuZXhwb3J0IGNvbnN0IHJlbmRlckxpc3QgPSAoKSA9PiB7XHJcbiAgdXBkYXRlS2V5cygpO1xyXG4gIGxpc3RBcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBsaXN0Q29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYFxyXG4gICAgICA8bGkgaWQ9XCIke2VsZW1lbnQuaW5kZXhWYWx9XCI+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzPVwiY2hlY2tib3hcIiB0eXBlPVwiY2hlY2tib3hcIj5cclxuICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJkZXNjXCIgbWF4bGVuZ3RoPVwiMjU1XCIgZGF0YS10YT1cIiR7ZWxlbWVudC5pbmRleFZhbH1cIj4ke2VsZW1lbnQuZGVzY3JpcHRpb259PC90ZXh0YXJlYT5cclxuICAgICAgICA8aSBjbGFzcz1cIm1vdmUgZmEtc29saWQgZmEtZWxsaXBzaXMtdmVydGljYWxcIj48L2k+XHJcbiAgICAgICAgPGkgY2xhc3M9XCJlcmFzZSBmYS1zb2xpZCBmYS10cmFzaFwiIGRhdGEtaWQ9XCIke2VsZW1lbnQuaW5kZXhWYWx9XCI+PC9pPiAgIFxyXG4gICAgICA8L2xpPlxyXG4gICAgYCk7XHJcbiAgfSk7XHJcbiAgY3JlYXRlTGlzdGVuZXJzKCk7XHJcbiAgY29uc3QgcmVtb3ZlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lcmFzZScpO1xyXG4gIHJlbW92ZUJ0bnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XHJcbiAgICBpZiAoYnV0dG9uLmdldEF0dHJpYnV0ZSgnbGlzdGVuZXInKSAhPT0gdHJ1ZSkge1xyXG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGNsZWFyTGlzdCgpO1xyXG4gICAgICAgIGZpbHRlckxpc3RJdGVtKCtlLnRhcmdldC5kYXRhc2V0LmlkKTtcclxuICAgICAgICByZW5kZXJMaXN0KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgY2xlYXJDb21wbGV0ZWQgPSAoKSA9PiB7XHJcbiAgY2xlYXJTZWxlY3RlZCgpO1xyXG4gIGNsZWFyTGlzdCgpO1xyXG4gIHJlbmRlckxpc3QoKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRUb0xpc3QgPSAoZGVzYykgPT4ge1xyXG4gIHB1c2hMaXN0SXRlbShkZXNjKTtcclxuICBjbGVhckxpc3QoKTtcclxuICByZW5kZXJMaXN0KCk7XHJcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9