import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
//import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-new-component',
  imports: [CommonModule],
  templateUrl: './ecran-accueil.html',
  styleUrl: './ecran-accueil.scss'
})
export class EcranAccueil implements OnInit {
  users: any[] = []; // Stocke la liste des utilisateurs
  isLoading: boolean = true; // Action loading

  constructor( ){}
  ngOnInit(): void {
    //this.loadUsers();
  }

  // Charge les utilisateurs via l'API et les stocke dans le tableau `users`
  /*loadUsers(): void {
    this.userService.getAllUsers().subscribe({
      next: (data) => {
        // Récupère uniquement le contenu des utilisateurs
        this.users = data.content;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des utilisateurs :', error);
        this.isLoading = false;
      }
    });
  }*/
}
