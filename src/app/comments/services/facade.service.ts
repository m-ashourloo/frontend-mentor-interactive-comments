import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentModel } from '../models/comments.model';
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

}
