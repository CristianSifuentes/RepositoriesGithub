import { Component, OnInit } from '@angular/core';
import { GithubService } from './../../services/github.service';
import { ObservableMedia } from '@angular/flex-layout';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { AppConfig } from './../../config/app.config';
import { Following } from '../../shared/following.model';
import { ProgressBarService } from './../../services/progress-bar.service';


@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.scss']
})
export class FollowingComponent implements OnInit {

  public following: Following[];
  public cols: Observable<number>;
  private followingEndPoint: string;
  private username: string;
  public progressBarMode: string;

  constructor(private _githubService :GithubService,  
              private observableMedia: ObservableMedia,
              private progressBarService: ProgressBarService
            ) {
               
               this.progressBarService.updateProgressBar$.subscribe((mode: string) => {
                  this.progressBarMode = mode;
                })
                
                this.followingEndPoint = AppConfig.following;
                this.username = AppConfig.username;

    this._githubService.getFollowing(this.username, this.followingEndPoint).subscribe(   
      (following: Following[]) => {
        this.following = following;
        },
      err => console.error(err),  
      () => console.log('done loading following')
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
