import { Component, OnInit } from '@angular/core';
import { ITodo } from '../interfaces/itodo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
todoList: ITodo[] = [];
  constructor(private list: TodoService) {

   }

  ngOnInit() {
this.todoList = this.list.getTodos();
  }

}
