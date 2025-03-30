import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIcon} from '@angular/material/icon';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {NgIf} from '@angular/common';
import {MatButton, MatIconButton} from '@angular/material/button';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ecran-connexion',
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
  templateUrl: './ecran-connexion.component.html',
  styleUrl: './ecran-connexion.component.scss'
})
export class EcranConnexionComponent {
  username: any;
  password: any;
  constructor(private router: Router) { }

  goToInscription() {
    this.router.navigate(['/Inscription']);
  }

  goToAccueil(){
    this.router.navigate(['/Home'])
  }
}
