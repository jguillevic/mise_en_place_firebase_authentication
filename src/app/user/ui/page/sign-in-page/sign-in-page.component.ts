import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subject, from, takeUntil, tap } from 'rxjs';
import { UserService } from '../../../service/user.service';
import { User } from '../../../model/user';

@Component({
  selector: 'app-sign-in-page',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './sign-in-page.component.html',
  styleUrl: './sign-in-page.component.scss'
})
export class SignInPageComponent {
  private readonly destroySubject: Subject<void> = new Subject();
  private readonly router: Router = inject(Router);
  private readonly userService: UserService = inject(UserService);

  public readonly signInUser: User = new User();

  public signIn(): void {
    this.userService.signIn(this.signInUser)
    .pipe(
      takeUntil(this.destroySubject),
      tap(() => this.router.navigate(['posts']))
    ).subscribe({
      error: () => window.alert('Des erreurs ont été rencontrées.')
    });
  }

  public goToSignUpPage(): Observable<boolean> {
    return from(this.router.navigate(['users/sign-up']));
  }
}
