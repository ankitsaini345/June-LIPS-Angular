import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from './service/posts.service';
import { Subscription, Observable } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { IPosts } from './iposts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnDestroy {

  isValid = true;
  sub: Subscription;

  posts$: Observable<IPosts[]>;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    // this.postsService.getPosts()
    //   .pipe(
    //     takeWhile(() => this.isValid === true)
    //   ).subscribe(
    //     (data) => console.log(data)
    //   );
    this.posts$ = this.postsService.getPosts();
  }

  ngOnDestroy(): void {
    // if (this.sub) {
    console.log('Unsubscription called');
    //   this.sub.unsubscribe();
    // }
    this.isValid = false;
  }

}
