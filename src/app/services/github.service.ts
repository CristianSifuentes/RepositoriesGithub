import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GithubService {
  private username = "CristianSifuentes";
  private client_id = "29431fe2ad6a2b43bf4c";
  private client_secret = "e3713c5c4c40d5bb5867e085f9ab3b6642cd7da5";
  private url = "https://api.github.com/users/CristianSifuentes/following"
  constructor( private http: HttpClient) {
    console.log("Esta en el servicio GithubService");
        this.getRepositories().subscribe(data => {
          console.log(data)
        });
   }


getRepositories(): Observable<any> {
 
    return this.http
      .get(this.url);

  }

}

