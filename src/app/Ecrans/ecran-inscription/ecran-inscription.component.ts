import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {NgIf} from "@angular/common";
import {MatIcon} from '@angular/material/icon';
import {MatButton, MatIconButton} from '@angular/material/button';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {UserDto} from '../../services/models/user-dto';
import {createUser} from '../../services/fn/user-controller/create-user';
import {AuthenticationControllerService} from '../../services/services/authentication-controller.service';

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
  // Déclaration du formulaire
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthenticationControllerService) {}
/*
  // Quand l'utilisateur clique sur Valider
  createUser() {
    if (!this.username || !this.email || !this.password) {
      alert('Tous les champs sont obligatoires');
      return;
    }

    const newUser: UserDto = {
      username: this.username,
      email: this.email,
      password: this.password,
    };

    // Appeler la méthode createUser depuis le service
    this.authService
      .createUser({ body: newUser }) // Fournissez le paramètre attendu
      .subscribe({
        next: (res) => {
          console.log('Utilisateur créé avec succès :', res);
          alert('Inscription réussie ! Vous allez être redirigé vers la page de connexion.');
          this.router.navigate(['/Connexion']); // Rediriger vers la page de connexion
        },
        error: (err) => {
          console.error('Erreur lors de la création de l\'utilisateur :', err);
          alert('Une erreur est survenue lors de l\'inscription. Veuillez réessayer.');
        },
      });
  }*/

  goToConnexion() {
    this.router.navigate(['/Connexion']);
  }

  goToAccueil() {
    this.router.navigate(['/Home']);
  }
}
