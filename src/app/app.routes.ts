import { Routes } from '@angular/router';
import { CSSGridLayoutComponent } from './cssgrid-layout/cssgrid-layout.component';
import { CSSFlexboxComponent } from './cssflexbox/cssflexbox.component';


export const routes: Routes = [
  {
    path: 'CSSGrid', component: CSSGridLayoutComponent

  },
  {
    path: 'CSSFlexbox', component: CSSFlexboxComponent
  }
];
