import { Component } from '@angular/core';
import { CartserviceService } from '../service/cartservice.service';

@Component({
  selector: 'app-carrello-prod',
  templateUrl: './carrello-prod.component.html',
  styleUrls: ['./carrello-prod.component.css']
})
export class CarrelloProdComponent {

  constructor(public cartService: CartserviceService) { }

  unShowCodeHTML() {
    this.cartService.showCodeHTML = false;

  }


}
