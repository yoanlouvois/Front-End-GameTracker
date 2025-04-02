import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserDto } from '../../services/models/user-dto';
import { TokenDecodeService } from '../../services/token/token-decode.service';
import { FriendshipControllerService } from '../../services/services/friendship-controller.service';
import { FriendshipDto } from '../../services/models/friendship-dto';

@Component({
  selector: 'app-ecran-social',
  imports: [CommonModule],
  templateUrl: './ecran-social.component.html',
  styleUrls: ['./ecran-social.component.scss']
})
export class EcranSocialComponent {
  userId: number | null = null;
  friends: UserDto[] = [];

  constructor(
    private router: Router,
    private tokenDecodeService: TokenDecodeService,
    private friendshipControllerService: FriendshipControllerService
  ) {}

  ngOnInit(): void {
    this.userId = this.tokenDecodeService.getUserId();
    if (this.userId !== null) {
      this.loadFriends();
    } else {
      console.error("Impossible de récupérer l'ID utilisateur.");
    }
  }

  private loadFriends(): void {
    this.friendshipControllerService.getAllFriendshipsForUser({ userId: this.userId! }).subscribe({
      next: (friendships: FriendshipDto[]) => {
        // Filtrer les amitiés pour ne garder que celles qui sont ACCEPTED
        this.friends = friendships
          .filter(f => f.status === 'ACCEPTED')  // Ne garde que celles avec un statut "ACCEPTED"
          .map(f => f.user1?.id === this.userId ? f.user2! : f.user1!);  // Récupère l'utilisateur ami en fonction de l'ID utilisateur
        console.log("Amis acceptés récupérés :", this.friends);
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des amis :", err);
      }
    });
  }

  removeFriend(friend: UserDto): void {
    if (this.userId === null || friend.id === undefined) {
      console.error(" Impossible de supprimer l'ami : ID utilisateur ou ami manquant.");
      return;
    }

    this.friendshipControllerService.getFriendshipBetweenUsers({ user1Id: this.userId, user2Id: friend.id }).subscribe({
      next: (friendship: FriendshipDto) => {
        if (!friendship.id) {
          console.error(" Amitié introuvable pour suppression.");
          return;
        }

        this.friendshipControllerService.deleteFriendship({ friendshipId: friendship.id }).subscribe({
          next: () => {
            console.log(` Amitié avec ${friend.username} supprimée.`);
            this.friends = this.friends.filter(f => f.id !== friend.id);
          },
          error: (err) => {
            console.error(" Erreur lors de la suppression :", err);
          }
        });
      },
      error: (err) => {
        console.error(" Erreur lors de la récupération de l'amitié :", err);
      }
    });
  }


  goAjouterAmi() {
    this.router.navigate(['/AjouterAmi']);
  }

  goDiscussions(friendName: string | undefined) {
    if (friendName) {
      this.router.navigate(['/Discussions', friendName]);
    } else {
      console.error("Erreur : le nom de l'ami est indéfini.");
    }
  }
}
