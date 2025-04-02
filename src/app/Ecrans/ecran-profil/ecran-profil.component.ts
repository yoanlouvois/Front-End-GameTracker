import { Component, OnInit } from '@angular/core';
import {MatButton} from '@angular/material/button';
import {Router} from '@angular/router';
import {TokenService} from '../../services/token/token.service';
import { TokenDecodeService } from '../../services/token/token-decode.service';
import { UserControllerService } from '../../services/services/user-controller.service'; // Import du service généré
import { UserDto } from '../../services/models/user-dto'; // Import du modèle utilisateur

@Component({
  selector: 'app-ecran-profil',
  imports: [

  ],
  templateUrl: './ecran-profil.component.html',
  styleUrl: './ecran-profil.component.scss'
})
export class EcranProfilComponent implements OnInit{

  friendsCount: number = 22;
  hoursCount: number = 24;
  rank: number = 1;
  idUser: number | null = null;
  username: string | null | undefined = null; // Nom d'utilisateur récupéré via l'API

  constructor(private router: Router,
              private tokenService: TokenService,
              private tokenDecodeService: TokenDecodeService,
              private userControllerService: UserControllerService) { }

  goToHome() {
    this.router.navigate(['/Home']);
  }
  goToEditerProfil() {
    this.router.navigate(['/EditerProfil']);
  }
  goToSocial() {
    this.router.navigate(['/Social']);
  }
  goToNotifications(){
    this.router.navigate(['/Notifications']);
  }

  // Implémente la déconnexion
  logout(): void {
    // Supprime le token
    this.tokenService.clearToken();

    // Redirige vers l'écran de connexion
    this.router.navigate(['/Connexion']); // Remplacez '/login' par la route exacte de la page de connexion
  }

  // Initialisation des données au montage du composant
  ngOnInit(): void {
    // Décodage du token pour récupérer l'ID utilisateur
    this.idUser = this.tokenDecodeService.getUserId();
    if (this.idUser) {
      // Étape 2 : Appeler l'API pour récupérer les détails d'utilisateur
      this.userControllerService.getUserById({ userId: this.idUser }).subscribe({
        next: (user: UserDto) => {
          this.username = user.username; // Récupération du nom d'utilisateur
          console.log('Nom d’utilisateur récupéré:', this.username);
        },
        error: (err) => {
          console.error(`Erreur lors de la récupération de l'utilisateur :`, err);
        },
      });
    } else {
      console.warn('ID utilisateur introuvable dans le token.');
    }
  }
}
