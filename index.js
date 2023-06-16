function addNewTask() {
    const newTask = inputField.value;
    const newLi = document.createElement('li');
    newLi.innerHTML = `
      <input type="checkbox">
      <label>${newTask}</label>
      <button class="complete-btn">Finish</button>
      <button class="delete-btn">Delete</button>
    `;
    taskList.appendChild(newLi);
    inputField.value = '';
  
    // Add event listeners to the newly created task
    const checkboxes = newLi.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        const parentLi = checkbox.parentElement;
        if (checkbox.checked) {
          parentLi.classList.add('completed');
        } else {
          parentLi.classList.remove('completed');
        }
      });
    });
  
    const deleteBtn = newLi.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
      const parentLi = deleteBtn.parentElement;
      parentLi.remove();
    });
  }
  
  const addBtn = document.querySelector('button');
  const inputField = document.querySelector('input[type="text"]');
  const taskList = document.querySelector('#task');
  
  addBtn.addEventListener('click', addNewTask);