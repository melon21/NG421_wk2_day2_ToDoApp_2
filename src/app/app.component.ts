import { Component,OnInit } from '@angular/core';
import { ITodo } from './interfaces/itodo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = "Todos";
    todoId: number = 0;
    todoList: ITodo [] = [];
    todoTitle: string;
  ngOnInit() {
    this.todoTitle = '';
    this.todoList = [
      // example of how to make an item in todo list
     // { title: 'Install Angular CLI', isDone: false },
    
    ];
  }
 
  deleteTodo(todo:any) {
    const index = this.todoList.findIndex(todoItem => todoItem === todo);
    this.todoList.splice(index, 1);
  }

}
