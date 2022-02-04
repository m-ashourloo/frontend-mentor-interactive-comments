import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsComponent } from './comments.component';
import { SingleCommentComponent } from './single-comment/single-comment.component';
import { AddCommentComponent } from './add-comment/add-comment.component';


@NgModule({
  declarations: [
    CommentsComponent,
    SingleCommentComponent,
    AddCommentComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule
  ]
})
export class CommentsModule { }
