import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
  toggleShowCodeHTML(index: number) {
    throw new Error('Method not implemented.');
  }

  showCodeHTML = false;
  currentIndex: number | undefined;
  condizioni: string = '';

  constructor() { }
}
