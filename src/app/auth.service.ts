import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from "firebase/app";
import { Observable } from "rxjs";
@Injectable()
export class AuthService {
  userData: Observable<firebase.User>;

  constructor(private authFire: AngularFireAuth) {
    this.userData = authFire.authState;
  }

  async login() {
    await this.authFire.auth.fetchSignInMethodsForEmail("some@mail.address");
  }
  async logout() {
    await this.authFire.auth.signOut();
  }
  googleSignIn() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  }

  /* Sign up */
  SignUp(email: string, password: string) {
    this.authFire.auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log("Successfully signed up!", res);
      })
      .catch((error) => {
        console.log("Something is wrong:", error.message);
      });
  }

  /* Sign in */
  SignIn(email: string, password: string) {
    this.authFire.auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log("Successfully signed in!");
      })
      .catch((err) => {
        console.log("Something is wrong:", err.message);
      });
  }

  /* Sign out */
  SignOut() {
    this.authFire.auth.signOut();
  }
}
/**
 * Update Password
Old way:
await this.authFire.currentUser.updatePassword('Passw0rd!');
New way:
await (await this.authFire.currentUser).updatePassword('Passw0rd!');

Delete User
Old way:
await this.authFire.auth.currentUser.delete();
New way:
(await this.authFire.currentUser).delete;

Sign out
Old way:
await this.authFire.auth.signOut();
New way:
await this.authFire.signOut();

Auth state changed
Old way:
this.authFire.auth.onAuthStateChanged(...);
New way:
this.authFire.onAuthStateChanged(...);

Update mail
Old way:
await this.authFire.auth.currentUser.updateEmail('some@mail.address');
New way:
await (await this.authFire.currentUser).updateEmail('some@mail.address');

Reauthenticate user
Old way:
await this.authFire.auth.currentUser.reauthenticateWithCredential(firebase.auth.EmailAuthProvider.credential(this.authFire.auth.currentUser.email, 'Passw0rd!'));
New way:
await (await this.authFire.currentUser).reauthenticateWithCredential(firebase.auth.EmailAuthProvider.credential((await this.authFire.currentUser).email, 'Passw0rd!'));

Send password reset mail
Old way:
await this.authFire.auth.sendPasswordResetEmail(mail);
New way:
await this.authFire.sendPasswordResetEmail(mail);

Fetch sign in methods
Old way:
await this.authFire.auth.fetchSignInMethodsForEmail('some@mail.address');
New way:
await this.authFire.fetchSignInMethodsForEmail('some@mail.address');
 */
