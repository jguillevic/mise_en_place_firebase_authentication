import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, UserCredential, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { User } from '../model/user';
import { Observable, from, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly firebaseAuth: Auth;

  public isSignedIn: boolean = false;

  public constructor() { 
    const firebaseApp: FirebaseApp = initializeApp(environment.firebaseConfig);
    this.firebaseAuth = getAuth(firebaseApp);
  }

  public signIn(user: User): Observable<UserCredential> {
    return from(signInWithEmailAndPassword(this.firebaseAuth, user.email, user.password))
    .pipe(
      tap(() => this.isSignedIn = true)
    );
  }

  public signUp(user: User): Observable<UserCredential> {
    return from(createUserWithEmailAndPassword(this.firebaseAuth, user.email, user.password))
    .pipe(
      tap(() => this.isSignedIn = true)
    );
  }
}
