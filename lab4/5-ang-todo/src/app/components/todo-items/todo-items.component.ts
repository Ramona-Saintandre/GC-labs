import { Component, OnInit , Input , EventEmitter, Output} from '@angular/core';
import {todo} from 'src/app/models/Todo';
@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {
  @Input() todo:todo; 
  @Input() todos:todo;
  @Input() id:number;
  @Output() deleteTodo: EventEmitter<todo> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

// setting dynamic class per Brad Traversy

setClass() {
  let classes = {
    todo: true,
    'is-complete':this.todo.completed
  }
  return classes;
}
onToggle(todo){
 todo.completed = !todo.completed;
}
onDelete(todo){
  this.deleteTodo.emit(todo);
  // console.log('delete')
}
}
