import './style.css';
import { addTask, displayTasks } from './functions.js';

const submit = document.querySelector('.submit');
submit.addEventListener('click', (e) => {
  e.preventDefault();
  addTask();
});
window.onload = displayTasks();