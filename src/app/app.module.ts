import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule, NoopAnimationsModule  } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import {FormsModule} from '@angular/forms';

import { GithubService } from './services/github.service';
import { ProgressBarService } from './services/progress-bar.service';
import { FollowingComponent } from './components/following/following.component';
import { Dialog } from './components/popup/popup.component';
import { SearchComponent } from './components/search/search.component';
import { IssuesComponent } from './components/issues/issues.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FollowingComponent,
    Dialog,
    SearchComponent,
    IssuesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule, 
    NoopAnimationsModule, 
    AppRoutingModule,
    FormsModule

  ],
  entryComponents: [Dialog],
  providers: [GithubService, ProgressBarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
