import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot,  Router } from '@angular/router';
import { EventService } from './event.service';

@Injectable({
  providedIn: 'root'
})
export class EventRouteActivatorService implements CanActivate{

  constructor(private eventService:EventService, private router:Router) { }
 
  canActivate(route:ActivatedRouteSnapshot)
  {
    console.log("in EventRouteActivatorService");
    
    const eventExist =  !!this.eventService.getEvent(+route.params['id']);
    if(!eventExist)
    {
      this.router.navigate(['/404'])
    }
    return eventExist;
  }

}
