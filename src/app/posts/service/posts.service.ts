import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IPosts } from '../iposts';
import { tap, shareReplay, map } from 'rxjs/operators';
import { BehaviorSubject, combineLatest } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  searchPostSubject$ = new BehaviorSubject<string>('');
  searchAction$ = this.searchPostSubject$.asObservable();

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

  searchPost$ = combineLatest([
    this.getPosts$,
    this.searchAction$
  ]).pipe(
    tap((data) => console.log(data)),
    map(
      ([posts, searchText]) =>
        posts.filter(post => post.title.includes(searchText))
    )
  );

  searchPost(searchText: string) {
    this.searchPostSubject$.next(searchText);
  }

  addPost(post: IPosts) {
    return this.http.post<IPosts>
      ('https://jsonplaceholder.typicode.com/posts',
        post);
  }

  editPost(post: IPosts) {
    return this.http.put<IPosts>
      ('https://jsonplaceholder.typicode.com/posts/'
        + post.id,
        post);
  }

}
