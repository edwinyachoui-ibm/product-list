import { MaterialModule } from './shared/Material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { SideNavComponent } from './layout/side-nav/side-nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers } from './core/store';
import { EffectsModule } from '@ngrx/effects';
import { CoffeeEffects } from './core/store/effects/coffee.effects';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([CoffeeEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
