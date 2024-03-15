import { Routes } from '@angular/router';
import { PostListComponent } from './post/ui/component/post-list/post-list.component';
import { SignUpPageComponent } from './user/ui/page/sign-up-page/sign-up-page.component';
import { SignInPageComponent } from './user/ui/page/sign-in-page/sign-in-page.component';
import { notSignedInGuard } from './user/guard/not-signed-in.guard';
import { signedInGuard } from './user/guard/signed-in.guard';

export const routes: Routes = [
    {
        title: 'Créer mon compte',
        path: 'users/sign-up',
        canActivate: [ notSignedInGuard ],
        component: SignUpPageComponent
    },
    {
        title: 'Me connecter',
        path: 'users/sign-in',
        canActivate: [ notSignedInGuard ],
        component: SignInPageComponent
    },
    { 
        title: 'Les articles',
        path: 'posts',
        canActivate: [ signedInGuard ],
        component: PostListComponent 
    },
    {
        path: '**',
        redirectTo: 'users/sign-in'
    }
];