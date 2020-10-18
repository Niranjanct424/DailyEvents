import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventlistComponent } from './events/eventlist/eventlist.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TokenInterceptor } from './dashboard/Intercepter/token.interceptor';
import { PlayersComponent } from './filter/players/players.component';
import { FilterPipe } from './filter/filter.pipe';
import { FormsModule } from '@angular/forms';
import { CustomresponseInterceptor } from './dashboard/Intercepter/customresponse.interceptor';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { ErrorComponent } from './events/error/error.component';
import { EventRouteActivatorService } from './service/event-route-activator.service';
import { EventService } from './service/event.service';
import { EventListResolverService } from './service/event-list-resolver.service';
import { UserloginComponent } from './Auth/userlogin/userlogin.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    EventlistComponent,
    EventThumbnailComponent,
    NavbarComponent,
    LoginComponent,
    DashboardComponent,
    PlayersComponent,
    FilterPipe,
    EventDetailsComponent,
    CreateEventComponent,
    ErrorComponent,
    UserloginComponent,
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    FlexLayoutModule,
    MatFormFieldModule
  ],
  providers: [
   
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomresponseInterceptor,
      multi: true
    },
    //Gaurding against routing   short hand form approach
    EventRouteActivatorService,
    EventListResolverService,
    // Gaurding against routing long hand form approach
    {provide:'canDeactivateCreateEvent', useValue:checkDirtyState}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { FlexLayoutModule}

export function checkDirtyState(component:CreateEventComponent)
{
  if(component.isDirty)
  {
    return window.confirm("you have not save this event do you want to continue?")
    return true;
  }

}