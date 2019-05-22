import { Component, OnInit, Input } from '@angular/core';
import { MessageInterface } from '../interfaces/interfaces';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() message: MessageInterface;
  constructor() { }

  ngOnInit() {
    console.log(this.message)
  }

}
