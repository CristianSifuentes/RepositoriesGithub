import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class GithubService {
  public request$: EventEmitter<any>;
  private username = "CristianSifuentes";
  private client_id = "29431fe2ad6a2b43bf4c";
  private client_secret = "e3713c5c4c40d5bb5867e085f9ab3b6642cd7da5";
  private url_following = "https://api.github.com/users/CristianSifuentes/following";
  private url_repos = "  https://api.github.com/users/CristianSifuentes/repos";
  private urlindetity = "https://api.github.com/users/CristianSifuentes?client_id=29431fe2ad6a2b43bf4c&client_secret=e3713c5c4c40d5bb5867e085f9ab3b6642cd7da5";

  private handleError(error: any) {
    this.request$.emit('finished');
    if (error instanceof Response) {
      return Observable.throw(error.json()['error'] || 'backend server error');
    }
    return Observable.throw(error || 'backend server error');
  }

  constructor( private http: HttpClient) {
    this.request$ = new EventEmitter();
   }

     getProfile(): Observable<any> {
        return this.http
          .get(this.urlindetity);
      }

    getFollowing(): Observable<any> {
      this.request$.emit('starting');
      return this.http
        .get(this.url_following)
        .map(response => {
          this.request$.emit('finished');
          return response;
        })
        .catch(error => this.handleError(error));
    }

    getRepositories(): Observable<any> {
      return this.http
        .get(this.url_repos);
    }

}

