import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { METEOR_PROVIDERS } from 'angular2-meteor';

import { AppComponent } from './app.component';
import { PartiesFormComponent } from './parties/parties-form.component';

@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
    PartiesFormComponent
  ],
  // Providers
  providers: [
  ],
  // Modules
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  // Main Component
  bootstrap: [ AppComponent ]
})
export class AppModule {}
