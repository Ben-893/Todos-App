
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
    
    this.todos.forEach(function(todo) { //Get the number of completed todos.
      if (todo.completed === true) { //Refactored the 'toggelAll' method with 'forEach' methods for iteration, rather than using 'for' loops.
        completedTodos++;
      }
    });

    this.todos.forEach(function(todo) { //If everything's true mark it false, otherwise mark everything true.
      if (completedTodos === totalTodos) {
        todo.completed = false;
      } else {
        todo.completed = true;
        }
      });
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
  deleteTodo: (position) => { //Refactored the deleteTodo method by removing 2 lines, and giving the method a paramater of 'position'.
    todoList.deleteTodo(position);
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

let view = {
  displayTodos: function() {
    let todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';

    todoList.todos.forEach(function(todo, position) {  //Replaced the original 'for' loop with a 'forEach' method.
      let todoLi = document.createElement('li');
      let todoTextWithCompletion = '';
      
      if (todo.completed === true) {
        todoTextWithCompletion = `(x) ${todo.todoText}`;
      } else {
        todoTextWithCompletion = `( ) ${todo.todoText}`;
      }

      todoLi.id = position; //Assigns each element of the 'todos' array an id equivalent to it's position in the array.
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton()); //Assigns the 'createDeleteButton' element to each '<li>' tag created by 'todoLi'.
      todosUl.appendChild(todoLi);
    }, this); //Needed to add the 'this' keyword here to get the 'this' inside the callback function to refer to the 'view' object.
  },
  createDeleteButton: function() {  //Added a 'createDeleteButton' property which creates a button element and assigns it a class of 'deleteButton'.
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  },
  setUpEventListeners: function() {
    let todosUl = document.querySelector('ul'); //Created a new 'todosUl' variable to store a reference to the '<ul>' tags.

    todosUl.addEventListener('click', (event) => { //Added an event listener on the '<ul>' tags.

      let elementClicked = event.target; //Assigned the 'target' (deleteButton) to a new variable 'elementClicked'.

      if (elementClicked.className === 'deleteButton') { //If the element that's clicked on's className is equal to 'deleteButton', run the 'handlers.deleteTodo' function on it, and delete the whole '<li>' tag.
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
    });
  }
};

view.setUpEventListeners(); //Calls the 'setUpEventListeners' method in the global scope.