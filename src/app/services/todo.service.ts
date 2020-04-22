import { Injectable } from '@angular/core';
import { ITodo } from '../interfaces/ITodo';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoList: ITodo[] = [
    { id: 1, title: 'Install Angular CLI', description: ' ', isDone: false },
  ];
  todoId = 0;

  constructor(private modalService: NgbModal) { }

  addTodo(title: string): void {
    this.todoList.push({
      id: this.todoId++,
      title,
      description: '',
      isDone: false,
    });
  }

 async deleteTodo(todo: ITodo) {
 //show
 const modal = this.modalService.open(ConfirmationModalComponent);
 const component: ConfirmationModalComponent = modal.componentInstance;
 component.modalInstance = modal;

 const result = await modal.result;

 //if the result is yes
 if (result === "yes") {
   const index = this.todoList.findIndex((todoItem) => todoItem === todo);
   this.todoList.splice(index, 1);
 }
  }

  getTodos(): ITodo[] {
    return this.todoList;
  }
}