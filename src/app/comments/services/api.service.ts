import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentModel } from '../models/comments.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getComments(): Observable<CommentModel[]> {
    return this.httpClient.get<CommentModel[]>('http://localhost:3000/comments');
  }
}
