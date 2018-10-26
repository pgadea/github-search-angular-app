import { githubRoutes} from './github.routing';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { GithubSearchComponent } from './github-search/github-search.component';
import { GithubSearchDetailComponent } from './github-search-detail/github-search-detail.component';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(githubRoutes)],
  declarations: [GithubSearchComponent, GithubSearchDetailComponent],
  exports: [GithubSearchComponent, GithubSearchDetailComponent]
})
export class GitHubModule { }
