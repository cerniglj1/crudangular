import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SigninComponent } from "./signin/signin.component";
/* Firebase services */
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from "../environments/environment";
import { FormsModule } from "@angular/forms";
/* Auth service */
import { AuthService } from "./auth.service";
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [AppComponent, SigninComponent, NavigationComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
