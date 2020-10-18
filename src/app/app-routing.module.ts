import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventlistComponent } from './events/eventlist/eventlist.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlayersComponent } from './filter/players/players.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { ErrorComponent } from './events/error/error.component';
import { EventRouteActivatorService } from './service/event-route-activator.service';
import { EventListResolverService } from './service/event-list-resolver.service';
import { UserloginComponent } from './Auth/userlogin/userlogin.component';


const routes: Routes = [
  { path: 'nav', component: NavbarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'user/login', component: UserloginComponent },
 
  {path:"events/new",component:CreateEventComponent, canDeactivate:['canDeactivateCreateEvent']},
  {path:"events",component:EventlistComponent, resolve:{events:EventListResolverService} },
  {path:"events/:id",component:EventDetailsComponent,canActivate: [EventRouteActivatorService]},
  {path:"404",component:ErrorComponent},
  {path:"",redirectTo:'/events', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
