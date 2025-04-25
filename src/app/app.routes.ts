import { Routes } from '@angular/router';
import { CSSGridLayoutComponent } from './cssgrid-layout/cssgrid-layout.component';
import { CSSFlexboxComponent } from './cssflexbox/cssflexbox.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
   { path: '', component: AppComponent },
  {
    path: 'CSSGrid', component: CSSGridLayoutComponent

  },
  {
    path: 'CSSFlexbox', component: CSSFlexboxComponent
  }
];
