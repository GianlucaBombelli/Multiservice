import { Component } from '@angular/core';

@Component({
  selector: 'app-prod-search-page',
  templateUrl: './prod-search-page.component.html',
  styleUrls: ['./prod-search-page.component.css']
})
export class ProdSearchPageComponent {

  id: any;
  condizioni: any;
  marca: any;
  modello: any;
  versione: any;

  constructor () {
    console.log('Condizioni:', this.condizioni,);
    console.log('Marca:', this.marca,);
    console.log('Modello:', this.modello,);
    console.log('Versione:', this.versione,);
  }

}
