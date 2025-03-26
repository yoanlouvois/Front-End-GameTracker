import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private router: Router) { }

  goToAbout() {
    this.router.navigate(['/Infos']);
  }

  goToReviews() {
    this.router.navigate(['/reviews']);
  }

  goToDevMode() {
    this.router.navigate(['/dev-mode']);
  }

  goToGameList() {
    this.router.navigate(['/ListeJeux']);
  }

  goToProfile() {
    this.router.navigate(['/Connexion']);
  }

  goToHome() {
    this.router.navigate(['/Home']);
  }
}
