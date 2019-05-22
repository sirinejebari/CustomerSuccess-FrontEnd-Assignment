import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GitService } from './services/git.service';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile/profile.component';
import { SearchContainerComponent } from './search/container/search-container.component';
import { users, messages } from './store/reducer';
import { UserReposComponent } from './user-repos/user-repos.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageComponent } from './message/message.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    SearchContainerComponent,
    UserReposComponent,
    NotFoundComponent,
    MessagesComponent,
    MessageComponent
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
      StoreModule.forRoot({
        selectedUser: users,
        messages: messages
      })
  ],
  providers: [GitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
