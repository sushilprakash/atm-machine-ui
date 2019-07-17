import { SelectServicesComponent } from './select-services/select-services.component';
import { ThanksComponent } from './thanks/thanks.component';
import { EnterPinComponent } from './enter-pin/enter-pin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ProcessingPageComponent } from './processing-page/processing-page.component';
import { SelectModeComponent } from './select-mode/select-mode.component';
import { AvailableNotesComponent } from './available-notes/available-notes.component';

const routes: Routes = [
  { path: '', redirectTo: "/welcome", pathMatch: 'full'},
  {path: 'welcome', component: WelcomePageComponent },
  {path: 'enter-pin', component: EnterPinComponent },
  {path: 'select-mode', component: SelectModeComponent },
  {path: 'select-service', component: SelectServicesComponent },
  {path: 'available-notes/:val', component: AvailableNotesComponent },
  {path: 'processing', component: ProcessingPageComponent },
  {path: 'thanks', component:ThanksComponent},
  {path: '**', redirectTo: '/welcome' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
