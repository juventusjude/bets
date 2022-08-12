import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CricketComponent } from './cricket/cricket.component';
import { SoccerComponent } from './soccer/soccer.component';
import { NbaComponent } from './nba/nba.component';
import { NftLotteryComponent } from './nft-lottery/nft-lottery.component';
import { TangibleNftComponent } from './tangible-nft/tangible-nft.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ModalsComponent } from './modals/modals.component';
import { BetSoccerComponent } from './bet-soccer/bet-soccer.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    PersonalDetailsComponent,
    ChangePasswordComponent,
    CricketComponent,
    SoccerComponent,
    NbaComponent,
    NftLotteryComponent,
    TangibleNftComponent,
    FaqsComponent,
    ModalsComponent,
    BetSoccerComponent,
    HowItWorksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
