import { Component, OnInit } from '@angular/core';
import { GithubService } from './../../services/github.service';
import { ObservableMedia } from '@angular/flex-layout';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { AppConfig } from './../../config/app.config';
import { Repositories } from '../../shared/repositories.model';
import { ProgressBarService } from './../../services/progress-bar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  
  public repositories: Repositories[];
  public cols: Observable<number>;
  private repositoriesEndPoint: string;
  private username: string;
  public progressBarMode: string;
  
  constructor(private _githubService :GithubService,  private observableMedia: ObservableMedia,   private progressBarService: ProgressBarService) {
    this.progressBarService.updateProgressBar$.subscribe((mode: string) => {
      this.progressBarMode = mode;
    });

    this.repositoriesEndPoint = AppConfig.repos;
    this.username = AppConfig.username;

    this._githubService.getRepositories(this.username, this.repositoriesEndPoint).subscribe(
      (repositories: Repositories[]) => {
        this.repositories = repositories;
        },
      err => console.error(err), 
      () => console.log('done loading repositories')
    );

   }

   ngOnInit() {
    // set cols
    if (this.observableMedia.isActive('xs')) {
      this.cols = Observable.of(1);
    } else if (this.observableMedia.isActive('sm') || this.observableMedia.isActive('md')) {
      this.cols = Observable.of(2);
    } else if (this.observableMedia.isActive('lg') || this.observableMedia.isActive('xl')) {
      this.cols = Observable.of(4);
    }
    // observe changes
    this.observableMedia.asObservable()
      .subscribe(change => {
        switch (change.mqAlias) {
          case 'xs':
            return this.cols = Observable.of(1);
          case 'sm':
          case 'md':
            return this.cols = Observable.of(2);
          case 'lg':
          case 'xl':
            return this.cols = Observable.of(4);
        }
      });
  }

  onNavigate(url: any){
    if (url) { window.open(url, "_blank");}

   
  }

}
