import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { PostsListComponent } from './posts-list/posts-list.component';

@NgModule({
  declarations: [PostsComponent, PostsListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    PostsRoutingModule
  ],
  exports: [PostsComponent]
})
export class PostsModule { }
