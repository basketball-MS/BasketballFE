import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsPageComponent } from './components/teams-page/teams-page.component';
import { PlayerPageComponent } from './components/player-page/player-page.component';
import { GMHomeComponent } from './components/gm-home/gm-home.component';
import { LoginComponent } from './components/login/login.component';




const routes: Routes = [
  { path: 'teams', component: TeamsPageComponent },
  { path: 'players', component: PlayerPageComponent },
  { path: 'GM', component: GMHomeComponent },
  //{ path: 'GM', redirectTo: "/GMHomeComponent", pathMatch:"full"},
  //{ path: 'player', redirectTo: "/PlayerHomeComponent", pathMatch:"full"},
  //{ path: 'coach', redirectTo: "/CoachHomeComponent", pathMatch:"full"}
  {path: '**', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
