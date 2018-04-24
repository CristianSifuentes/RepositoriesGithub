import { Component, OnInit, Inject } from '@angular/core';
import { GithubService } from './../../services/github.service';
import { AppConfig } from './../../config/app.config';
import { Profile } from './../../shared/profile.model';
import { Repositories } from './../../shared/repositories.model';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [
    { provide: Window, useValue: window }  
  ]
})
export class SearchComponent implements OnInit {

  private client_id: string;
  private client_secret: string;
  public user:any;
  public repositories:any;
  public username:string;
  public profile: Profile = null;
  private repositoriesEndPoint: string;
  public myVar: boolean = false;

  constructor(
          private _githubService :GithubService,   
          private _route: ActivatedRoute,
          private _router: Router, 
           @Inject(Window) private window: Window) { }

  ngOnInit() {
  }

  search(){

    this.client_id  = AppConfig.client_id;
    this.client_secret  = AppConfig.client_secret;
    this.repositoriesEndPoint = AppConfig.repos;

    this._githubService.getProfile(this.username, this.client_id, this.client_secret).subscribe(
      (profile: Profile) => {
      this.profile = profile;
      },
      err => console.error(err),
      () => console.log('done loading profile')
    );

    this._githubService.getRepositories(this.username, this.repositoriesEndPoint).subscribe(
      (repositories: any) => {
        this.repositories = repositories;
        },
      err => console.error(err), 
      () => console.log('done loading repositories')
    );

    

}

  onSeach(){
    this.myVar = true;
  }
  onCancelSeach(){
    this.myVar =false;
  }

  onViewDetail(repo: any){
    this._router.navigate(['/issues'], { queryParams: { user : this.username, repo: repo}});

  }
  gotoTop(){
    
    this.window.document.getElementById('editSection').scrollIntoView();
  }
 
}
