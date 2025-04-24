import { Routes } from '@angular/router';
import { CSSGridLayoutComponent } from './cssgrid-layout/cssgrid-layout.component';
import { CSSFlexboxComponent } from './cssflexbox/cssflexbox.component';
import { AppComponent } from './app.component';


export const routes: Routes = [
  {
    path: '', component: AppComponent

  },
  {
    path: 'CSSGrid', component: CSSGridLayoutComponent

  },
  {
    path: 'CSSFlexbox', component: CSSFlexboxComponent
  }
];
