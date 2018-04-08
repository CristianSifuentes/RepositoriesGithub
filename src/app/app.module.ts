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

import { GithubService } from './services/github.service';
import { FollowingComponent } from './components/following/following.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FollowingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule, 
    NoopAnimationsModule, AppRoutingModule

  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
