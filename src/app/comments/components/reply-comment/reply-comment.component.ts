import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserModel} from "../../models/user.model";
import {CommentModel} from "../../models/comments.model";

@Component({
  selector: 'app-reply-comment',
  templateUrl: './reply-comment.component.html',
  styleUrls: ['./reply-comment.component.scss']
})
export class ReplyCommentComponent implements OnInit {

  @Input() currentUser: UserModel | null;
  @Input() replyTo: CommentModel;
  @Input() replyingTo: string | undefined;
  @Output() replyEvent = new EventEmitter<CommentModel>();

  comment: CommentModel;
  content: string;

  constructor() { }

  ngOnInit(): void {
  }

  reply(){
    this.comment = {
      score: 0,
      createdAt: 'Just now',
      user: this.currentUser as UserModel,
      replies: [],
      content: this.content,
      id: Math.round((Math.random() + 1) * 500),
      replyTo: this.replyTo,
      replyingTo: this.replyingTo,
    }
    this.replyEvent.emit(this.comment);
    this.content = '';
  }

}
