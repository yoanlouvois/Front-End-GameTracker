import { Component } from '@angular/core';
import {MatButton} from '@angular/material/button';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ecran-profil',
  imports: [

  ],
  templateUrl: './ecran-profil.component.html',
  styleUrl: './ecran-profil.component.scss'
})
export class EcranProfilComponent {
  friendsCount: number = 22;
  hoursCount: number = 24;
  rank: number = 1;
  constructor(private router: Router) { }
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
}
