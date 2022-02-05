import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsComponent } from './comments.component';
import { SingleCommentComponent } from './components/single-comment/single-comment.component';
import { AddCommentComponent } from './components/add-comment/add-comment.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';


@NgModule({
  declarations: [
    CommentsComponent,
    SingleCommentComponent,
    AddCommentComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    NgxSkeletonLoaderModule,
  ]
})
export class CommentsModule { }
