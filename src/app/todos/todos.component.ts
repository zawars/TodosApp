import {Component, OnInit} from '@angular/core';
import {TodoService} from "../todo.service"

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  providers: [TodoService]
})
export class TodosComponent implements OnInit {
  todos;
  addText;
  appState = "default";
  oldText;

  constructor(private _todoservice: TodoService) {
    console.log("Todos Component is now loaded.");
    if (_todoservice.getTodos() != null || _todoservice.getTodos() != undefined)
      this.todos = _todoservice.getTodos();
  }

  ngOnInit() {

  }

  addTodos() {
    var newTodo = {
      text: this.addText
    };
    this.todos.push(newTodo);
    this.addText = "";
    this._todoservice.addTodo(this.todos);
  }

  deleteTodo(todoText) {
    for (var i = 0; i < this.todos.length; i++) {
      if (this.todos[i].text == todoText) {
        this.todos.splice(i, 1);
      }
    }
    this._todoservice.deleteTodo(this.todos);
  }

  editTodo(todo) {
    this.appState = "edit";
    this.addText = todo.text;
    this.oldText = todo.text;
  }

  updateTodo() {
    if (this.oldText != this.addText && this.oldText != "") {
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].text == this.oldText) {
          this.todos[i].text = this.addText;
        }
      }
      this.addText = "";
      this.oldText = "";
      this.appState = "default";
    }
    this._todoservice.updateTodo(this.todos);
  }
}
