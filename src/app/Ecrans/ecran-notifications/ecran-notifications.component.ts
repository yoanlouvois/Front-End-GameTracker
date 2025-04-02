import { Component, OnInit } from '@angular/core';
import { FriendshipControllerService } from '../../services/services/friendship-controller.service';
import { Router } from '@angular/router';
import { TokenDecodeService } from '../../services/token/token-decode.service';
import { UserDto } from '../../services/models/user-dto';  // Assure-toi que ce modèle est correct
import { CommonModule } from '@angular/common';  // Import de CommonModule

@Component({
  selector: 'app-ecran-notifications',
  templateUrl: './ecran-notifications.component.html',
  styleUrls: ['./ecran-notifications.component.scss'],
  imports: [CommonModule]  // Ajoute CommonModule dans les imports
})
export class EcranNotificationsComponent implements OnInit {
  userId: number | null = null;  // ID de l'utilisateur connecté
  pendingRequests: UserDto[] = []; // Liste des demandes en attente

  constructor(
    private router: Router,
    private tokenDecodeService: TokenDecodeService,
    private friendshipControllerService: FriendshipControllerService
  ) {}

  ngOnInit(): void {
    // Récupérer l'ID utilisateur depuis le token
    this.userId = this.tokenDecodeService.getUserId();

    if (this.userId !== null) {
      this.loadPendingRequests();
    } else {
      console.error("Impossible de récupérer l'ID utilisateur.");
    }
  }

  // Charger les demandes d'amitié en attente
  private loadPendingRequests(): void {
    this.friendshipControllerService.getPendingRequests({ userId: this.userId! }).subscribe({
      next: (requests) => {
        this.pendingRequests = requests;  // Stocke les demandes reçues
        console.log("📩 Demandes d'amitié en attente :", this.pendingRequests); // ⬅️ Affichage dans le terminal
      },
      error: (err) => {
        console.error("❌ Erreur lors de la récupération des demandes d'amitié :", err);
      }
    });
  }
}
