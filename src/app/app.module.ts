import { FeaturesModule } from './features/features.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ShareModule } from './share/share/share.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FeaturesModule,
    ShareModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
