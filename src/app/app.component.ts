import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// toolbar
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
//sidenav
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
//matcard
import {MatCardModule} from '@angular/material/card';
import { environment } from '@environments/environment';
import { GithubService } from './services/github.services';
// GridList
import {MatGridListModule} from '@angular/material/grid-list';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, MatCardModule, MatGridListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'you-app-name';
  protected readonly isMobile = signal(true);
  envs = environment;
  githubService = inject(GithubService);
  public cols: Observable<number> | undefined;


  onNavigate(url: any){
    if (url) { window.open(url, "_blank");}
  }

}
