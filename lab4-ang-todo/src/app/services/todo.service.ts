import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }
  getTodos(){
    return[
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
      title:'two inputs ',
      completed:false
    }
  ]
  }
}
