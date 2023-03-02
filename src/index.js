import './style.css';
import { addTask, displayTasks, remove } from './functions.js';
import { complete, clearAllCompleted } from './complete.js';

const submit = document.querySelector('.submit');
submit.addEventListener('click', (e) => {
  e.preventDefault();
  addTask();
});

window.addEventListener('DOMContentLoaded', () => {
  displayTasks();
  remove();
  clearAllCompleted();
  complete();
});
