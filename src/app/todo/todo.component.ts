import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']

})
export class TodoComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }
async deleteToDo(){
  const result = this.modalService.show()
}
}
