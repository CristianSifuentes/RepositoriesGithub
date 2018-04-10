import { EventEmitter, Injectable } from '@angular/core';
import { GithubService } from './github.service';

 
@Injectable()
export class ProgressBarService {

  public updateProgressBar$: EventEmitter<any>;
  private requestsRunning: number = 0;
  private reprositoresUrl: string;

  constructor(

    private githubService: GithubService
  ) {
    this.updateProgressBar$ = new EventEmitter();

    this.githubService.request$.subscribe((type: string) => {

      if (type === 'starting') {
        this.requestsRunning++;
        if (this.requestsRunning === 1) {
          this.updateProgressBar$.emit('query');
        }
      } else if (this.requestsRunning > 0) {
        this.requestsRunning--;
        if (this.requestsRunning === 0) {
          this.updateProgressBar$.emit('none');
        }
      }

    });

  }

}
