import { Routes } from '@angular/router';
import { PostListComponent } from './post/ui/component/post-list/post-list.component';

export const routes: Routes = [
    { 
        title: 'Les articles',
        path: 'posts',
        component: PostListComponent 
    },
    {
        path: '**',
        redirectTo: 'posts'
    }
];