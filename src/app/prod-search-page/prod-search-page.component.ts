import { Component, Input, OnInit } from '@angular/core';
import { VeicoliserviceService } from '../service/veicoliservice.service';

@Component({
  selector: 'app-prod-search-page',
  templateUrl: './prod-search-page.component.html',
  styleUrls: ['./prod-search-page.component.css']
})
export class ProdSearchPageComponent {

  autoModels: any;

  constructor (private VeicoliserviceService: VeicoliserviceService) {}
  ngOnInit() {
      this.autoModels = this.VeicoliserviceService.getAutovetture()
  }
}
