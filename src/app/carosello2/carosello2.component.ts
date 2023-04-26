import { Component, ElementRef } from '@angular/core';

interface SliderOptions {
  speed: number;
}

class Slider {
  private slider: HTMLElement;
  private list: HTMLElement;
  private items: HTMLCollectionOf<Element>;
  private speed: number;
  private width: number;
  private position: number;
  private clones: number;

  constructor(slider: HTMLElement, options: SliderOptions) {
    this.slider = slider;
    this.list = slider.querySelector(".list") as HTMLElement;
    this.items = this.list.getElementsByClassName("logo");
    this.speed = options.speed;
    this.width = 0;
    this.position = 0;
    this.clones = 0;

    // Set width of slider
    Array.from(this.items).forEach(item => {
      this.width += item.clientWidth;
    });
    this.list.style.width = `${this.width}px`;

    // Duplicate items for infinite scrolling
    const listClone = this.list.cloneNode(true) as HTMLElement;
    this.list.parentNode?.insertBefore(listClone, this.list.nextSibling);
    this.list = listClone;
    this.width *= 2;
    this.list.style.width = `${this.width}px`;

    // Duplicate items at the end for infinite looping
    let totalWidth = this.width;
    while (totalWidth < window.innerWidth * 1) {
      const itemClones = this.items.length;
      for (let i = 0; i < itemClones; i++) {
        const itemClone = this.items[i].cloneNode(true) as HTMLElement;
        this.list.appendChild(itemClone);
      }
      totalWidth += this.width;
      this.clones++;
    }

    // Start animation
    requestAnimationFrame(this.animate.bind(this));
  }

  animate() {
    this.position -= this.speed;
    if (this.position < -this.width / 0.69) {
      this.position += this.width / 0.69;
    }
    this.list.style.transform = `translateX(${this.position}px)`;

    // Check if the carosello has looped and remove extra clones
    if (this.position < -this.width * (this.clones + 1)) {
      const clonesToRemove = Math.floor((-this.position - this.width * (this.clones + 1)) / this.width);
      for (let i = 0; i < clonesToRemove; i++) {
        const lastItem = this.list.lastElementChild;
        if (lastItem && lastItem.classList.contains("logo")) {
          this.list.removeChild(lastItem);
        }
      }
      this.clones -= clonesToRemove;
    }

    requestAnimationFrame(this.animate.bind(this));
  }
}

@Component({
  selector: 'app-carosello2',
  templateUrl: './carosello2.component.html',
  styleUrls: ['./carosello2.component.css']
})
export class Carosello2Component {
  constructor(private el: ElementRef) {}

  ngOnInit() {
    const slider = this.el.nativeElement.querySelector(".slider") as HTMLElement;
    const mySlider = new Slider(slider, { speed: 2 });
  }
}
