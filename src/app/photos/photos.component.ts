import { Component, OnInit } from '@angular/core';
import { PhotosService } from './service/photos.service';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  totalData = 0;

  constructor(private photosService: PhotosService) { }

  ngOnInit() {
    this.photosService.getPhotos().subscribe(
      (event) => {
        switch (event.type) {
          case HttpEventType.ResponseHeader:
            console.log(event)
            break;
          case HttpEventType.DownloadProgress:
            this.totalData = this.totalData +
              event.loaded;
            console.log(event.total);
            break;
          case HttpEventType.Response:
            console.log(event.body);
        }
      }
    )
  }

}
