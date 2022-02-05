import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CommentModel } from '../models/comments.model';

@Injectable({
  providedIn: 'root'
})
export class StatesService {
    private comments$ = new BehaviorSubject<CommentModel[]>([]);

    public getComments(): Observable<CommentModel[]> {
        return this.comments$.asObservable();
    }

    public updateComments(comments: CommentModel[]): void {
        this.comments$.next(comments);
    }

    public addComment(comment: CommentModel): void {
        const comments = this.comments$.getValue();
        comments.push(comment);
        this.comments$.next(comments);
    }

    public deleteComment(comment: CommentModel): void {
        const comments = this.comments$.getValue();
        const index = comments.findIndex(c => c.id === comment.id);
        comments.splice(index, 1);
        this.comments$.next(comments);
    }

    public updateSingleComment(comment: CommentModel): void {
        const comments = this.comments$.getValue();
        const index = comments.findIndex(c => c.id === comment.id);
        comments[index] = comment;
        this.comments$.next(comments);
    }

}
