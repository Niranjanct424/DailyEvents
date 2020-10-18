import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/service/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from 'src/app/Models/ievent';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.scss']
})
export class EventlistComponent implements OnInit {

  searchName:string="";
  events:IEvent[];
  
  constructor(private eventService:EventService,private route:ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    // this.eventService.getEvents().subscribe(events => {this.events = events})
    this.events = this.route.snapshot.data['events']
    //so this.route.snapshot.data['events'] events matchs the events from app-routing ,this is how data wiredup
    
  }

}


// getStartTimeclass()
// {
//   const isEarlyStart = this.event && this.event.time === "'8:00 am'"
//   return {green:isEarlyStart ,bold:isEarlyStart}
// }