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
  public profile;
  public open: Observable<boolean>;
  constructor(private _githubService :GithubService){
   console.log("llamar al servicio");
          this._githubService.getProfile().subscribe(
            data => { this.profile = data},
            err => console.error(err),
            () => console.log('done loading profile')
          );       
  }
  ngOnInit(){
    this.open = Observable.of(true);
  }
}
