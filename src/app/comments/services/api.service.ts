import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CommentModel } from '../models/comments.model';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = environment.api;

  constructor(private httpClient: HttpClient) { }

  getComments(): Observable<CommentModel[]> {
    return this.httpClient.get<CommentModel[]>(this.baseUrl + 'comments');
  }

  getCurrentUser(): Observable<UserModel> {
    return this.httpClient.get<UserModel>(this.baseUrl + 'currentUser');
  }

  editComment(comment: CommentModel): Observable<CommentModel> {
    return this.httpClient.put<CommentModel>(this.baseUrl + `comments/${comment.id}`, comment);
  }

  addComment(comment: CommentModel) {
    return this.httpClient.post(this.baseUrl + `comments/`, comment);
  }

  deleteComment(comment: CommentModel){
    return this.httpClient.delete(this.baseUrl + `comments/${comment.id}`)
  }
}
