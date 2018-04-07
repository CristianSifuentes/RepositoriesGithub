import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule, NoopAnimationsModule  } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    GithubComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule, 
    NoopAnimationsModule, AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
