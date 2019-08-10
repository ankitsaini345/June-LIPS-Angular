import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from './service/posts.service';
import { Subscription, Observable } from 'rxjs';
import { IPosts } from './iposts';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  isValid = true;
  sub: Subscription;

  selectedRecord = {
    body: '',
    id: 0,
    title: '',
    userId: 0
  };

  posts$ = this.postsService.getPosts$;

  constructor(private postsService: PostsService) { }

  getSelectedPost(post: IPosts) {
    this.selectedRecord = post;
  }

  updatePost(post: IPosts) {
    this.postsService.editPost(post).subscribe(
      (data) => {
        console.log(data)
      }
    )
  }

  addPost(post: IPosts) {
    this.postsService.addPost(post).subscribe(
      (data) => {
        console.log(data)
      }
    )
  }

  // ngOnInit() {
  //   // this.postsService.getPosts()
  //   //   .pipe(
  //   //     takeWhile(() => this.isValid === true)
  //   //   ).subscribe(
  //   //     (data) => console.log(data)
  //   //   );
  //   this.posts$ = this.postsService.getPosts();
  // }

  // ngOnDestroy(): void {
  //   // if (this.sub) {
  //   console.log('Unsubscription called');
  //   //   this.sub.unsubscribe();
  //   // }
  //   this.isValid = false;
  // }

}
