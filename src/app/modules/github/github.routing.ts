import { GithubSearchComponent } from './github-search/github-search.component';
import { GithubSearchDetailComponent } from './github-search-detail/github-search-detail.component';
import { Routes } from '@angular/router';

export const githubRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: GithubSearchComponent
            },
            {
                path: ':id',
                component: GithubSearchDetailComponent
            }
        ]
    }
];
