import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';



// @ts-ignore
import { TokenService } from '../../services/token/token.service';


interface Message {
  text: string;
  sender: 'left' | 'right';
}

@Component({
  selector: 'app-ecran-discussions',
  imports: [CommonModule],
  templateUrl: './ecran-discussions.component.html',
  styleUrls: ['./ecran-discussions.component.scss']
})
export class EcranDiscussionsComponent implements OnInit {
  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;

  messages: Message[] = [];
  friend = {
    name: 'LionelPessi35',
    id: 'user2', // Remplace par l'ID réel du deuxième utilisateur
    messages: [] as Message[]
  };
  private userId = 'user1'; // Remplace par l'ID réel de l'utilisateur
  private apiUrl = 'http://localhost:3000/gametracker/v1/message';

  constructor(
    private router: Router,
    private http: HttpClient,
    private tokenService: TokenService,
    private route: ActivatedRoute  // Ajout pour récupérer les paramètres de l'URL
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const friendName = params.get('friendName');
      if (friendName) {
        this.friend.name = friendName; // Mise à jour du nom de l'ami avec qui on discute
      }
    });

    this.loadMessages();
  }

  private getAuthHeaders() {
    return {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.tokenService.token}`
      })
    };
  }

  // Récupérer la conversation depuis l'API
  private loadMessages() {
    this.getConversation().subscribe(conversation => {
      this.messages = conversation;
      this.friend.messages = [...this.messages];
      this.scrollToBottom();
    });
  }

  getConversation(): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.apiUrl}/conversation/${this.userId}/${this.friend.id}`, this.getAuthHeaders());
  }

  // Envoyer un message
  sendMessage(input: HTMLInputElement) {
    const messageText = input.value.trim();
    if (messageText === '') return;

    const message: Message = { text: messageText, sender: 'right' };

    // Ajouter le message localement pour affichage instantané
    this.messages.push(message);
    this.friend.messages.push(message);
    this.scrollToBottom();

    // Envoyer le message à l'API
    this.http.post<Message>(`${this.apiUrl}/send`, {
      senderId: this.userId,
      receiverId: this.friend.id,
      text: messageText
    }, this.getAuthHeaders()).subscribe();

    input.value = "";
  }

  // Scroll automatique vers le bas
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
