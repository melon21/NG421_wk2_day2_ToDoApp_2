import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { ITodo } from '../interfaces/itodo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']

})
export class TodoComponent implements OnInit {
@Input() todo:  ITodo;
  constructor(private service: TodoService) { }

  ngOnInit() {
  }
deleteTodo(){
this.service.deleteTodo(this.todo);
  }
}
