import { Component, OnInit } from '@angular/core';
import { GithubService } from './../../services/github.service';
import { ObservableMedia } from '@angular/flex-layout';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { AppConfig } from './../../config/app.config';
import { Following } from '../../shared/following.model';
import { ProgressBarService } from './../../services/progress-bar.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {

  public following: Following[];
  public cols: Observable<number>;
  private followingEndPoint: string;
  private username: string;
  public progressBarMode: string;
  public panelOpenState: boolean = false;

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
  }

  public step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}
