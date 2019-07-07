import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPosts } from '../iposts';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<IPosts[]>
    ('https://jsonplaceholder.typicode.com/posts');
  }

}
