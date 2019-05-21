import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input() user: User;
  @Output() buttonClick: EventEmitter<any> = new EventEmitter<any>()
  constructor() { }

  ngOnInit() {
  }

  emitClickOnButtin(){
    this.buttonClick.emit()
  }

}
