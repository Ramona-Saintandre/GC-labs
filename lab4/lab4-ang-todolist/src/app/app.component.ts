import { Component } from '@angular/core';

// this is the decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'lab4-ang-todo';
  
}
