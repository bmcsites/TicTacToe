import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HomeComponent } from '@components/home/home.component';
import { StatusModalComponent } from '@components/home/status-modal/status-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TttBoxService } from '@services/ttt-box.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StatusModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [TttBoxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
