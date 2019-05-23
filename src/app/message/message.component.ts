import { Component, OnInit, Input } from '@angular/core';
import { MessageInterface } from '../interfaces/interfaces';
import * as Actions from '../store/actions';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() message: MessageInterface;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    setTimeout(() => {
      this.hideMessage()
    }, 5000)
  }
  
  hideMessage() {
    this.store.dispatch(new Actions.removeMessage(this.message.id))
  }
}
