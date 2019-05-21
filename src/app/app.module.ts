import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchModule } from './search/search.module';
import { NavbarComponent } from './navbar/navbar.component';
import { GitService } from './services/git.service';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile/profile.component';
import { SearchContainerComponent } from './search/container/search-container.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    SearchContainerComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
        maxAge: 25, // Retains last 25 states
      }),
  ],
  providers: [GitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
