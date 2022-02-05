import { Component, OnInit } from '@angular/core';
import { skip } from 'rxjs';
import { CommentModel } from './models/comments.model';
import { ApiService } from './services/api.service';
import { FacadeService } from './services/facade.service';
import { StatesService } from './services/states.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  comments: CommentModel[] = [];

  constructor(private facade: FacadeService) { }

  ngOnInit(): void {
    this.setSubscriber();
    this.loadComments();
  }

  setSubscriber(): void {
    this.facade.getComments().pipe(skip(1)).subscribe(
      (comments) => {
        this.comments = comments;
        
      }
    );
  }

  loadComments(): void {
    this.facade.loadComments();
  }

}
