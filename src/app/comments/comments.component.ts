import {Component, OnInit} from '@angular/core';
import { skip } from 'rxjs';
import { CommentModel } from './models/comments.model';
import { UserModel } from './models/user.model';
import { FacadeService } from './services/facade.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  comments: CommentModel[] = [];
  currentUser: UserModel | null = null;
  deleteModalShow: boolean = false;
  commentToDelete: CommentModel | undefined;
  commentToDeleteReplyTo: CommentModel | undefined;
  replyDeleteMode: boolean = false;

  constructor(private facade: FacadeService) { }

  ngOnInit(): void {
    this.setSubscribers();
    this.loadCurrentUser();
    this.loadComments();
  }

  setSubscribers(): void {
    this.facade.getComments().pipe(skip(1)).subscribe(
      (comments) => {
        this.comments = comments;
        this.sortComments();
      }
    );
    this.facade.getCurrentUser$().pipe(skip(1)).subscribe(
      (user) => {
        this.currentUser = user;
      }
    );
  }

  loadComments(): void {
    this.facade.loadComments();
  }

  loadCurrentUser(): void {
    this.facade.loadCurrentUser();
  }

  counter(i: number) {
    return new Array(i);
  }

  editComment(comment: CommentModel): void {
    this.facade.editComment(comment);
  }

  addComment(comment: CommentModel) {
    this.facade.addComment(comment);
  }

  deleteComment() {
    if(this.replyDeleteMode && this.commentToDeleteReplyTo && this.commentToDelete){
      const index = this.commentToDeleteReplyTo.replies.findIndex(c => c.id === this.commentToDelete?.id);
      this.commentToDeleteReplyTo.replies.splice(index, 1);
      this.facade.editComment(this.commentToDeleteReplyTo)
    }else if(this.commentToDelete) {
      this.facade.deleteComment(this.commentToDelete);
    }
  }

  showDeleteModal() {
    this.deleteModalShow = true;
  }

  hideDeleteModal() {
    this.deleteModalShow = false;
  }

  setToDeleteComment(comment: CommentModel){
    this.commentToDelete = comment;
    this.commentToDeleteReplyTo = undefined;
    this.replyDeleteMode = false;
    this.showDeleteModal();
  }

  setToDeleteReply($event: CommentModel[]){
    this.commentToDelete = $event[0];
    this.commentToDeleteReplyTo = $event[1];
    this.replyDeleteMode = true;
    this.showDeleteModal();
  }

  reply(comment: CommentModel, replyToComment: CommentModel) {
    comment.replyTo = replyToComment;
    this.facade.reply(comment);
  }

  sortComments() {
    this.comments.sort((a, b) => {
      return (a.score <= b.score) ? 1 : -1;
    });
  }

  onCloseDeleteModal(deleteConfirmed: boolean){
    if(deleteConfirmed){
      this.deleteComment();
    }
    this.hideDeleteModal();
  }

}
