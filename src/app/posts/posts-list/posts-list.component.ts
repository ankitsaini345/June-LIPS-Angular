import {
  Component, OnInit, Input,
  EventEmitter, Output
} from '@angular/core';
import { IPosts } from '../iposts';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  @Input() postsList: Array<IPosts>;

  @Output() editSelected = new EventEmitter<IPosts>();

  constructor() { }

  ngOnInit() {
  }

  edit(post: IPosts) {
    this.editSelected.emit(post);
  }

}
