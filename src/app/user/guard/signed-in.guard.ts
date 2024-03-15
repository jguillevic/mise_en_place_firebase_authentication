import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { inject } from '@angular/core';

export const signedInGuard: CanActivateFn = (route, state) => {
  const userService: UserService = inject(UserService);
  const router = inject(Router);

  if (!userService.isSignedIn) {
    router.navigate(['users/sign-in']);
    return false;
  }
  return true;
};
