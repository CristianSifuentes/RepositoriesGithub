import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FollowingComponent } from './components/following/following.component'; 
import { SearchComponent } from './components/search/search.component';
import { IssuesComponent } from './components/issues/issues.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'following', component: FollowingComponent },
  { path: 'search', component: SearchComponent },
  { path: 'issues', component: IssuesComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
