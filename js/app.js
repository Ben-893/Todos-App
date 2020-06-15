
let todoList = {
  todos: [], //A list of todos.
  displayTodos: function() { //It should have a function to display todos.
    console.log(this.todos);
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
  }
};