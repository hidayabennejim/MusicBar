import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth'
import { HttpModule } from '@angular/http'
import { UserService } from './user.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthService } from './auth.service';


// Modal Pages
//import { ImagePageModule } from "./pages/modal/image/image.module";
//import { SearchFilterPageModule } from "./pages/modal/search-filter/search-filter.module";

// Components
//import { NotificationsComponent } from "./components/notifications/notifications.component";

//Firebase
//import { AngularFireModule } from "@angular/fire";
//import {
  //AngularFirestoreModule,
  //FirestoreSettingsToken
//} from "@angular/fire/firestore";

import { environment } from "src/environments/environment";
import { AngularFireDatabaseModule } from '@angular/fire/database';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
	  AngularFirestoreModule,
	  HttpModule
  ],
  
  entryComponents: [],
  providers: [
    StatusBar,
    SplashScreen,
  { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
	UserService,
	AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
