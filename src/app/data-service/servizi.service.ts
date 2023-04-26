import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiziService {

  links = [
    {nome : "Demolizioni",
      },
    {nome : "Carrozzeria",
      },
    {nome : "Gommista",
      },
    {nome : "Officina meccanica ed elettrauto",
      },
    {nome : "Vendita ricambi",
      },
    {nome : "Acquisto/acquisto auto usate/sinistrate",
      },
    {nome : "Bonifiche stradali e soccorsi stradali",
      },
    {nome : "Deposito giudiziario",
      },
  ]

  constructor() { }

  getLinks(){
    return this.links
  }

  getLink(index: number) {
    return this.links[index]
  }

}
