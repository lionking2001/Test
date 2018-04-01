import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgxQRCodeModule} from "ngx-qrcode2";
import { AppComponent } from './app.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import {AngularFireModule} from "angularfire2";
import {environment} from "../environments/environment";
import {AngularFirestoreModule} from "angularfire2/firestore";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxQRCodeModule,
    ZXingScannerModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
