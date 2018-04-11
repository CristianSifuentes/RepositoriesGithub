import { Component, OnInit, Inject } from '@angular/core';
import { GithubService } from './services/github.service';
import { ObservableMedia } from '@angular/flex-layout';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { ProgressBarService } from './services/progress-bar.service';
import { Profile } from './shared/profile.model';
import { AppConfig } from './config/app.config';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Dialog } from './components/popup/popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'My Github App';
  public profile: Profile = null;;
  public open: Observable<boolean>;
  public open_profile: Observable<boolean>;
  public progressBarMode: string;
  private username: string;
  private client_id: string;
  private client_secret: string;
  public dialogRef: MatDialogRef<Dialog>;
  public information: string;

  constructor(
    private _githubService :GithubService, 
    private observableMedia: ObservableMedia,
    private progressBarService: ProgressBarService,
    public dialog: MatDialog
  ){
          this.progressBarService.updateProgressBar$.subscribe((mode: string) => {
            this.progressBarMode = mode;
          });
          this.username  = AppConfig.username;
          this.client_id  = AppConfig.client_id;
          this.client_secret  = AppConfig.client_secret;
          this._githubService.getProfile(this.username, this.client_id, this.client_secret).subscribe(
            (profile: Profile) => {
            this.profile = profile;
            },
            err => console.error(err),
            () => console.log('done loading profile')
          );

          this.information = AppConfig.information;
          

          
  }


  ngOnInit(){

   
    if (this.observableMedia.isActive('xs')) {
      this.open = Observable.of(false);
      this.open_profile = Observable.of(true);
    } else if (this.observableMedia.isActive('sm') || this.observableMedia.isActive('md')) {
      this.open = Observable.of(false);
      this.open_profile = Observable.of(true);
    } else if (this.observableMedia.isActive('lg') || this.observableMedia.isActive('xl')) {
      this.open = Observable.of(true);
      this.open_profile = Observable.of(false);
    }


    // observe changes
    this.observableMedia.asObservable()
      .subscribe(change => {
        switch (change.mqAlias) {
          case 'xs':
            return this.open = Observable.of(false);
          case 'sm':
          case 'md':
            return this.open = Observable.of(false);
          case 'lg':
          case 'xl':
            return this.open = Observable.of(true);
        }
      });

      this.observableMedia.asObservable()
      .subscribe(change => {
        switch (change.mqAlias) {
          case 'xs':
            return this.open_profile = Observable.of(true);
          case 'sm':
          case 'md':
            return this.open_profile = Observable.of(true);
          case 'lg':
          case 'xl':
            return this.open_profile = Observable.of(false);
        }
      });
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(Dialog, {
      width: '250px',
      data: { information: this.information }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    
    });
  }
}
