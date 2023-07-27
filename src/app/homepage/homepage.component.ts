import { Component, OnInit } from '@angular/core';
import { VeicoliserviceService } from '../service/veicoliservice.service';
import { Router } from '@angular/router';


interface AutoModel {
  marca: string;
  modello: string;
  versione: string;
  targa: string;
  motore: string;
}

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{

  ngOnInit() {
    this.autoModels = this.VeicoliserviceService.getAutovetture();
    this.slideShow();
  }

getFilteredModels(): AutoModel[] {
  return this.autoModels.filter((model: { marca: string; }) => model.marca === this.marca);
}
getFilteredVersion(): AutoModel[] {
  return this.autoModels.filter((model: { modello: string; }) => model.modello === this.modello);
}

  activeIndex = 0;
  slides = [
    { image: 'assets/provacarosello.jpg', alt: 'Flyers 1' },
    { image: 'assets/provacarosello1.jpg', alt: 'Flyers 2' },
    { image: 'assets/provacarosello2.jpg', alt: 'Flyers 3' },
  ];

  prevSlide() {
    if (this.activeIndex === 0) {
      this.activeIndex = this.slides.length - 1;
    } else {
      this.activeIndex--;
    }
  }

  nextSlide() {
    if (this.activeIndex === this.slides.length - 1) {
      this.activeIndex = 0;
    } else {
      this.activeIndex++;
    }
  }

  slideShow() {
    setInterval(() => {
      this.nextSlide();
    }, 7500);
  }
  showIframe2 = false;
  changecolor = false;

  condizioni: string = '';
  marca: string = '';
  modello: string = '';
  versione: string = '';
  motore: string = '';
  targa: string = '';
  autoModels: any;


  onSubmit() {
    let queryParams: { [key: string]: string } = {};

    if (this.changecolor) {
      queryParams['condizioni'] = 'usato';
    } else {
      queryParams['condizioni'] = 'nuovo';
    }

    if (this.marca) {
      queryParams['marca'] = this.marca;
    }

    if (this.modello) {
      queryParams['modello'] = this.modello;
    }

    if (this.versione) {
      queryParams['versione'] = this.versione;
    }

    this.router.navigate(['/searchpage'], { queryParams: queryParams });
  }

  onSubmitMotor() {
    let queryParams: { [key: string]: string } = {};

    if (this.changecolor) {
      queryParams['condizioni'] = 'usato';
    } else {
      queryParams['condizioni'] = 'nuovo';
    }

    if (this.motore) {
      queryParams['motore'] = this.motore;
    }

    this.router.navigate(['/searchpage'], { queryParams: queryParams });
  }

  onSubmitPlate() {
    let queryParams: { [key: string]: string } = {};

    if (this.changecolor) {
      queryParams['condizioni'] = 'usato';
    } else {
      queryParams['condizioni'] = 'nuovo';
    }

    if (this.targa) {
      queryParams['targa'] = this.targa;
    }

    console.log('Targa:', this.targa,);

    this.router.navigate(['/searchpage'], { queryParams: queryParams });
  }

  resetParameters() {
    this.marca = '';
    this.modello = '';
    this.versione = '';
  }

  constructor(private VeicoliserviceService: VeicoliserviceService, private router: Router) { }


}

