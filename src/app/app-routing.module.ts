import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { StoryComponent } from './story/story.component';
import { CaroselloComponent } from './carosello/carosello.component';
import { DemolizioniComponent } from './servizi/demolizioni/demolizioni.component';
import { CarrozzeriaComponent } from './servizi/carrozzeria/carrozzeria.component';
import { BonificheComponent } from './servizi/bonifiche/bonifiche.component';
import { DepositoComponent } from './servizi/deposito/deposito.component';
import { GommistaComponent } from './servizi/gommista/gommista.component';
import { OfficinaComponent } from './servizi/officina/officina.component';
import { VenditaComponent } from './servizi/vendita/vendita.component';
import { VenditaAutoComponent } from './servizi/vendita-auto/vendita-auto.component';
import { TendinaComponent } from './servizi/tendina/tendina.component';
import { ProdSearchPageComponent } from './prod-search-page/prod-search-page.component';
import { ProdPageComponent } from './prod-page/prod-page.component';
import { CarrelloProdComponent } from './carrello-prod/carrello-prod.component';
import { RegisterformComponent } from './registerform/registerform.component';

const routes: Routes = [
  {path: '', component : HomepageComponent},
  {path: 'home', component : HomepageComponent},
  {path: 'story', component : StoryComponent, },
  {path: 'demolizioni', component: DemolizioniComponent},
  {path: 'carrozzeria', component: CarrozzeriaComponent},
  {path: 'bonifiche', component: BonificheComponent},
  {path: 'deposito', component: DepositoComponent},
  {path: 'gommista', component: GommistaComponent},
  {path: 'officina', component: OfficinaComponent},
  {path: 'ricambi', component: VenditaComponent},
  {path: 'vendita', component: VenditaAutoComponent},
  {path: 'tendina', component: TendinaComponent},
  {path: 'searchpage', component: ProdSearchPageComponent},
  {path: 'product', component: ProdPageComponent},
  {path: 'carrello', component: CarrelloProdComponent},
  {path: 'registration', component: RegisterformComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
