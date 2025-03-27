import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {NgIf} from '@angular/common';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ecran-editer-profil',
  imports: [
    FormsModule,
    MatButton,
    MatFormField,
    MatIcon,
    MatIconButton,
    MatInput,
    MatLabel,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './ecran-editer-profil.component.html',
  styleUrl: './ecran-editer-profil.component.scss'
})
export class EcranEditerProfilComponent {
  username: any;
  password: any;
  constructor(private router: Router) { }
  goToProfil() {
    this.router.navigate(['/Profil']);
  }
}
