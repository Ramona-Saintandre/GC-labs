import { Component, OnInit } from '@angular/core';
import {todo} from '../../models/todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:todo[];
  constructor() { }

  ngOnInit() {
    this.todos = [
      {
      id: 1,
      title:'Todo One',
      completed:false
    },
    {
      id: 2,
      title:'Todo One',
      completed:false
    },
    {
      id: 3,
      title:'Todo One',
      completed:false
    },
    {
      id: 4,
      title:'Todo One',
      completed:false
    }
  ]
  }
}

