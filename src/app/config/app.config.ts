import {InjectionToken} from '@angular/core';

import {IAppConfig} from './iapp.config';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: IAppConfig = {
  routes: {
    heroes: 'home',
    error404: '404'
  },
  endpoints: {
    repositories: 'https://api.github.com/users'
  },
  username: 'CristianSifuentes',
  client_id: '29431fe2ad6a2b43bf4c',
  client_secret: 'e3713c5c4c40d5bb5867e085f9ab3b6642cd7da5',
  snackBarDuration: 3000,
  repositoryURL: 'https://github.com/CristianSifuentes/RepositoriesGithub',
  following: 'following',
  repos: 'repos'
};
