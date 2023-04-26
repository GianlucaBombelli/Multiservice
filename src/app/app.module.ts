import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StoryComponent } from './story/story.component';
import { CaroselloComponent } from './carosello/carosello.component';
import { Carosello2Component } from './carosello2/carosello2.component';
import { DemolizioniComponent } from './servizi/demolizioni/demolizioni.component';
import { CarrozzeriaComponent } from './servizi/carrozzeria/carrozzeria.component';
import { DepositoComponent } from './servizi/deposito/deposito.component';
import { OfficinaComponent } from './servizi/officina/officina.component';
import { BonificheComponent } from './servizi/bonifiche/bonifiche.component';
import { VenditaAutoComponent } from './servizi/vendita-auto/vendita-auto.component';
import { GommistaComponent } from './servizi/gommista/gommista.component';
import { VenditaComponent } from './servizi/vendita/vendita.component';
import { TendinaComponent } from './servizi/tendina/tendina.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    StoryComponent,
    CaroselloComponent,
    Carosello2Component,
    DemolizioniComponent,
    CarrozzeriaComponent,
    DepositoComponent,
    OfficinaComponent,
    BonificheComponent,
    VenditaAutoComponent,
    GommistaComponent,
    VenditaComponent,
    TendinaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
