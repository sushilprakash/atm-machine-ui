import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AvailableNotesComponent } from './available-notes/available-notes.component';
import { EnterPinComponent } from './enter-pin/enter-pin.component';
import { SelectServicesComponent } from './select-services/select-services.component';
import { StatusComponent } from './status/status.component';
import { LocatorDetailService } from './services/locator-detail.service';
import { ProcessingPageComponent } from './processing-page/processing-page.component';
import { SelectModeComponent } from './select-mode/select-mode.component';
import { CardFormatPipe } from './shared/card-format.pipe';
import { AutofocusDirective } from './shared/autofocus.directive';
import { ThanksComponent } from './thanks/thanks.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    AvailableNotesComponent,
    EnterPinComponent,
    SelectServicesComponent,
    StatusComponent,
    ProcessingPageComponent,
    SelectModeComponent,
    CardFormatPipe,
    AutofocusDirective,
    ThanksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LocatorDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
