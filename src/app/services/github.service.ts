import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GithubService {
  private username = "CristianSifuentes";
  private client_id = "29431fe2ad6a2b43bf4c";
  private client_secret = "e3713c5c4c40d5bb5867e085f9ab3b6642cd7da5";
  private url_following = "https://api.github.com/users/CristianSifuentes/following";
  private url_repos = "  https://api.github.com/users/CristianSifuentes/repos";
  private urlindetity = "https://api.github.com/users/CristianSifuentes?client_id=29431fe2ad6a2b43bf4c&client_secret=e3713c5c4c40d5bb5867e085f9ab3b6642cd7da5";

  constructor( private http: HttpClient) {

   }

     getProfile(): Observable<any> {
        return this.http
          .get(this.urlindetity);
      }

    getFollowing(): Observable<any> {
      return this.http
        .get(this.url_following);
    }

    getRepositories(): Observable<any> {
      return this.http
        .get(this.url_repos);
    }

}

