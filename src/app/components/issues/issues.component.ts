import { Component, OnInit } from '@angular/core';
import { GithubService } from './../../services/github.service';
import { ObservableMedia } from '@angular/flex-layout';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { AppConfig } from './../../config/app.config';
import { ProgressBarService } from './../../services/progress-bar.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {

  public issues: any;
  private issuesEndPoint: string;
  private username: string;
  public progressBarMode: string;
  public panelOpenState: boolean = false;
  public repositorie: string;

  constructor(private _githubService :GithubService,  
              private observableMedia: ObservableMedia,
              private progressBarService: ProgressBarService
            ) {
               
               this.progressBarService.updateProgressBar$.subscribe((mode: string) => {
                  this.progressBarMode = mode;
                })
                
                this.issuesEndPoint = AppConfig.issues;
                this.username = 'StephenFluin';
                this.repositorie = 'angular-update-guide';

                      this._githubService.getIssues(this.username, this.repositorie, this.issuesEndPoint).subscribe(   
                        (issues: any) => {
                          this.issues = issues;
                          },
                        err => console.error(err),  
                        () => console.log('done loading issues')
                      );

   }

  ngOnInit() {
  }

}
