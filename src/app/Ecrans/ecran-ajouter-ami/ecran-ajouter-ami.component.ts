import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FriendshipControllerService, UserControllerService } from '../../services/services';
import { MatIcon } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { TokenService } from '../../services/token/token.service';
import { TokenDecodeService } from '../../services/token/token-decode.service';
import { MatButton, MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-ecran-ajouter-ami',
  templateUrl: './ecran-ajouter-ami.component.html',
  imports: [
    CommonModule,
    MatIcon,
    FormsModule,
    MatLabel,
    MatFormField,
    MatIconButton,
    MatButton,
    MatInput
  ],
  styleUrls: ['./ecran-ajouter-ami.component.scss']
})
export class EcranAjouterAmiComponent implements OnInit {
  ami: string = ""; // Pseudo de l'ami entré par l'utilisateur
  private userId: number | null = null; // ID de l'utilisateur connecté

  constructor(
    private router: Router,
    private friendshipService: FriendshipControllerService,
    private userControllerService: UserControllerService, // Service pour récupérer un utilisateur par son pseudo
    private tokenService: TokenService,
    private tokenDecodeService: TokenDecodeService
  ) {}

  ngOnInit(): void {
    // Récupérer l'ID utilisateur depuis le token
    this.userId = this.tokenDecodeService.getUserId();
    console.log('ID utilisateur extrait du token :', this.userId);
  }

  // Méthode pour envoyer la demande d'amitié
  envoyerDemandeAmi() {
    if (!this.ami.trim()) {
      alert("Veuillez entrer un pseudo valide.");
      return;
    }

    if (!this.userId) {
      alert("Impossible de récupérer votre identifiant utilisateur.");
      return;
    }

    // Étape 1 : Convertir le pseudo en ID utilisateur
    this.userControllerService.getUserByUsername({ username: this.ami }).subscribe({
      next: (user) => {
        if (user && user.id) {
          const amiId = user.id; // Récupérer l'ID de l'ami depuis la réponse API

          if (this.userId === null) {
            alert("Votre identifiant utilisateur est introuvable.");
            return;
          }

          const params = {
            senderId: this.userId as number,  // ✅ On est sûr que ce n'est pas null
            receiverId: amiId
          };

          this.friendshipService.sendFriendRequest(params).subscribe({
            next: () => {
              alert(`Demande d'amitié envoyée à ${this.ami} (ID: ${amiId})!`);
              this.router.navigate(['/Social']); // Rediriger après l'envoi
            },
            error: (err) => {
              console.error('Erreur lors de l’envoi de la demande :', err);
              alert("Erreur lors de l’envoi de la demande d'amitié.");
            }
          });
        } else {
          alert(`Utilisateur "${this.ami}" introuvable.`);
        }
      },
      error: (err) => {
        console.error(`Erreur lors de la récupération de l'utilisateur :`, err);
        alert(`Erreur lors de la recherche de l'utilisateur "${this.ami}".`);
      }
    });
  }

  // Méthode pour annuler et rediriger vers la page Social
  goToSocial() {
    this.router.navigate(['/Social']);
  }
}
