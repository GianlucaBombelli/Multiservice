import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { ProdSearchPageComponent } from './prod-search-page/prod-search-page.component';
import { RouterModule } from '@angular/router';
import { ProdPageComponent } from './prod-page/prod-page.component';
import { CarrelloProdComponent } from './carrello-prod/carrello-prod.component';
import { RegisterformComponent } from './registerform/registerform.component';

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
    TendinaComponent,
    ProdSearchPageComponent,
    ProdPageComponent,
    CarrelloProdComponent,
    RegisterformComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
