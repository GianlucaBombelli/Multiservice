import { Component } from '@angular/core';
import { VeicoliserviceService } from '../service/veicoliservice.service';
import { Router } from '@angular/router';


interface AutoModel {
  marca: string;
  modello: string;
  versione: string;
}

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {


getFilteredModels(): AutoModel[] {
  return this.autoModels.filter((model: { marca: string; }) => model.marca === this.marca);
}
getFilteredVersion(): AutoModel[] {
  return this.autoModels.filter((model: { modello: string; }) => model.modello === this.modello);
}

  activeIndex = 0;
  slides = [
    { image: 'assets/provacarosello.png', alt: 'Flyers 1' },
    { image: 'assets/provacarosello1.png', alt: 'Flyers 1' },
    { image: 'assets/provacarosello2.png', alt: 'Flyers 1' },
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
    if (this.changecolor) {
      this.condizioni = 'usato';
    } else {
      this.condizioni = 'nuovo';
    }
    console.log('Condizioni:', this.condizioni,);
    console.log('Motore:', this.motore,);
  }

  onSubmitPlate() {
    if (this.changecolor) {
      this.condizioni = 'usato';
    } else {
      this.condizioni = 'nuovo';
    }
    console.log('Condizioni:', this.condizioni,);
    console.log('Targa:', this.targa,);
  }

  constructor(private VeicoliserviceService: VeicoliserviceService, private router: Router) { }

  ngOnInit() {
    this.slideShow();
      this.autoModels = this.VeicoliserviceService.getAutovetture()
  }

}

