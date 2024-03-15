import { Component, OnDestroy, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../../model/user';
import { Router } from '@angular/router';
import { Observable, Subject, from, takeUntil, tap } from 'rxjs';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.scss'
})
export class SignUpPageComponent implements OnDestroy {
  private readonly destroySubject: Subject<void> = new Subject();
  private readonly router: Router = inject(Router);
  private readonly userService: UserService = inject(UserService);

  public readonly signUpUser: User = new User();

  public ngOnDestroy(): void {
    this.destroySubject.complete();
  }

  public signUp(): void {
    this.userService.signUp(this.signUpUser)
    .pipe(
      takeUntil(this.destroySubject),
      tap(() => this.router.navigate(['posts']))
    ).subscribe({
      error: () => window.alert('Des erreurs ont été rencontrées.')
    });
  }

  public goToSignInPage(): Observable<boolean> {
    return from(this.router.navigate(['users/sign-in']));
  }
}
