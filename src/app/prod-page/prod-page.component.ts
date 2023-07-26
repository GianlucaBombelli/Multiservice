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

  immaginiSmall: string[] = [
    'assets/prova1.png',
    'assets/prova2.png',
    'assets/prova3.png'
    // Aggiungi altre sorgenti delle immagini small se necessario
  ];

  immagineAttuale: string = 'assets/prova.jpg';

  cambiaImmagine(indice: number) {
    // Ottieni la sorgente dell'immagine "smallimg" cliccata
    const sorgenteImmagineCliccata = this.immaginiSmall[indice];

    // Salva la sorgente dell'immagine "bigimg" corrente
    const sorgenteImmagineCorrente = this.immagineAttuale;

    // Imposta sia l'immagine corrente per "bigimg" che per "smallimg"
    this.immagineAttuale = sorgenteImmagineCliccata;
    this.immaginiSmall[indice] = sorgenteImmagineCorrente;
  }

}
