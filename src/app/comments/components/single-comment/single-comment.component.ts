import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommentModel } from '../../models/comments.model';

@Component({
  selector: 'app-single-comment',
  templateUrl: './single-comment.component.html',
  styleUrls: ['./single-comment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleCommentComponent implements OnInit {
  @Input() comment: CommentModel;

  constructor() { }

  ngOnInit(): void {
  }

}
