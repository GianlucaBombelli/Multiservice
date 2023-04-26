import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

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

  constructor() { }

  ngOnInit() {
    this.slideShow();
  }

}

