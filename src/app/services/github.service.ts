import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { Profile } from './../shared/profile.model';
import { Repositories } from './../shared//repositories.model';
import { Following } from './../shared/following.model';
import { AppConfig } from './../config/app.config';

@Injectable()
export class GithubService {
  public request$: EventEmitter<any>;
  private urlGithub: string; 
  
  private handleError(error: any) {
    this.request$.emit('finished');
    if (error instanceof Response) {
      return Observable.throw(error.json()['error'] || 'backend server error');
    }
    return Observable.throw(error || 'backend server error');
  }

  constructor( private http: HttpClient) {
    this.request$ = new EventEmitter();
    this.urlGithub = AppConfig.endpoints.repositories;
   }

      getProfile(
         username: string,
         client_id: string,
         client_secret: string): Observable<Profile> {
        this.request$.emit('starting');
        return this.http
          .get(this.urlGithub+"/"+ username +"?client_id="+client_id+"&client_secret="+client_secret)
          .map(response => {
            this.request$.emit('finished');
            return response;
          })
          .catch(error => this.handleError(error));
      }


    getFollowing(
      username: string,
      endpoint:string
    ): Observable<Following[]> {
      this.request$.emit('starting');
      return this.http
        .get(this.urlGithub+"/"+ username +"/"+endpoint)
        .map(response => {
          this.request$.emit('finished');
          return response;
        })
        .catch(error => this.handleError(error));
    }



    getRepositories( username: string,
      endpoint:string): Observable<Repositories[]> {
      this.request$.emit('starting');
      return this.http
      .get(this.urlGithub+"/"+ username +"/"+endpoint)
        .map(response => {
          this.request$.emit('finished');
          return response;
        })
        .catch(error => this.handleError(error));
    }

}

