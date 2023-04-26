import { Component, OnInit } from '@angular/core';
import { ServiziService } from '../data-service/servizi.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  links: any
  link: any

  constructor(private linkService: ServiziService) { }

  ngOnInit(): void {
    this.links = this.linkService.getLinks()
  }
}
