import { Component, OnInit } from '@angular/core';
import { GithubService } from './services/github.service';
import { ObservableMedia } from '@angular/flex-layout';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'My Github App';
  public profile:any;
  public open: Observable<boolean>;

  constructor(
    private _githubService :GithubService, 
    private observableMedia: ObservableMedia,){
   console.log("llamar al servicio");
          this._githubService.getProfile().subscribe(
            data => { this.profile = data},
            err => console.error(err),
            () => console.log('done loading profile')
          );       
  }
  ngOnInit(){
    if (this.observableMedia.isActive('xs')) {
      this.open = Observable.of(false);
     
    } else if (this.observableMedia.isActive('sm') || this.observableMedia.isActive('md')) {
      this.open = Observable.of(false);
    } else if (this.observableMedia.isActive('lg') || this.observableMedia.isActive('xl')) {
      this.open = Observable.of(true);
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
  }
}
