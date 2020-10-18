import { Component, OnInit, Input } from '@angular/core';
import { IEvent } from 'src/app/Models/ievent';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.scss']
})
export class EventThumbnailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
@Input() event:IEvent


}
