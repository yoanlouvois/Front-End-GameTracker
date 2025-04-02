import { Component, ViewChild, ElementRef, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserDto } from '../../services/models/user-dto';
import { TokenDecodeService } from '../../services/token/token-decode.service';
import { MessageControllerService } from '../../services/services/message-controller.service';
import { MessageDto } from '../../services/models/message-dto';
import { PageMessageDto } from '../../services/models/page-message-dto';
import { FriendshipControllerService } from '../../services/services/friendship-controller.service';
import { SendMessage$Params } from '../../services/fn/message-controller/send-message';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ecran-discussions',
  imports: [
    CommonModule,  // Ajoutez CommonModule ici
  ],
  templateUrl: './ecran-discussions.component.html',
  styleUrls: ['./ecran-discussions.component.scss']
})
export class EcranDiscussionsComponent implements OnInit {
  userId: number | null = null;
  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;
  messages: MessageDto[] = [];
  friend: UserDto | null | undefined = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private tokenDecodeService: TokenDecodeService,
    private messageControllerService: MessageControllerService,
    private friendshipControllerService: FriendshipControllerService,
    private cdr: ChangeDetectorRef // Ajout du ChangeDetectorRef
  ) {}

  ngOnInit() {
    // Récupérer l'ID de l'utilisateur depuis le service de décryptage du token
    this.userId = this.tokenDecodeService.getUserId();
    if (this.userId === null) {
      console.error("Impossible de récupérer l'ID utilisateur.");
      return;
    }

    // Récupérer le nom de l'ami depuis les paramètres de l'URL
    this.route.paramMap.subscribe(params => {
      const friendName = params.get('friendName');
      if (friendName) {
        this.loadFriendData(friendName);
      }
    });
  }

  // Charger les données de l'ami en fonction de son nom
  private loadFriendData(friendName: string) {
    this.friendshipControllerService.getAllFriendshipsForUser({ userId: this.userId! }).subscribe({
      next: (friendships) => {
        const friendship = friendships.find(f => (f.user1?.username === friendName || f.user2?.username === friendName));
        if (friendship) {
          this.friend = friendship.user1?.username === friendName ? friendship.user1 : friendship.user2;
          if (this.friend) {
            this.loadMessages();
          } else {
            console.error("L'ami n'a pas été trouvé.");
          }
        } else {
          console.error("Amitié introuvable avec", friendName);
        }
      },
      error: (err) => console.error("Erreur lors de la récupération des amis", err)
    });
  }

  // Charger les messages de la conversation
  private loadMessages() {
    if (!this.friend) return;
    this.messageControllerService.getConversation({
      user1Id: this.userId!,
      user2Id: this.friend.id!,
      pageable: { page: 0, size: 50, sort: ['creationDate,desc'] } // Modification de 'timestamp' par 'creationDate'
    }).subscribe({
      next: (conversation: PageMessageDto) => {
        this.messages = conversation.content || [];
        this.scrollToBottom(); // Scroller vers le bas pour afficher le dernier message
      },
      error: (err) => console.error("Erreur lors de la récupération des messages", err)
    });
  }

  // Envoyer un message
  sendMessage(input: HTMLInputElement) {
    if (!this.friend) return;

    const messageText = input.value.trim();
    if (messageText === '') return;

    // Créer un objet de type MessageDto
    const messageDto: MessageDto = {
      content: messageText,
      creationDate: new Date().toISOString(),
      sender: {
        id: this.userId!,
        username: 'Nom d’utilisateur',  // Remplacer par les informations réelles si elles existent
      },
      receiver: {
        id: this.friend.id!,
        username: this.friend.username!,  // Remplacer par les informations réelles si elles existent
      },
    };

    const params: SendMessage$Params = {
      body: messageDto
    };

    // Appeler la méthode sendMessage du service pour envoyer le message
    this.messageControllerService.sendMessage(params).subscribe({
      next: (sentMessage) => {
        // Ajouter le message envoyé à la liste des messages
        this.messages.push(sentMessage);
        this.cdr.detectChanges(); // Forcer la mise à jour de la vue
        this.scrollToBottom(); // Faire défiler l'écran vers le bas
      },
      error: (err) => console.error("Erreur lors de l'envoi du message", err)
    });

    input.value = ""; // Réinitialiser l'input de message
  }


  // Faire défiler l'écran vers le bas pour afficher le dernier message
  private scrollToBottom() {
    setTimeout(() => {
      const container = this.messagesContainer.nativeElement;
      container.scrollTop = container.scrollHeight;
    }, 100);
  }

  goToSocial() {
    this.router.navigate(['/Social']);
  }
}
