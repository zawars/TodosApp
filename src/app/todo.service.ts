import {Injectable} from '@angular/core';
import {InitTodos} from "./init-todos";

@Injectable()
export class TodoService extends InitTodos {
  todos : any;
  constructor() {
    super();
    console.log("Todo service initialized");
    this.load();
  }

  getTodos() {
    var todos = JSON.parse(localStorage.getItem("todos"));
    return todos;
  }

  addTodo(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  deleteTodo(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  updateTodo(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
}
