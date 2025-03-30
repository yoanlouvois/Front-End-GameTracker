import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {NgIf} from "@angular/common";
import {MatIcon} from '@angular/material/icon';
import {MatButton, MatIconButton} from '@angular/material/button';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ecran-inscription',
    imports: [
      ReactiveFormsModule,
      FormsModule,
      MatIcon,
      MatLabel,
      MatFormField,
      MatIconButton,
      MatInput,
      MatButton,
      NgIf,
    ],
  templateUrl: './ecran-inscription.component.html',
  styleUrl: './ecran-inscription.component.scss'
})
export class EcranInscriptionComponent {
  username: any;
  password: any;
  constructor(private router: Router) { }

  goToConnexion() {
    this.router.navigate(['/Connexion']);
  }

  goToAccueil(){
    this.router.navigate(['/Home'])
  }
}
