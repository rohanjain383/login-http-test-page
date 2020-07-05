import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { CardComponent } from './asset/card/card.component';
import {HttpConfigService} from './services/http-config.service';
import {SharedService} from './services/shared.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserListComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpConfigService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
