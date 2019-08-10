import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { IPhoto } from '../iphotos';
@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

  getPhotos() {
    const request = new HttpRequest('GET',
      'https://jsonplaceholder.typicode.com/photos',
      {
        reportProgress: true
      });
    return this.http.request<IPhoto[]>(request);
  }
}
