import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.3s ease', style({ transform: 'translateX(0)' }))
      ]),
    ])
  ]
})
export class RegisterformComponent {

  email: string = '';
  password: string = '';
  confermapass: string = '';
  nazione: string = '';
  codiceFiscale: string = '';
  partivaIva: string = '';
  codiceSdi: string = '';
  indirizzo: string = '';
  citta: string = '';
  cap: string = '';
  provincia: string = '';
  pec: string = '';
  telefono: string = '';
  cellulare: string = '';
  ragioneSociale: string = '';
  cognomeNome: string = '';
  spedizioneRagioneSociale: string = '';
  spedizioneCognomeNome: string = '';
  spedizioneIndirizzo: string = '';
  spedizioneCitta: string = '';
  spedizioneCap: string = '';
  spedizioneNazione: string = '';
  spedizioneProvincia: string = '';
  spedizioneCellulare: string = '';

  currentSection = 1; // Form iniziale visibile
  totalSections = 2; // Numero totale di sezioni/form
  isAzienda: string = 'privato';

  nextSection() {
    if (this.currentSection < this.totalSections) {
      this.currentSection++;
    }
    console.log(this.currentSection, this.totalSections)
  }

  previousSection() {
    if (this.currentSection > 1) {
      this.currentSection--;
    }
  }

  onInviadati() {
    console.log('Account:', this.isAzienda)
    if (this.email !== '') {
      console.log('email:', this.email);
    }
    if (this.password !== '') {
      console.log('password:', this.password);
    }
    if (this.ragioneSociale !== '') {
      console.log('ragioneSociale:', this.ragioneSociale);
    }
    if (this.cognomeNome !== '') {
      console.log('cognomeNome:', this.cognomeNome);
    }
    if (this.confermapass !== '') {
      console.log('confermapass:', this.confermapass);
    }
    if (this.nazione !== '') {
      console.log('nazione:', this.nazione);
    }
    if (this.codiceFiscale !== '') {
      console.log('codiceFiscale:', this.codiceFiscale);
    }
    if (this.partivaIva !== '') {
      console.log('partivaIva:', this.partivaIva);
    }
    if (this.codiceSdi !== '') {
      console.log('codiceSdi:', this.codiceSdi);
    }
    if (this.indirizzo !== '') {
      console.log('indirizzo:', this.indirizzo);
    }
    if (this.citta !== '') {
      console.log('citta:', this.citta);
    }
    if (this.cap !== '') {
      console.log('cap:', this.cap);
    }
    if (this.provincia !== '') {
      console.log('provincia:', this.provincia);
    }
    if (this.pec !== '') {
      console.log('pec:', this.pec);
    }
    if (this.telefono !== '') {
      console.log('telefono:', this.telefono);
    }
    if (this.cellulare !== '') {
      console.log('cellulare:', this.cellulare);
    }
    if (this.spedizioneRagioneSociale !== '' && this.checkboxValue) {
      console.log('spedizioneRagioneSociale:', this.spedizioneRagioneSociale);
    }
    if (this.spedizioneCognomeNome !== '' && this.checkboxValue) {
      console.log('spedizioneCognomeNome:', this.spedizioneCognomeNome);
    }
    if (this.spedizioneIndirizzo !== '' && this.checkboxValue) {
      console.log('spedizioneIndirizzo:', this.spedizioneIndirizzo);
    }
    if (this.spedizioneCitta !== '' && this.checkboxValue) {
      console.log('spedizioneCitta:', this.spedizioneCitta);
    }
    if (this.spedizioneCap !== '' && this.checkboxValue) {
      console.log('spedizioneCap:', this.spedizioneCap);
    }
    if (this.spedizioneNazione !== '' && this.checkboxValue) {
      console.log('spedizioneNazione:', this.spedizioneNazione);
    }
    if (this.spedizioneProvincia !== '' && this.checkboxValue) {
      console.log('spedizioneProvincia:', this.spedizioneProvincia);
    }
    if (this.spedizioneCellulare !== '' && this.checkboxValue) {
      console.log('spedizioneCellulare:', this.spedizioneCellulare);
    }
  }

  checkboxValue: boolean = false;

  onCheckboxChange() {
    if (this.checkboxValue) {
      this.totalSections++
      console.log("Checkbox attivato");
      console.log(this.totalSections)
    } else {
      this.totalSections--
      console.log("Checkbox disattivato");
      console.log(this.totalSections);
      if (this.currentSection = 3) {
        this.currentSection = 2;
      }
    }
  }

  isInvalidCodiceFiscale: boolean = false;

  verifyCodiceFiscale() {
    const regex = /^[A-Z]{6}\d{2}[A-Z]\d{2}[A-Z]\d{3}[A-Z]$/;
    this.isInvalidCodiceFiscale = !regex.test(this.codiceFiscale);
  }

}

