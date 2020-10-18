import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/service/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from 'src/app/Models/ievent';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  event:IEvent;

  constructor(private eventService:EventService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.snapshot.params['id']
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }

}