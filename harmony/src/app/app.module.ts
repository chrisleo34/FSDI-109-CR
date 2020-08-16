// tslint:disable-next-line: quotemark
import { NgModule } from "@angular/core";
// tslint:disable-next-line: quotemark
import { BrowserModule } from "@angular/platform-browser";
// tslint:disable-next-line: quotemark
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
// tslint:disable-next-line: quotemark
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
// tslint:disable-next-line: quotemark
import { StatusBar } from "@ionic-native/status-bar/ngx";

// tslint:disable-next-line: quotemark
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";


var conStr = {
  apiKey: "AIzaSyBmp1d_-QechGk8JY2vHoMdRZewKVM006Q",
  authDomain: "fsdi-6aa30.firebaseapp.com",
  databaseURL: "https://fsdi-6aa30.firebaseio.com",
  projectId: "fsdi-6aa30",
  storageBucket: "fsdi-6aa30.appspot.com",
  messagingSenderId: "92558793025",
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(conStr),
    AngularFirestoreModule,
  ],

  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
