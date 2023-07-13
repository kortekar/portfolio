document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('#tasks');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const task = input.value;
      if (!task) {
        alert("Please input the task");
        return;
      }
      const task_el = document.createElement("div");
      task_el.classList.add('task');
  
      const task_content_el = document.createElement('div');
      task_content_el.classList.add('content');
  
      task_el.appendChild(task_content_el);
  
      const task_input_el = document.createElement('input');
      task_input_el.classList.add('text');
      task_input_el.type = 'text';
      task_input_el.value = task;
      task_input_el.readOnly = true;
  
      task_content_el.appendChild(task_input_el);
  
      const task_actions_el = document.createElement('div');
      task_actions_el.classList.add('actions');
  
      const edit_button_el = document.createElement('button');
      edit_button_el.classList.add('edit');
      edit_button_el.innerHTML = 'Edit';
  
      const delete_button_el = document.createElement('button');
      delete_button_el.classList.add('delete');
      delete_button_el.innerHTML = 'Delete';
  
      task_actions_el.appendChild(edit_button_el);
      task_actions_el.appendChild(delete_button_el);
      task_el.appendChild(task_actions_el);
  
      list_el.appendChild(task_el);
      input.value = '';
  
      edit_button_el.addEventListener('click', () => {
        if (edit_button_el.innerHTML.toLowerCase() === 'edit') {
          task_input_el.removeAttribute('readonly');
          task_input_el.focus();
          edit_button_el.innerHTML = 'Done';
        } else {
          task_input_el.setAttribute('readonly', 'readonly');
          edit_button_el.innerHTML = 'Edit';
        }
      });
  
      delete_button_el.addEventListener('click', () => {
        list_el.removeChild(task_el);
      });
    });
  
    const editButtons = document.querySelectorAll('.edit');
    editButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const taskEl = button.closest('.task');
        const inputEl = taskEl.querySelector('.text');
        const editButtonEl = taskEl.querySelector('.edit');
  
        if (editButtonEl.innerHTML.toLowerCase() === 'edit') {
          inputEl.removeAttribute('readonly');
          inputEl.focus();
          editButtonEl.innerHTML = 'Done';
        } else {
          inputEl.setAttribute('readonly', 'readonly');
          editButtonEl.innerHTML = 'Edit';
        }
      });
    });
  
    const deleteButtons = document.querySelectorAll('.delete');
    deleteButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const taskEl = button.closest('.task');
        list_el.removeChild(taskEl);
      });
    });
  });
  