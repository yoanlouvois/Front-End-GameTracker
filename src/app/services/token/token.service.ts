import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  // Vérifie s'il s'agit d'un environnement côté navigateur
  private isBrowserEnvironment(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  // Getter pour le token
  get token(): string | null {
    if (this.isBrowserEnvironment()) {
      return localStorage.getItem('token');
    } else {
      console.warn('Tentative de récupération du token dans un environnement non supporté.');
      return null;
    }
  }

  // Setter pour le token
  set token(value: string | null) {
    if (this.isBrowserEnvironment()) {
      if (value) {
        localStorage.setItem('token', value);
      } else {
        this.clearToken();
      }
    } else {
      console.warn('Tentative de sauvegarde du token dans un environnement non supporté.');
    }
  }

  // Vérifie si le token existe et est valide
  isAuthenticated(): boolean {
    return this.isBrowserEnvironment() && !!this.token;
  }

  // Supprime explicitement le token
  clearToken(): void {
    if (this.isBrowserEnvironment()) {
      localStorage.removeItem('token');
    }
  }
}
