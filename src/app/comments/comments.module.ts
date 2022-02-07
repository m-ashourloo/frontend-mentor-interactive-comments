import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsComponent } from './comments.component';
import { SingleCommentComponent } from './components/single-comment/single-comment.component';
import { AddCommentComponent } from './components/add-comment/add-comment.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { FormsModule } from '@angular/forms';
import { ReplyCommentComponent } from './components/reply-comment/reply-comment.component';


@NgModule({
  declarations: [
    CommentsComponent,
    SingleCommentComponent,
    AddCommentComponent,
    ReplyCommentComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    NgxSkeletonLoaderModule,
    FormsModule,
  ]
})
export class CommentsModule { }
