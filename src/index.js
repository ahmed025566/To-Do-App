import './style.css';

const tasksDiv = document.querySelector('.to-do-list');

const arrayOfTassks = [
  { description: 'list structure', completed: false, index: 0 },
  { description: 'Add & Remove', completed: false, index: 1 },
  { description: 'Make the list interactive', completed: false, index: 2 },
  { description: 'Enjoy your weekend', completed: false, index: 3 },
];

const displayTasks = () => {
  tasksDiv.innerHTML = '';
  arrayOfTassks.forEach((task) => {
    const div = document.createElement('div');
    div.className = 'task';
    div.setAttribute('data-id', task.index);
    const check = document.createElement('span');
    check.className = 'check';
    check.innerHTML = '<i class="fa-regular fa-square"></i>';
    div.append(check);
    const taskText = document.createElement('input');
    taskText.className = 'text';
    taskText.type = 'text';
    taskText.value = task.description;
    taskText.setAttribute('readonly', 'readonly');
    div.append(taskText);
    const dragbtn = document.createElement('span');
    dragbtn.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';
    dragbtn.className = 'drag';
    div.append(dragbtn);
    tasksDiv.append(div);
  });
  const clear = document.createElement('div');
  clear.className = 'clear';
  const link = document.createElement('a');
  link.append(document.createTextNode('Clear all completed'));
  clear.append(link);
  tasksDiv.append(clear);
};

window.addEventListener('DOMContentLoaded', () => {
  displayTasks();
});
