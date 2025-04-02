import { Component, OnInit } from '@angular/core';
import { FriendshipControllerService } from '../../services/services/friendship-controller.service';
import { Router } from '@angular/router';
import { TokenDecodeService } from '../../services/token/token-decode.service';
import { UserDto } from '../../services/models/user-dto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ecran-notifications',
  templateUrl: './ecran-notifications.component.html',
  styleUrls: ['./ecran-notifications.component.scss'],
  imports: [CommonModule]
})
export class EcranNotificationsComponent implements OnInit {
  userId: number | null = null;
  pendingRequests: UserDto[] = [];

  constructor(
    private router: Router,
    private tokenDecodeService: TokenDecodeService,
    private friendshipControllerService: FriendshipControllerService
  ) {}

  ngOnInit(): void {
    this.userId = this.tokenDecodeService.getUserId();
    if (this.userId !== null) {
      this.loadPendingRequests();
    } else {
      console.error("Impossible de récupérer l'ID utilisateur.");
    }
  }

  private loadPendingRequests(): void {
    this.friendshipControllerService.getPendingRequests({ userId: this.userId! }).subscribe({
      next: (requests) => {
        this.pendingRequests = requests;
        console.log("📩 Demandes d'amitié en attente :", this.pendingRequests);
      },
      error: (err) => {
        console.error("❌ Erreur lors de la récupération des demandes d'amitié :", err);
      }
    });
  }

  private getFriendshipId(user1Id: number, user2Id: number): void {
    this.friendshipControllerService.getFriendshipBetweenUsers({ user1Id, user2Id }).subscribe({
      next: (friendship) => {
        if (friendship.id) {
          this.acceptFriendRequest(friendship.id);
        } else {
          console.error("Aucune amitié trouvée entre les utilisateurs");
        }
      },
      error: (err) => {
        console.error("Erreur lors de la récupération de l'ID de l'amitié :", err);
      }
    });
  }

  acceptFriendRequestByUserIds(requesterId: number): void {
    if (this.userId !== null) {
      this.getFriendshipId(requesterId, this.userId);
    } else {
      console.error("Utilisateur non connecté.");
    }
  }

  private acceptFriendRequest(friendshipId: number): void {
    this.friendshipControllerService.acceptFriendRequest({ friendshipId }).subscribe({
      next: (response) => {
        console.log(" Demande acceptée :", response);
        this.pendingRequests = this.pendingRequests.filter(request => request.id !== friendshipId);
        window.location.reload();
      },
      error: (err) => {
        console.error(" Erreur lors de l'acceptation de la demande d'amitié :", err);
      }
    });
  }
}
