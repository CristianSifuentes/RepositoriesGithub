import { Following } from '@/interfaces/following.github.interfaces';
import type { GiphyResponse } from '@/interfaces/giphy.interfaces';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';

@Injectable({ providedIn: 'root' })
export class GithubService {

  private http = inject(HttpClient);
  following = signal<Following>([]);


   constructor(){
    //  this.loadTrendingGifs();
    this.getFollowing();
   }

  loadTrendingGifs() {
    this.http
      .get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
        params: {
          api_key: environment.giphyApiKey,
          limit: 20,
          offset: 0,
          rating: 'g',
          bundle: 'messaging_non_clips'
        },
      })
      .subscribe((resp) => {

        console.log({ resp });
      });

    }

    getFollowing() {
      this.http
        .get<Following>(`${environment.endpoints.url}users/CristianSifuentes/repos`)
        .subscribe((resp) => {
          console.log({ resp });
          this.following.set(resp);

        });

      }
}
