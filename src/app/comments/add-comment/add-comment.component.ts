import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddCommentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
