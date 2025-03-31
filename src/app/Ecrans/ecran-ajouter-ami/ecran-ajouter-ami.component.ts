import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {NgIf} from "@angular/common";
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ecran-ajouter-ami',
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
  templateUrl: './ecran-ajouter-ami.component.html',
  styleUrl: './ecran-ajouter-ami.component.scss'
})
export class EcranAjouterAmiComponent {
  ami: any;
  constructor(private router: Router) { }
  goToSocial() {
    this.router.navigate(['/Social']);
  }
}
