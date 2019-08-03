import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IPosts } from '../iposts';
import { tap } from 'rxjs/operators';


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

  addPost(post: IPosts) {
    return this.http.post<IPosts>
      ('https://jsonplaceholder.typicode.com/posts',
        post);
  }

}
