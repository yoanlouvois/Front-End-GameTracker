import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FriendshipControllerService } from '../../services/services';  // Service où sendFriendRequest est défini
import { MatIcon } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input'; // Import du service AuthService
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
  ami: string = ""; // ID de l'ami que l'utilisateur veut ajouter
  private userId: number | null = null; // ID de l'utilisateur connecté

  constructor(
    private router: Router,
    private friendshipService: FriendshipControllerService, // Le service où la méthode sendFriendRequest est définie
    private tokenService: TokenService,
    private tokenDecodeService: TokenDecodeService
  ) {}

  ngOnInit(): void {
    // Décodage du token pour récupérer l'ID utilisateur
    this.userId = this.tokenDecodeService.getUserId();
    console.log('ID utilisateur extrait du token :', this.userId);
  }

  // Méthode pour envoyer la demande d'amitié
  envoyerDemandeAmi() {
    // Convertir l'ID de l'ami en entier
    const amiId = parseInt(this.ami, 10); // Convertir l'ID ami en entier

    // Vérifier si l'ID utilisateur et l'ID de l'ami sont valides
    if (this.userId && !isNaN(amiId) && amiId > 0) {
      const params = {
        senderId: this.userId,  // ID de l'utilisateur connecté
        receiverId: amiId       // ID de l'ami converti en entier
      };

      // Appeler la méthode sendFriendRequest pour envoyer la demande d'amitié
      this.friendshipService.sendFriendRequest(params).subscribe({
        next: () => {
          alert(`Demande d'amitié envoyée à l'utilisateur ${amiId}!`);
          this.router.navigate(['/Social']); // Rediriger vers la page Social après l'envoi
        },
        error: (err) => {
          console.error('Erreur lors de l’envoi de la demande :', err);
          alert('Erreur lors de l’envoi de la demande d\'amitié.');
        }
      });
    } else {
      alert(this.userId);
    }
  }

  // Méthode pour annuler et rediriger vers la page Social
  goToSocial() {
    this.router.navigate(['/Social']);
  }
}
