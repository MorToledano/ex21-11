import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { User } from './interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user!: Observable<User | null>;

  login(email:string, password:string) {
    this.afAuth.signInWithEmailAndPassword(email, password).then(res => {
          console.log(res);
          this.router.navigate(['/about-us']);
        }
      )
  }

  SingUp(email:string, password:string){
    this.afAuth.createUserWithEmailAndPassword(email,password)
    .then(res =>{
        console.log(res);
        this.router.navigate(['/about-us']);
      }
    )
  }

  logout(){
    this.afAuth.signOut();
  }

  constructor(private afAuth:AngularFireAuth, private router:Router) { 
    //this.user = this.afAuth.authState;
  }

  getUser():Observable<User | null>{
    return this.user ;
  }
}