import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { User } from './interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user!: Observable<any>;
  isUserLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.user = this.afAuth.authState;
  }

  login(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password).then(res => {
      console.log(res);
      this.isUserLoggedIn.next(true)
      this.router.navigate(['/about-us']);
    }
    )
  }

  SingUp(email: string, password: string) {
    this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        this.isUserLoggedIn.next(true)
        console.log(res);
        this.router.navigate(['/about-us']);
      }
      )
  }

  logout() {
    this.afAuth.signOut().then(u => {
      this.router.navigate(['/login']);
      this.isUserLoggedIn.next(false);
    });
    // console.log("user", this.user.subscribe(u => console.log))
  }



  getUser(): Observable<User | null> {
    return this.user;
  }

  getIsUserLoggedIn(): boolean {
    return this.isUserLoggedIn.value;
  }
}