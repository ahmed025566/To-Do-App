import './style.css';
import { addTask, displayTasks , UI } from './functions.js';

const submit = document.querySelector('.submit');
submit.addEventListener('click', (e) => {
  e.preventDefault();
  addTask();
});

window.addEventListener("DOMContentLoaded", () => {
  displayTasks();
 
  
});