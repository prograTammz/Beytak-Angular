import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list'
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AdvicesPageComponent } from './pages/advices-page/advices-page.component';
import { AboutusPageComponent } from './pages/aboutus-page/aboutus-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


import {HammerGestureConfig, HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';

export class MyHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
    'swipe': {velocity: 0.4, threshold: 20} // override default settings
  }
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdvicesPageComponent,
    AboutusPageComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
     MatCheckboxModule,
     AppRoutingModule,
     MatDividerModule,
     MatSidenavModule,
     MatRadioModule,
     FormsModule,
     ReactiveFormsModule,
     MatListModule,
     MatIconModule,
     MatToolbarModule,
     HttpClientModule
  ],
  providers: [{ 
    provide: HAMMER_GESTURE_CONFIG, 
    useClass: MyHammerConfig 
  }],
  bootstrap: [AppComponent]
})



export class AppModule { }
