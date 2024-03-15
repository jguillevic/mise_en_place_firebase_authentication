import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { inject } from '@angular/core';

export const notSignedInGuard: CanActivateFn = (route, state) => {
  const userService: UserService = inject(UserService);
  const router = inject(Router);

  if (userService.isSignedIn) {
    router.navigate(['posts']);
    return false;
  }
  return true;
};
