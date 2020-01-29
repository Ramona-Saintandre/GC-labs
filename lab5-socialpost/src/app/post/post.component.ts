import { Component, OnInit , EventEmitter, Output, Input} from '@angular/core';
import { IPost } from '../interface/post/Ipost';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
// https://www.codementor.io/@yomateo/angular7-101-input-output-os4et83m5

// hope this is  the right place for the interface
@Input()
post : IPost;

  constructor() { }

  ngOnInit() {
  }
  // need deletion 
  deletedPost(){
    this.deletedPost.emit();
  }

}
