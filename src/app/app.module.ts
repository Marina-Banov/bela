import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatSidenavModule } from '@angular/material';
import { GoogleIconModule } from 'google-icon';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { MainThreeComponent } from './main/main-three/main-three.component';
import { MainFourComponent } from './main/main-four/main-four.component';
import { HandComponent } from './main/hand/hand.component';
import { TrumpsComponent } from './dialogs/trumps/trumps.component';
import { ScalesComponent } from './dialogs/scales/scales.component';
import { ArrangeUsersComponent } from './dialogs/arrange-users/arrange-users.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ScoreBoardComponent } from './sidenav/score-board/score-board.component';
import { TeamBoardComponent } from './sidenav/team-board/team-board.component';
import { NotificationComponent } from './dialogs/notification/notification.component';
import { EndScreenComponent } from './end-screen/end-screen.component';
import { LoadingComponent } from './loading/loading.component';

import { AuthGuard } from './auth.guard';
import { EnvService } from '../environments/env.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSidenavModule,
    GoogleIconModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    MainThreeComponent,
    MainFourComponent,
    HandComponent,
    TrumpsComponent,
    ScalesComponent,
    ArrangeUsersComponent,
    SidenavComponent,
    ScoreBoardComponent,
    TeamBoardComponent,
    NotificationComponent,
    EndScreenComponent,
    LoadingComponent
  ],
  entryComponents: [
    ArrangeUsersComponent,
    TrumpsComponent,
    ScalesComponent,
    NotificationComponent
  ],
  providers: [
    AuthGuard,
    EnvService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
