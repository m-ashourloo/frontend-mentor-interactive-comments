import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentModel } from '../models/comments.model';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getComments(): Observable<CommentModel[]> {
    return this.httpClient.get<CommentModel[]>('http://localhost:3000/comments');
  }

  getCurrentUser(): Observable<UserModel> {
    return this.httpClient.get<UserModel>('http://localhost:3000/currentUser');
  }

  editComment(comment: CommentModel): Observable<CommentModel> {
    return this.httpClient.put<CommentModel>(`http://localhost:3000/comments/${comment.id}`, comment);
  }

  addComment(comment: CommentModel) {
    return this.httpClient.post(`http://localhost:3000/comments/`, comment);
  }

  deleteComment(comment: CommentModel){
    return this.httpClient.delete(`http://localhost:3000/comments/${comment.id}`)
  }
}
