import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
@Input() getTitle:string;
@Input() getThought:string;

  constructor() { }

  ngOnInit() {
  }

}
