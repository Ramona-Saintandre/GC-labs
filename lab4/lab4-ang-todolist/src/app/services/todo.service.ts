import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
// import { TodosComponent } from '../components/todos/todos.component';
import { todo } from '../models/Todo'
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  // TodosUrl:'https://jsonplaceholder.typicode.com/todos';

  constructor(private http:HttpClient) { }

  getTodos() {
    
    return [
      {
      title:'include component called todo',
      completed:false
    },
    {
      title:'include a todo interface',
      completed:false
    },
    {
      title:'component must add an array ',
      completed:false
    },
    {
      title:'ngFor directive must be used ',
      completed:false
    },
    {
      title:'able to add dynamically style todo items (strikethrough)',
      completed:false
    },
    {
      title:'ngIf directive must be used to remove button',
      completed:false
    },
    {
      title:'X-buttons, complete-buttons,add-buttons',
      completed:false
    },
    {
      title:'user can add items ',
      completed:false
    },
    {
      title:'user can filter list ',
      completed:false
    },
    {
      title:'user can remove items, by clicking the "x" ',    
        completed:false
    },
    {
      title:'user can mark items complete by clicking the "complete" button',
      completed:false
    },
    {
      title:'verify that it meets all tests ',
      completed:false
    }
  ]
  }
}
