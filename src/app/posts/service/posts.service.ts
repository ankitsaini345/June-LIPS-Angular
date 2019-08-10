import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IPosts } from '../iposts';
import { tap, shareReplay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts() {
    const header = new HttpHeaders()
      .set('teskHeader', 'dfhkdsjhfkjh3253463');
    return this.http.get<IPosts[]>
      ('https://jsonplaceholder.typicode.com/posts',
        { headers: header }).pipe(
          tap(data => console.log(data))
        );
  }

  getPosts$ = this.http.get<IPosts[]>
    ('https://jsonplaceholder.typicode.com/posts')
    .pipe(
      tap(data => console.log(data)),
      shareReplay(1)
    );

  addPost(post: IPosts) {
    return this.http.post<IPosts>
      ('https://jsonplaceholder.typicode.com/posts',
        post);
  }

}
