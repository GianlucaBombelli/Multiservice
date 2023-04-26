import { Component } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent {
  activeIndex = 0;
  slides = [
    { image: 'assets/provastory.png', alt: 'Flyers 1' },
    { image: 'assets/provastory1.png', alt: 'Flyers 1' },
    { image: 'assets/provastory2.png', alt: 'Flyers 1' },
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
