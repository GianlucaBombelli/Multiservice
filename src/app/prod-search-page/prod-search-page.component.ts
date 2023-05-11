import { Component, Input, OnInit } from '@angular/core';
import { VeicoliserviceService } from '../service/veicoliservice.service';

interface AutoModel {
  marca: string;
  modello: string;
  versione: string;
  allestimentiesterni: string;
  price: number;
}

@Component({
  selector: 'app-prod-search-page',
  templateUrl: './prod-search-page.component.html',
  styleUrls: ['./prod-search-page.component.css']
})
export class ProdSearchPageComponent {

  autoModels: any;
  condizioni: string = '';
  marca: string = '';
  modello: string = '';
  versione: string = '';
  motore: string = '';
  targa: string = '';
  allestimentiesterni: string = '';
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
    return this.autoModels.filter((model: { modello: string; }) => model.modello === this.modello);
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
        (!this.allestimentiesterni || model.allestimentiesterni === this.allestimentiesterni)
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
    if (this.allestimentiesterni === category) {
      this.allestimentiesterni = '';
    } else {
      this.allestimentiesterni = category;
    }
    this.updateFilteredResults();
  }

  constructor (private VeicoliserviceService: VeicoliserviceService,) {}
  ngOnInit() {
    this.autoModels = this.VeicoliserviceService.getAutovetture();
    this.updateFilteredResults();
  }

  updateFilteredResults() {
    if (this.marca || this.modello || this.versione || this.allestimentiesterni) {
      this.risultatiFiltrati = this.autoModels.filter((model: AutoModel) => {
        const hasMarcaMatch = !this.marca || model.marca === this.marca;
        const hasModelloMatch = !this.modello || model.modello === this.modello;
        const hasVersioneMatch = !this.versione || model.versione === this.versione;
        const hasAllestimentiesterniMatch = !this.allestimentiesterni || model.allestimentiesterni === this.allestimentiesterni;

        return hasMarcaMatch && hasModelloMatch && hasVersioneMatch && hasAllestimentiesterniMatch;
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
      this.titolo = 'Tutto i prodotti';
    }
  }
}
