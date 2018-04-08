import { Component, OnInit } from '@angular/core';
import { GithubService } from './../../services/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public repositories;
  constructor(private _githubService :GithubService) {
    this._githubService.getRepositories().subscribe(
      // the first argument is a function which runs on success
      data => { this.repositories = data},
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading foods')
    );

   }

  ngOnInit() {
  }

}
