import { Component, inject, NgModule, OnDestroy, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatGridListModule} from '@angular/material/grid-list';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CSSGridLayoutComponent } from './cssgrid-layout/cssgrid-layout.component';
//
@Component({
  selector: 'app-root',
  imports:[RouterOutlet],
  // imports: [MatSidenavModule, MatCheckboxModule, FormsModule, MatButtonModule, MatToolbarModule, MatIconModule, MatListModule,MatGridListModule, MatCardModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // events: string[] = [];
  // opened: boolean=true;
  // protected readonly isMobile = signal(true);

}

