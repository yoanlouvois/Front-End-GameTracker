import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserDto } from '../../services/models/user-dto';
import { createUser } from '../../services/fn/user-controller/create-user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Importez les modules complets
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; // Important!
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-ecran-inscription',
  templateUrl: './ecran-inscription.component.html',
  standalone: true, // Définir à true pour utiliser imports au niveau du composant
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule, // Nécessaire pour matInput
    MatButtonModule // Pour les boutons mat-raised-button
  ],
  styleUrls: ['./ecran-inscription.component.scss']
})
export class EcranInscriptionComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  // Déclarez les dépendances nécessaires
  constructor(private http: HttpClient, private router: Router) {}

  // Méthode d'inscription
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

    // Appel direct de la méthode `createUser`
    createUser(this.http, 'http://localhost:8081', { body: newUser })
      .subscribe({
        next: (response) => {
          console.log('Utilisateur créé avec succès :', response);
          alert('Inscription réussie ! Vous allez être redirigé vers la page de connexion.');
          this.router.navigate(['/Connexion']);
        },
        error: (err) => {
          console.error('Erreur lors de la création de l\'utilisateur :', err);

          if (err.status === 400) {
            alert('Champs invalides. Veuillez vérifier les informations saisies.');
          } else if (err.status === 500) {
            alert('Erreur serveur. Veuillez réessayer plus tard.');
          } else {
            alert('Une erreur est survenue. Veuillez réessayer.');
          }
        },
      });
  }

  // Navigation vers d'autres pages
  goToConnexion() {
    this.router.navigate(['/Connexion']);
  }

  goToAccueil() {
    this.router.navigate(['/Home']);
  }
}
