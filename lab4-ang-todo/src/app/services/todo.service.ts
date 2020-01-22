import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
// import { TodosComponent } from '../components/todos/todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }

  getTodos() {
    return [
      {
      id: 1,
      title:'include component called todo',
      completed:false
    },
    {
      id: 2,
      title:'include a todo interface',
      completed:false
    },
    {
      id: 3,
      title:'component must add an array ',
      completed:false
    },
    {
      id: 4,
      title:'ngFor directive must be used ',
      completed:false
    },
    {
      id: 5,
      title:'able to add dynamically style todo items (strikethrough)',
      completed:false
    },
    {
      id: 6,
      title:'ngIf directive must be used to remove button',
      completed:false
    },
    {
      id: 7,
      title:'X-buttons, complete-buttons,add-buttons',
      completed:false
    },
    {
      id: 8,
      title:'user can add items ',
      completed:false
    },
    {
      id: 9,
      title:'user can filter list ',
      completed:false
    },
    {
      id: 10,
      title:'user can remove items, by clicking the "x" ',    
        completed:false
    },
    {
      id: 11,
      title:'user can mark items complete by clicking the "complete" button',
      completed:false
    },
    {
      id: 12,
      title:'verify that it meets all tests ',
      completed:false
    }
  ]
  }
}
