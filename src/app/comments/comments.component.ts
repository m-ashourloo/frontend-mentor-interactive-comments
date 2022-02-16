import { Component, OnInit } from '@angular/core';
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

  pleaseEditComment(comment: CommentModel): void {
    this.facade.editComment(comment);
  }

  addComment(comment: CommentModel) {
    this.facade.addComment(comment);
  }

  deleteComment(comment: CommentModel) {
    this.facade.deleteComment(comment);
  }

  reply(comment: CommentModel) {
    this.facade.reply(comment);
  }
}
