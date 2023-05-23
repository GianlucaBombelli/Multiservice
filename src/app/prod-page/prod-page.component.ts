import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-prod-page',
  templateUrl: './prod-page.component.html',
  styleUrls: ['./prod-page.component.css'],
  animations: [
    trigger('slideUpDown', [
      state('void', style({ height: '0', opacity: '0' })),
      state('*', style({ height: '*', opacity: '1' })),
      transition('void <=> *', animate('0.3s linear')),
    ]),
  ],
})
export class ProdPageComponent {

  mostraSpedizione: boolean = true;
  mostraAcquisto: boolean = false;
  mostraMoreInfo: boolean = false;

  toggleSpedizione() {
    this.mostraSpedizione = !this.mostraSpedizione;
  }

  toggleAcquisto() {
    this.mostraAcquisto = !this.mostraAcquisto;
  }

  toggleMoreInfo() {
    this.mostraMoreInfo = !this.mostraMoreInfo;
  }
}
