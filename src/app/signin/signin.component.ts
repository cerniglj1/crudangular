import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"],
})
export class SigninComponent implements OnInit {
  email: string;
  password: string;
  constructor(public authService: AuthService) {}

  ngOnInit() {}

  signUp() {
    this.authService.login();
    this.email = "";
    this.password = "";
  }
  signInGoogle() {
    this.authService.googleSignIn();
    /**
     * displayName: string | null;
    * email: string | null;
    * phoneNumber: string | null;
    photoURL: string | null;
    providerId: string;
    
     The user's unique ID.
     
    uid: string;
     */
  }
  signIn() {
    this.authService.login();
  }

  signOut() {
    this.authService.logout();
  }
}
