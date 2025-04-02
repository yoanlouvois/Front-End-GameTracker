import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token/token.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private router: Router, private tokenService: TokenService) { }

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
    console.log('Utilisateur authentifié ?', this.tokenService.isAuthenticated());
    if (this.tokenService.isAuthenticated()) {
      this.router.navigate(['/Profil']);
    } else {
      this.router.navigate(['/Connexion']);
    }
  }

  goToHome() {
    this.router.navigate(['/Home']);
  }

}
