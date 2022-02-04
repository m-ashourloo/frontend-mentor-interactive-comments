import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-single-comment',
  templateUrl: './single-comment.component.html',
  styleUrls: ['./single-comment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleCommentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
