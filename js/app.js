
let todoList = {
  todos: [], //A list of todos.
  
  displayTodos: function() { //It should have a function to display todos.
    console.log(this.todos);
  },
  addTodo: function(todo) { //It should have a function to add todos.
    this.todos.push(todo)
    this.displayTodos();
  },
  changeTodo: function(position, newValue) { //It should have a function to change todos.
    this.todos[position] = newValue;
    this.displayTodos();
  },
  deleteTodo: function(position) { //It should have a function to delete todos.
    this.todos.splice(position, 1);
    this.displayTodos();
  }
};