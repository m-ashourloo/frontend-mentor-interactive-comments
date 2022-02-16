import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentModel } from '../models/comments.model';
import { UserModel } from '../models/user.model';
import { ApiService } from './api.service';
import { StatesService } from './states.service';

@Injectable({
  providedIn: 'root'
})
export class FacadeService {

  constructor(private api: ApiService,
              private states: StatesService) { }

  public loadComments(): void {
    this.api.getComments().subscribe(
      (comments) => {
        this.states.updateComments(comments);
      });
  }

  public getComments(): Observable<CommentModel[]> {
    return this.states.getComments();
  }

  public addComment(comment: CommentModel): void{
    this.api.addComment(comment).subscribe(
      () => {
        this.states.addComment(comment);
      }
    );
  }

  public editComment(comment: CommentModel): void {
    this.api.editComment(comment).subscribe(
      () => {
        this.states.updateSingleComment(comment);
      }
    );
  }

  public deleteComment(comment: CommentModel){
    this.api.deleteComment(comment).subscribe(
      () => {
        this.states.deleteComment(comment);
      }
    );
  }

  public reply(comment: CommentModel){
    if(comment.replyTo?.replies === undefined){
      // @ts-ignore
      comment["replyTo"].replies = [];
    }
    comment.replyTo?.replies.push({
      id: comment.id,
      user: comment.user,
      replies: [],
      content: comment.content,
      score: comment.score,
      createdAt: comment.createdAt,
      replyingTo: comment.replyingTo,
    });
    this.editComment(comment.replyTo as CommentModel);
  }

  public getCurrentUser$(): Observable<UserModel | null> {
    return this.states.getCurrentUser$();
  }

  public loadCurrentUser(): void {
    this.api.getCurrentUser().subscribe(
      (user) => {
        this.states.setCurrentUser(user);
      }
    );
  }
}
