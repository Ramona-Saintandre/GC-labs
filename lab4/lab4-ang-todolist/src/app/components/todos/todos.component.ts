import { Component, OnInit } from '@angular/core';
import {todo} from '../../models/todo'
import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:todo[];
  constructor(private todoService:TodoService) { }


  // moved array over to todos.service.ts 

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  //   this.todos = [
  //     {
  //     id: 1,
  //     title:'include component called todo',
  //     completed:false
  //   },
  //   {
  //     id: 2,
  //     title:'include a todo interface',
  //     completed:false
  //   },
  //   {
  //     id: 3,
  //     title:'component must add an array ',
  //     completed:false
  //   },
  //   {
  //     id: 4,
  //     title:'ngFor directive must be used ',
  //     completed:false
  //   },
  //   {
  //     id: 5,
  //     title:'able to add dynamically style todo items (strikethrough)',
  //     completed:false
  //   },
  //   {
  //     id: 6,
  //     title:'ngIf directive must be used to remove button',
  //     completed:false
  //   },
  //   {
  //     id: 7,
  //     title:'X-buttons, complete-buttons,add-buttons',
  //     completed:false
  //   },
  //   {
  //     id: 8,
  //     title:'two inputs ',
  //     completed:false
  //   }
  // ]
  }
  deleteTodo(index){
    this.todos.splice(index,1);
   // this.todos = this.todos.filter(t => t.id !== todo.id);
}
addTodo(title:string) {
this.todos.push({title:title, completed:false})
this.todos = [...this.todos]
}
}
