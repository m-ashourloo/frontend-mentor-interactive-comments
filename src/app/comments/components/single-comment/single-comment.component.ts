import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { CommentModel } from '../../models/comments.model';
import { UserModel } from '../../models/user.model';
import {comment} from "postcss";

@Component({
  selector: 'app-single-comment',
  templateUrl: './single-comment.component.html',
  styleUrls: ['./single-comment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleCommentComponent implements OnInit {
  @Input() comment: CommentModel;
  @Input() currentUser: UserModel | null;
  @Output() editCommentEvent = new EventEmitter<CommentModel>();
  @Output() deleteCommentEvent = new EventEmitter<CommentModel>();
  @Output() replyEvent = new EventEmitter<CommentModel>();
  editMode: boolean = false;
  replyMode: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  toggleReplyMode() {
    this.replyMode = !this.replyMode;
  }

  editComment() {
    this.editCommentEvent.emit(this.comment);
    this.editMode = false;
  }

  increaseScore(){
    this.comment.score++;
    this.editComment();
  }

  decreaseScore(){
    this.comment.score--;
    this.editComment();
  }

  deleteComment() {
    this.deleteCommentEvent.emit(this.comment);
  }

  reply(reply: CommentModel){
    this.replyMode = false;
    this.replyEvent.emit(reply)
  }
}
