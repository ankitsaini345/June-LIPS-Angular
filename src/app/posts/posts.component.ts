import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from './service/posts.service';
import { Subscription, Observable } from 'rxjs';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  isValid = true;
  sub: Subscription;

  posts$ = this.postsService.getPosts$;

  constructor(private postsService: PostsService) { }

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
