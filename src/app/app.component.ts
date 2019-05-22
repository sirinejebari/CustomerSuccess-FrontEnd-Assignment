import { Component } from '@angular/core';
import { MessageInterface } from './interfaces/interfaces';
import { Observable } from 'rxjs/internal/Observable';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private store: Store<AppState>){
    this.messagesSubscription = store.select('messages');
  }
  title = 'assignment';
  messages: MessageInterface[]
  messagesSubscription: Observable<MessageInterface[]>;

  ngOnInit() {
    this.messagesSubscription.subscribe((msgs: MessageInterface[]) => {
      console.log(msgs)
      this.messages = msgs
    })

  }
}
