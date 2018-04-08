import { Component, OnInit } from '@angular/core';
import { GithubService } from './../../services/github.service';
import { ObservableMedia } from '@angular/flex-layout';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.scss']
})
export class FollowingComponent implements OnInit {

  public repositories;
  public cols: Observable<number>;

  constructor(private _githubService :GithubService,  private observableMedia: ObservableMedia) {

    this._githubService.getRepositories2().subscribe(
      // the first argument is a function which runs on success
      data => { this.repositories = data},
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log(this.repositories)
    );
   }

   ngOnInit() {
    // set cols
    if (this.observableMedia.isActive('xs')) {
      this.cols = Observable.of(1);
    } else if (this.observableMedia.isActive('sm') || this.observableMedia.isActive('md')) {
      this.cols = Observable.of(2);
    } else if (this.observableMedia.isActive('lg') || this.observableMedia.isActive('xl')) {
      this.cols = Observable.of(3);
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
            return this.cols = Observable.of(3);
        }
      });
  }

}
