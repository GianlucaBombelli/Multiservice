import { Component, Input, OnInit } from '@angular/core';
import { VeicoliserviceService } from '../service/veicoliservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartserviceService } from '../service/cartservice.service';

interface AutoModel {
  condizioni: string;
  marca: string;
  modello: string;
  versione: string;
  allestimentiesterni: string;
  assale: string;
  trasmissione: string;
  cristalli: string;
  fanaleria: string;
  impelettrico: string;
  impfrenante: string;
  lamieratiesterni: string;
  lamieratiinterni: string;
  partimotore: string;
  scarico: string;
  selleria: string;
  sicurezza: string;
  sterzo: string;
  termico: string;
  price: number;
}

@Component({
  selector: 'app-prod-search-page',
  templateUrl: './prod-search-page.component.html',
  styleUrls: ['./prod-search-page.component.css']
})
export class ProdSearchPageComponent {
  //tipo di ricerca
  autoModels: any;
  condizioni: string = '';
  marca: string = '';
  modello: string = '';
  versione: string = '';
  motore: string = '';
  targa: string = '';
  //categorie ricerca
  allestimentiesterni: string = '';
  assale: string = '';
  trasmissione: string = '';
  cristalli: string = '';
  fanaleria: string = '';
  impelettrico: string = '';
  impfrenante: string = '';
  lamieratiesterni: string = '';
  lamieratiinterni: string = '';
  partimotore: string = '';
  scarico: string = '';
  selleria: string = '';
  sicurezza: string = '';
  sterzo: string = '';
  termico: string = '';
  //altri parametri
  risultatiFiltrati: AutoModel[] = [];
  numeroRisultati: number = 0;
  price: number | undefined;
  prezzoMassimo: number | undefined;
  prezzoMinimo: number | undefined;
  titolo: string = '';

  getFilteredModels(): AutoModel[] {
    return this.autoModels.filter((model: { marca: string; }) => model.marca === this.marca);
  }
  getFilteredVersion(): AutoModel[] {
    const filteredModels = this.getFilteredModels(); // Ottieni i modelli filtrati
    return filteredModels.filter((model: { modello: string; }) => model.modello === this.modello);
  }

  onSubmit() {
    console.log('Marca:', this.marca);
  console.log('Modello:', this.modello);
  console.log('Versione:', this.versione);
  if (this.marca || this.modello || this.versione) {
    this.risultatiFiltrati = this.autoModels.filter((model: AutoModel) => {
      return (
        (!this.marca || model.marca === this.marca) &&
        (!this.modello || model.modello === this.modello) &&
        (!this.versione || model.versione === this.versione) &&
        (!this.allestimentiesterni || model.allestimentiesterni === this.allestimentiesterni) &&
        (!this.assale || model.assale === this.assale) &&
        (!this.trasmissione || model.trasmissione === this.trasmissione) &&
        (!this.cristalli || model.cristalli === this.cristalli) &&
        (!this.fanaleria || model.fanaleria === this.fanaleria) &&
        (!this.impelettrico || model.impelettrico === this.impelettrico) &&
        (!this.impfrenante || model.impfrenante === this.impfrenante) &&
        (!this.lamieratiesterni || model.lamieratiesterni === this.lamieratiesterni) &&
        (!this.lamieratiinterni || model.lamieratiinterni === this.lamieratiinterni) &&
        (!this.partimotore || model.partimotore === this.partimotore) &&
        (!this.scarico || model.scarico === this.scarico) &&
        (!this.selleria || model.selleria === this.selleria) &&
        (!this.sicurezza || model.sicurezza === this.sicurezza) &&
        (!this.sterzo || model.sterzo === this.sterzo) &&
        (!this.termico || model.termico === this.termico)
      );
    });
  } else {
    this.risultatiFiltrati = this.autoModels;
  }
  this.numeroRisultati = this.risultatiFiltrati.length;
  const prices = this.risultatiFiltrati.map((model: AutoModel) => {
    return isNaN(model.price) ? 0 : model.price;
  });
  this.prezzoMassimo = Math.max(...prices);
  this.prezzoMinimo = Math.min(...prices);
  this.updateTitolo();
  }

  filterByCategory(category: string) {
    if (category === 'allestimentiesterni') {
      if (this.allestimentiesterni === '') {
        this.allestimentiesterni = 'true';
      } else {
        this.allestimentiesterni = '';
      }
    }

    if (category === 'assale') {
      if (this.assale === '') {
        this.assale = 'true';
      } else {
        this.assale = '';
      }
    }

    if (category === 'trasmissione') {
      if (this.trasmissione === '') {
        this.trasmissione = 'true';
      } else {
        this.trasmissione = '';
      }
    }

    if (category === 'cristalli') {
      if (this.cristalli === '') {
        this.cristalli = 'true';
      } else {
        this.cristalli = '';
      }
    }

    if (category === 'fanaleria') {
      if (this.fanaleria === '') {
        this.fanaleria = 'true';
      } else {
        this.fanaleria = '';
      }
    }

    if (category === 'impelettrico') {
      if (this.impelettrico === '') {
        this.impelettrico = 'true';
      } else {
        this.impelettrico = '';
      }
    }

    if (category === 'impfrenante') {
      if (this.impfrenante === '') {
        this.impfrenante = 'true';
      } else {
        this.impfrenante = '';
      }
    }

    if (category === 'lamieratiesterni') {
      if (this.lamieratiesterni === '') {
        this.lamieratiesterni = 'true';
      } else {
        this.lamieratiesterni = '';
      }
    }

    if (category === 'lamieratiinterni') {
      if (this.lamieratiinterni === '') {
        this.lamieratiinterni = 'true';
      } else {
        this.lamieratiinterni = '';
      }
    }

    if (category === 'partimotore') {
      if (this.partimotore === '') {
        this.partimotore = 'true';
      } else {
        this.partimotore = '';
      }
    }

    if (category === 'scarico') {
      if (this.scarico === '') {
        this.scarico = 'true';
      } else {
        this.scarico = '';
      }
    }

    if (category === 'selleria') {
      if (this.selleria === '') {
        this.selleria = 'true';
      } else {
        this.selleria = '';
      }
    }

    if (category === 'sicurezza') {
      if (this.sicurezza === '') {
        this.sicurezza = 'true';
      } else {
        this.sicurezza = '';
      }
    }

    if (category === 'sterzo') {
      if (this.sterzo === '') {
        this.sterzo = 'true';
      } else {
        this.sterzo = '';
      }
    }

    if (category === 'termico') {
      if (this.termico === '') {
        this.termico = 'true';
      } else {
        this.termico = '';
      }
    }

    this.updateFilteredResults();
  }

  constructor (private VeicoliserviceService: VeicoliserviceService, private route: ActivatedRoute, private router: Router, private cartService:CartserviceService) {}
  ngOnInit() {
    this.autoModels = this.VeicoliserviceService.getAutovetture();
    this.updateFilteredResults();
    this.autoModels = this.VeicoliserviceService.getAutovetture();
    this.route.queryParams.subscribe(params => {
      this.condizioni = params['condizioni'] || '';
      this.marca = params['marca'] || '';
      this.modello = params['modello'] || '';
      this.versione = params['versione'] || '';

      // Aggiorna i risultati filtrati all'apertura della pagina
      this.updateFilteredResults();
    });
  }

  updateFilteredResults() {
    if (this.condizioni || this.marca || this.modello || this.versione || this.allestimentiesterni || this.assale || this.trasmissione || this.cristalli || this.fanaleria || this.impelettrico || this.impfrenante || this.lamieratiesterni || this.lamieratiinterni || this.partimotore || this.scarico || this.selleria || this.sicurezza || this.sterzo || this.sterzo || this.termico) {
      this.risultatiFiltrati = this.autoModels.filter((model: AutoModel) => {
        const hasCondizioniMatch = !this.condizioni || model.condizioni === this.condizioni;
        const hasMarcaMatch = !this.marca || model.marca === this.marca;
        const hasModelloMatch = !this.modello || model.modello === this.modello;
        const hasVersioneMatch = !this.versione || model.versione === this.versione;
        const hasAllestimentiesterniMatch = !this.allestimentiesterni || model.allestimentiesterni === this.allestimentiesterni;
        const hasAssaleMatch = !this.assale || model.assale === this.assale;
        const hasTrasmissioneMatch = !this.trasmissione || model.trasmissione === this.trasmissione;
        const hasCristalliMatch = !this.cristalli || model.cristalli === this.cristalli;
        const hasFanaleriaMatch = !this.fanaleria || model.fanaleria === this.fanaleria;
        const hasImpelettricoMatch = !this.impelettrico || model.impelettrico === this.impelettrico;
        const hasImpfrenanteMatch = !this.impfrenante || model.impfrenante === this.impfrenante;
        const hasLamieratiesterniMatch = !this.lamieratiesterni || model.lamieratiesterni === this.lamieratiesterni;
        const hasLamieratiinterniMatch = !this.lamieratiinterni || model.lamieratiinterni === this.lamieratiinterni;
        const hasPartimotoreMatch = !this.partimotore || model.partimotore === this.partimotore;
        const hasScaricoMatch = !this.scarico || model.scarico === this.scarico;
        const hasSelleriaMatch = !this.selleria || model.selleria === this.selleria;
        const hasSicurezzaMatch = !this.sicurezza || model.sicurezza === this.sicurezza;
        const hasSterzoMatch = !this.sterzo || model.sterzo === this.sterzo;
        const hasTermicoMatch = !this.termico || model.termico === this.termico;

        return hasCondizioniMatch && hasMarcaMatch && hasModelloMatch && hasVersioneMatch && hasAllestimentiesterniMatch && hasFanaleriaMatch && hasAssaleMatch && hasTrasmissioneMatch && hasCristalliMatch && hasImpelettricoMatch && hasImpfrenanteMatch && hasLamieratiesterniMatch && hasLamieratiinterniMatch && hasPartimotoreMatch && hasScaricoMatch && hasSelleriaMatch && hasSicurezzaMatch && hasSterzoMatch && hasTermicoMatch;
      });
    } else {
      this.risultatiFiltrati = this.autoModels;
    }
    this.numeroRisultati = this.risultatiFiltrati.length;
    const prices = this.risultatiFiltrati.map((model: AutoModel) => {
      return isNaN(model.price) ? 0 : model.price;
    });
    this.prezzoMassimo = Math.max(...prices);
    this.prezzoMinimo = Math.min(...prices);
    this.updateTitolo();
  }

  updateTitolo() {
    if (this.marca && this.modello) {
      this.titolo = `${this.marca} ${this.modello}`;
    } else if (this.marca) {
      this.titolo = `${this.marca}`;
    } else if (this.modello) {
      this.titolo = `${this.modello}`;
    } else {
      this.titolo = 'Tutti i prodotti';
    }
  }

  showCodeHTML(index: number) {
    this.cartService.showCodeHTML = true;
    this.cartService.currentIndex = index;
    this.cartService.condizioni = this.condizioni
    console.log('condizioni:',this.condizioni)
    console.log('condizioni:',this.marca)

  }
}
