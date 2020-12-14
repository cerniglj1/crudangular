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
  }
  signIn() {
    this.authService.login();
  }

  signOut() {
    this.authService.logout();
  }
}
