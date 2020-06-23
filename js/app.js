
let todoList = {
  todos: [], //A list of todos.
  addTodo: function(todoTextValue) { //It should have a function to add todos.
    this.todos.push({
      todoText: todoTextValue,
      completed: false
    });
  },
  changeTodo: function(position, todoTextValue) { //It should have a function to change todos.
    this.todos[position].todoText = todoTextValue;
  },
  deleteTodo: function(position) { //It should have a function to delete todos.
    this.todos.splice(position, 1);
  },
  toggleCompleted: function(position) { //It should have a function that changes the completed property from false to true.
    let todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  toggleAll: function() {
    let totalTodos = this.todos.length;
    let completedTodos = 0;
    //Get the number of completed todos.
    for (let i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }
    // If everything's true, make everything false.
    if (completedTodos === totalTodos) {
      for (let i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    } else { //Otherwise, make everything true.
      for (let i = 0; i < totalTodos; i++)
        this.todos[i].completed = true;
    }
  }
};

let handlers = {
  addTodo: () => {
    let addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo: () => {
    let changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    let changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value)
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo: () => {
    let deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = ''
    view.displayTodos();
  },
  toggleCompleted: () => {
    let toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = ''
    view.displayTodos();
  },
  toggleAll: () => {
    todoList.toggleAll();
    view.displayTodos();
  }
};

let view = {  //Created a view object to render the todo list to the webpage in the form of bullet points, rather than the console.
  displayTodos: () => {     //removed the original 'displayTodos' method from the top of the code, and instead put an updated version of the method into the 'view' object.
    let todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    for (let i = 0; i < todoList.todos.length; i++) {
      let todoLi = document.createElement('li');
      let todo = todoList.todos[i];
      let todoTextWithCompletion = '';
      
      if (todo.completed === true) {
        todoTextWithCompletion = `(x) ${todo.todoText}`;
      } else {
        todoTextWithCompletion = `( ) ${todo.todoText}`;
      }

      todoLi.textContent = todoTextWithCompletion;
      todosUl.appendChild(todoLi);
    }
  }
};