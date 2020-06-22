
let todoList = {
  todos: [], //A list of todos.
  displayTodos: function() { //It should have a function to display todos.
    if (this.todos.length === 0) {
      console.log('The list is empty, you have nothing you need to do!'); //Added a condition to to check whether or not the array is empty.
    } else {
      console.log('My Todos:');
      for (let i = 0; i < this.todos.length; i++) { //Created a 'for' loop to itterate through the elements of the todos array.
        if (this.todos[i].completed === true) { //Added a conditional statement to display a check mark on elements marked 'completed', or vice-vera.
          console.log('(x)', this.todos[i].todoText);
        } else {
          console.log('( )', this.todos[i].todoText);
        }
      }
    }
  },
  addTodo: function(todoTextValue) { //It should have a function to add todos.
    this.todos.push({
      todoText: todoTextValue,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoTextValue) { //It should have a function to change todos.
    this.todos[position].todoText = todoTextValue;
    this.displayTodos();
  },
  deleteTodo: function(position) { //It should have a function to delete todos.
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) { //It should have a function that changes the completed property from false to true.
    let todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
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
    this.displayTodos();
  }
};

let handlers = {
  displayTodos: () => {                                  
    todoList.displayTodos();
  },
  addTodo: () => {
    let addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
  },
  changeTodo: () => {
    let changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    let changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value)
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
  },
  deleteTodo: () => {
    let deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = ''
  },
  toggleCompleted: () => {
    let toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = ''
  },
  toggleAll: () => {
    todoList.toggleAll();
  }
};

/* Refacored the code that was handling the buttons, and created a 'handlers' object
   to hold the 'todolist' functions so my html buttons 
   can have access to them. */