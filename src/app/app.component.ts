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
  title = 'My Github App ';
  public repositories;
  public open: Observable<boolean>;

  
  constructor(private _githubService :GithubService){
   console.log("llamar al servicio");
          /*this._githubService.getRepositories().subscribe(data => {
            console.log(data)
          });*/
          this._githubService.getRepositories().subscribe(
            // the first argument is a function which runs on success
            data => { this.repositories = data},
            // the second argument is a function which runs on error
            err => console.error(err),
            // the third argument is a function which runs on completion
            () => console.log('done loading foods')
          );
          
  }

  ngOnInit(){
    this.open = Observable.of(true);
  }
}
