import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteModalComponent implements OnInit {
  @Output() modalClosed = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

}
