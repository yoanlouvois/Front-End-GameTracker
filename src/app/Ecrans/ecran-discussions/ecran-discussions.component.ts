import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ecran-discussions',
  imports: [CommonModule],
  templateUrl: './ecran-discussions.component.html',
  styleUrls: ['./ecran-discussions.component.scss']
})
export class EcranDiscussionsComponent implements OnInit {
  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;

  messages: { text: string; sender: 'left' | 'right' }[] = [];

  friend = {
    name: 'LionelPessi35',
    messages: [] as { text: string; sender: 'left' | 'right' }[]
  };

  // Méthode pour envoyer un message
  sendMessage(input: HTMLInputElement) {
    const messageText = input.value.trim();
    if (messageText === '') return;

    // Déterminer si le message est envoyé par l'utilisateur
    const isUserMessage = messageText.startsWith("Moi:");
    const sender: 'left' | 'right' = isUserMessage ? 'right' : 'left'; // On déclare sender avec les types corrects

    // Créer le message
    const message = { text: messageText.replace("Moi:", ""), sender };

    // Ajouter le message dans la liste des messages de l'utilisateur
    this.messages.push(message);

    // Ajouter aussi le message dans les messages de l'ami
    this.friend.messages.push(message);

    // Sauvegarder les messages dans localStorage
    this.saveMessages();

    // Vider l'input
    input.value = "";

    // Faire défiler vers le bas après envoi du message
    this.scrollToBottom();
  }

  // Méthode pour sauvegarder les messages dans localStorage
  private saveMessages() {
    localStorage.setItem('messages', JSON.stringify(this.messages));
  }

  // Méthode pour récupérer les messages depuis localStorage
  private loadMessages() {
    const storedMessages = localStorage.getItem('messages');
    if (storedMessages) {
      this.messages = JSON.parse(storedMessages);
      this.friend.messages = [...this.messages];  // Copier les messages dans friend.messages
    }
  }

  // Scroll automatique vers le bas
  private scrollToBottom() {
    const container = this.messagesContainer.nativeElement;
    container.scrollTop = container.scrollHeight;
  }

  // Lors du chargement du composant, récupérer les messages
  ngOnInit() {
    this.loadMessages();
  }
  constructor(private router: Router) { }
  goToSocial() {
    this.router.navigate(['/Social']);
  }
}
