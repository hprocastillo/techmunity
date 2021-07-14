import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {first} from "rxjs/operators";
import firebase from "firebase";
import auth = firebase.auth;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) {
  }

  getCurrentUser() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }

  // @ts-ignore
  async login(email: string, password: string) {
    try {
      return await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );
    } catch (error) {
      console.log(error);
    }

  }

  // @ts-ignore
  async loginGoogle() {
    try {
      return this.afAuth.signInWithPopup(new auth.GoogleAuthProvider());
    } catch (error) {
      console.log(error);
    }
  }

  async logout() {
    try {
      await this.afAuth.signOut();
    } catch (error) {
      console.log(error);
    }
  }

  // @ts-ignore
  async register(email: string, password: string) {
    try {
      return await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );
    } catch (error) {
      console.log(error);
    }
  }


}
