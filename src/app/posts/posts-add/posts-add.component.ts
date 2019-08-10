import {
  Component, OnInit, Input,
  Output, EventEmitter
} from '@angular/core';
import { IPosts } from '../iposts';
// import { PostsService } from '../service/posts.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-posts-add',
  templateUrl: './posts-add.component.html',
  styleUrls: ['./posts-add.component.css']
})
export class PostsAddComponent implements OnInit {

  @Input() posts: IPosts;

  @Output() addPost = new EventEmitter<IPosts>();
  @Output() editPost = new EventEmitter<IPosts>();

  constructor() { }

  ngOnInit() {
  }

  submitPost(postForm: NgForm) {
    this.posts.id > 0 ?
      this.editPost.emit(this.posts) :
      this.addPost.emit(this.posts);

    postForm.resetForm();
  }

}
