import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { UserModel } from '../../models/user.model';
import { CommentModel } from '../../models/comments.model';


@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddCommentComponent implements OnInit {

  @Input() currentUser: UserModel | null;
  @Output() addCommentEvent = new EventEmitter<CommentModel>();

  comment: CommentModel;
  content: string;

  constructor() { }

  ngOnInit(): void {
  }

  addComment(){
    this.comment = {
      score: 0,
      createdAt: 'Just now',
      user: this.currentUser as UserModel,
      replies: [],
      content: this.content,
      id: Math.round((Math.random() + 1) * 500)
    }
    this.addCommentEvent.emit(this.comment);
    this.content = '';
  }

}
