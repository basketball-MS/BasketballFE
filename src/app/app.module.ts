import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamsPageComponent } from './components/teams-page/teams-page.component';
import { RegisterComponent } from './components/register/register.component';
import { PlayerPageComponent } from './components/player-page/player-page.component';
import { GMHomeComponent } from './components/gm-home/gm-home.component';
import { PlayerHomeComponent } from './components/player-home/player-home.component';
import { CoachHomeComponent } from './components/coach-home/coach-home.component';
import { LoginComponent } from './components/login/login.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsPageComponent,
    RegisterComponent,
    PlayerPageComponent,
    GMHomeComponent,
    PlayerHomeComponent,
    CoachHomeComponent,
    LoginComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
