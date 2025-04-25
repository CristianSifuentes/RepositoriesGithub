import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideHttpClient} from '@angular/common/http';
import {VERSION as MAT_VERSION, provideNativeDateAdapter} from '@angular/material/core';
console.info('Angular Material version', MAT_VERSION.full);


bootstrapApplication(AppComponent, {
  providers: [ provideHttpClient(), provideNativeDateAdapter()],
}).catch(err => console.error(err));
