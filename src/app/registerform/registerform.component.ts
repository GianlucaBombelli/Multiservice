import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
export class RegisterformComponent implements OnInit{

  registerForm!: FormGroup;
  registerFormAzienda!: FormGroup;

  constructor () {}

  ngOnInit (): void {
    this.registerForm = new FormGroup({
      nome: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      codiceFiscale: new FormControl('',Validators.required),
      nazione: new FormControl('',Validators.required),
      cellulare: new FormControl('',Validators.required),
      indirizzo: new FormControl('',Validators.required),
      citta: new FormControl('',Validators.required),
      cap: new FormControl('',Validators.required),
      provincia: new FormControl('',Validators.required),
      spedizioneCognomeNome: new FormControl('',Validators.required),
      spedizioneIndirizzo: new FormControl('',Validators.required),
      spedizioneCitta: new FormControl('',Validators.required),
      spedizioneCap: new FormControl('',Validators.required),
      spedizioneProvincia: new FormControl('',Validators.required),
      spedizioneNazione: new FormControl('',Validators.required),
      spedizioneCellulare: new FormControl('',Validators.required),
    }),
    this.registerFormAzienda = new FormGroup ({
      ragioneSociale: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      nazione: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      codiceFiscale: new FormControl('',Validators.required),
      partivaIva: new FormControl('',Validators.required),
      codiceSdi: new FormControl('',Validators.required),
      pec: new FormControl('',Validators.required),
      indirizzo: new FormControl('',Validators.required),
      citta: new FormControl('',Validators.required),
      cap: new FormControl('',Validators.required),
      provincia: new FormControl('',Validators.required),
      cellulare: new FormControl('',Validators.required),
      telefono: new FormControl('',Validators.required),
      spedizioneRagioneSociale: new FormControl('',Validators.required),
      spedizioneIndirizzo: new FormControl('',Validators.required),
      spedizioneCitta: new FormControl('',Validators.required),
      spedizioneCap: new FormControl('',Validators.required),
      spedizioneProvincia: new FormControl('',Validators.required),
      spedizioneNazione: new FormControl('',Validators.required),
      spedizioneCellulare: new FormControl('',Validators.required),
    })
  }

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
    if (this.registerForm.valid) {
      console.log('FormResults:', this.registerForm);
    } else {
      console.log('FormResults:',this.registerFormAzienda)
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
      if (this.currentSection === 3) {
        this.currentSection = 2;
      }
    }
  }

}

