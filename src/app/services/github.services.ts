import { Following } from '@/interfaces/following.github.interfaces';
import type { GiphyResponse } from '@/interfaces/giphy.interfaces';
import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { Follower } from '../interfaces/follower.github.interface';
import { GithubMapper } from '@/mapper/github..mapper';

const GITHUB_KEY = 'githubs';

// const loadFromLocalStorage = () => {
//   const githubsFromLocalStorage = localStorage.getItem(GITHUB_KEY) ?? '{}';
//   const githubs = JSON.parse(githubsFromLocalStorage);
//   return githubs;
// };


@Injectable({ providedIn: 'root' })
export class GithubService {

  private http = inject(HttpClient);
  following = signal<Following>([]);
  follow = signal<Follower[]>([]);
  githubLoading = signal<boolean>(false);
  private githubPage = signal(0);

  trendingGithubGroup = computed<Follower[][]>(() => {
    const groups = [];
    for (let i = 0; i < this.follow().length; i += 3) {
      groups.push(this.follow().slice(i, i + 3));
    }

    return groups; //[ [g1,g2,g3],[g4,g5]]
  });

  trendingGihubGroup = computed<Follower[][]>(() => {
    const groups = [];
    for (let i = 0; i < this.follow().length; i += 3) {
      groups.push(this.follow().slice(i, i + 3));
    }

    return groups; //[ [g1,g2,g3],[g4,g5]]
  });

   constructor( ){
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

    // githubHistory = signal<Record<string, Follower[]>>(loadFromLocalStorage());
    // githubHistoryKeys = computed(() => Object.keys(this.githubHistory()));

    // saveGithubToLocalStorage = effect(() => {
    //   const historyString = JSON.stringify(this.githubHistory());
    //   localStorage.setItem(GITHUB_KEY, historyString);
    // });

    getFollowing() {
      if (this.githubLoading()) return;

      this.githubLoading.set(true);


      this.http
        .get<Following>(`${environment.endpoints.url}users/CristianSifuentes/following`)
        .subscribe((resp) => {
          // console.log({ resp });
          const followers = GithubMapper.mapFollowing(resp);
          console.log({ followers });
          this.follow.update((currentGithubs) => [...currentGithubs, ...followers]);
          this.githubPage.update((page) => page + 1);

          this.githubLoading.set(false);
          // this.follow.set(followers);
        })
    }


    // getHistoryFollow(query: string): Follower[] {
    //     return this.githubHistory()[query] ?? [];
    // }
}
