'use strict';

class Todo {
  constructor(form, input, todoList, todoCompleted) {
    this.form = document.querySelector(form);
    this.input = document.querySelector(input);
    this.todoList = document.querySelector(todoList);
    this.todoCompleted = document.querySelector(todoCompleted);
    this.todoDate = new Map(JSON.parse(localStorage.getItem('toDoList')));
  }

  addToStorage() {
    localStorage.setItem('toDoList', JSON.stringify([...this.todoDate]));
  }

  render() {
    this.todoList.textContent = '';
    this.todoCompleted.textContent = '';
    this.todoDate.forEach(this.createItem, this);
    this.addToStorage();
  }

  createItem(todo) {
    const li = document.createElement('li');
    li.classList.add('todo-item');
    li.key = todo.key;

    li.insertAdjacentHTML('beforeend', `
      <span class="text-todo">${todo.value}</span>
      <div class="todo-buttons">
        <button class="todo-remove"></button>
        <button class="todo-complete"></button>
      </div>
    `);

    if (todo.completed) {
      this.todoCompleted.append(li);
    } else {
      this.todoList.append(li);
    }
  }

  addTodo(e) {
    e.preventDefault();

    if (this.input.value.trim()) {
      const newTodo = {
        value: this.input.value,
        completed: false,
        key: this.generateKey()
      };
      this.todoDate.set(newTodo.key, newTodo);
      this.input.value = '';
      this.render();
    } else {
      alert('Нельзя добавить пустое дело!');
    }

  }

  generateKey() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  deleteItem(todoKey) {
    for (const key of this.todoDate.keys()) {
      if (key === todoKey) {
        this.todoDate.delete(todoKey);
        this.render();
      }
    }
  }

  completedItem(todoKey) {

    this.todoDate.forEach((item, key) => {
      if (key === todoKey) {
        item.completed = !item.completed;
        this.render();
      }
    });
  }

  handler() {
    const todoContainer = document.querySelector('.todo-container');

    todoContainer.addEventListener('click', event => {
      const target = event.target;
      const currentItem = target.closest('.todo-item');


      if (target.className === 'todo-remove') {
        const todoKey = currentItem.key;
        this.deleteItem(todoKey);
      }
      if (target.className === 'todo-complete') {
        const todoKey = currentItem.key;
        this.completedItem(todoKey);
      }

    });

  }

  init() {
    this.form.addEventListener('submit', this.addTodo.bind(this));
    this.render();
    this.handler();
  }

}

const todo = new Todo('.todo-control', '.header-input', '.todo-list', '.todo-completed');

todo.init();
