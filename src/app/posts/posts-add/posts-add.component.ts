import { Component, OnInit } from '@angular/core';
import { IPosts } from '../iposts';
import { PostsService } from '../service/posts.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-posts-add',
  templateUrl: './posts-add.component.html',
  styleUrls: ['./posts-add.component.css']
})
export class PostsAddComponent implements OnInit {

  posts: IPosts = {
    body : '',
    id : 0,
    title : '',
    userId : 0
  };

  constructor(private postService: PostsService) { }

  ngOnInit() {
  }

  addpost(postForm: NgForm) {
    this.postService.addPost(this.posts).subscribe(
      (data) => console.log(data)
    );
    postForm.resetForm();
    console.log(this.posts);
  }

}
