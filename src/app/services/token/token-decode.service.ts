import { Injectable } from '@angular/core';
import { TokenService } from './token.service'; // Importation du service TokenService

@Injectable({
  providedIn: 'root', // Fournisseur global du service
})
export class TokenDecodeService {
  // Injection du TokenService dans le constructeur
  constructor(private tokenService: TokenService) {}

  /**
   * Décode un token JWT pour extraire son contenu (payload).
   * @param token Le token JWT à décoder.
   * @returns Le contenu du payload sous forme d'objet ou null en cas d'erreur.
   */
  private decodeToken(token: string): any {
    if (!token) {
      console.error('Token non fourni ou vide');
      return null;
    }

    try {
      const payload = token.split('.')[1]; // Récupère la 2ème partie (Payload) du token
      const decodedPayload = atob(payload); // Décodage Base64
      return JSON.parse(decodedPayload); // Convertion en objet JSON
    } catch (error) {
      console.error('Erreur lors du décodage du token JWT :', error);
      return null;
    }
  }

  /**
   * Récupère et décode le token stocké dans le TokenService.
   * @returns Le contenu décodé du token en tant qu'objet ou null si aucun token n'est présent.
   */
  getDecodedToken(): any {
    const token = this.tokenService.token; // Récupère le token à partir du TokenService

    if (!token) {
      console.warn('Aucun token trouvé pour le décodage.');
      return null;
    }

    return this.decodeToken(token);
  }

  /**
   * Extrait une revendication spécifique du token JWT.
   * @param claimName Le nom de la revendication à extraire (par exemple, 'userId', 'username').
   * @returns La valeur de la revendication ou null si absente.
   */
  getClaim(claimName: string): any {
    const decodedToken = this.getDecodedToken();

    if (decodedToken && decodedToken.hasOwnProperty(claimName)) {
      return decodedToken[claimName]; // Retourne la valeur de la réclamation
    } else {
      console.warn(`La revendication '${claimName}' n'existe pas dans le token.`);
      return null;
    }
  }

  /**
   * Récupère l'ID utilisateur (userId) stocké dans le token JWT.
   * @returns L'ID utilisateur ou null si non trouvé.
   */
  getUserId(): number | null {
    return this.getClaim('userId'); // Adaptez 'userId' à la manière dont il est défini côté backend
  }

  /**
   * Récupère le nom d'utilisateur (username) stocké dans le token JWT.
   * @returns Le nom d'utilisateur ou null si non trouvé.
   */
  getUsername(): string | null {
    return this.getClaim('sub'); // 'sub' est souvent utilisé dans les JWT pour le nom d'utilisateur
  }
}
