import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"],
})
export class NavigationComponent implements OnInit {
  constructor(public authService: AuthService) {
    console.log({authService});
  }

  ngOnInit() {}
  signUp() {
    this.authService.login();
    
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
