import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { CommentModel } from '../../models/comments.model';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-single-comment',
  templateUrl: './single-comment.component.html',
  styleUrls: ['./single-comment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleCommentComponent implements OnInit {
  @Input() comment: CommentModel;
  @Input() currentUser: UserModel | null;
  @Input() isReply: boolean;

  @Output() editCommentEvent = new EventEmitter<CommentModel>();
  @Output() editReplyEvent = new EventEmitter<CommentModel>();
  @Output() deleteReplyEvent = new EventEmitter<CommentModel[]>();
  @Output() deleteCommentEvent = new EventEmitter<CommentModel>();
  @Output() replyEvent = new EventEmitter<CommentModel>();

  editMode: boolean = false;
  replyMode: boolean = false;
  replyingTo: string | undefined = undefined;

  constructor() { }

  ngOnInit(): void {
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  toggleReplyMode(replyingTo: string) {
    this.replyMode = !this.replyMode;
    if(this.replyMode){
      this.replyingTo = replyingTo;
    }else{
      this.replyingTo = undefined;
    }
  }

  editComment() {
    this.editCommentEvent.emit(this.comment);
    this.editMode = false;
  }

  deleteComment() {
    this.deleteCommentEvent.emit(this.comment);
  }

  deleteReply(reply: CommentModel[]){
    this.deleteReplyEvent.emit([reply[0],this.comment]);
  }

  editReply(reply: CommentModel) {
    const index = this.comment.replies.findIndex(c => c.id === reply.id);
    this.comment.replies[index] = reply;
    this.editComment();
  }

  reply(reply: CommentModel){
    this.replyMode = false;
    this.replyEvent.emit(reply);
  }

  emitEditReply() {
    this.editReplyEvent.emit(this.comment);
    this.editMode = false;
  }

  emitDeleteReply(){
    this.deleteReplyEvent.emit([this.comment]);
  }

  increaseScore(){
    this.comment.score++;
    if(this.isReply){
      this.emitEditReply();
    }
    else{
      this.editComment();
    }
  }

  decreaseScore(){
    this.comment.score--;
    if(this.isReply){
      this.emitEditReply();
    }
    else{
      this.editComment();
    }
  }



}
