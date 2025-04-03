import { Injectable } from '@angular/core';
import { GameControllerService } from './services/game-controller.service';
import { firstValueFrom } from 'rxjs';
import { Pageable } from './models/pageable';

@Injectable({
  providedIn: 'root'
})
export class DbInitializerService {
  constructor(private gameService: GameControllerService) {}

  async initializeGamesIfEmpty(): Promise<void> {
    try {
      // Créez l'objet pageable selon la structure attendue
      const pageable: Pageable = {
        page: 0,
        size: 10,
        sort: []
      };

      // Appelez getAllGames avec le bon format de paramètres
      const gamesResponse = await firstValueFrom(
        this.gameService.getAllGames({ pageable: pageable })
      );

      // Vérifiez si la page est vide
      if (!gamesResponse || !gamesResponse.content || gamesResponse.content.length === 0) {
        console.log('Base de données vide, initialisation avec les jeux par défaut...');
        await this.createDefaultGames();
      } else {
        console.log('Des jeux existent déjà dans la base de données.');
      }
    } catch (error) {
      console.error('Erreur lors de l\'initialisation des jeux:', error);
    }
  }

  private async createDefaultGames(): Promise<void> {
    const defaultGames = this.getDefaultGames();

    for (const game of defaultGames) {
      try {
        await firstValueFrom(this.gameService.createGame({ body: game }));
        console.log(`Jeu créé avec succès: ${game.name}`);
      } catch (error) {
        console.error(`Erreur lors de la création du jeu ${game.name}:`, error);
      }
    }
  }

  private getDefaultGames(): any[] {
    return [
      {
        "name": "Angry Bird",
        "imageUrl": "https://res.cloudinary.com/dhaektb1h/image/upload/v1743623109/AngryBird_thx9yl.jpg",
        "url": "https://html5.gamedistribution.com/d628d0c891494139b9f04f556caf23b0/?gd_sdk_referrer_url%3Dhttp%3A%2F%2Fnimrod.gcm-corp.com%2Fgames_front_iframe%2F%26locale%3Dfr-fr",
        "description": "Les oiseaux sont en colère ! Lancez-les pour détruire les structures et les ennemis. Un défi pour les joueurs de tous les âges !",
        "category": "ACTION",
        "difficultyLevel": "MEDIUM"
      },
      {
        "name": "Solitaire",
        "imageUrl": "https://res.cloudinary.com/dhaektb1h/image/upload/v1743623108/Solitaire_zcgofg.jpg",
        "url": "https://games.cdn.famobi.com/html5games/s/solitaire-classic/v420/?fg_domain=play.famobi.com&fg_aid=A-JEUX&fg_uid=bf3054b9-540f-474d-9288-7e262df73e4a&fg_pid=8cc991b1-8459-47ca-915f-c8dfd1310022&fg_beat=895&original_ref=http%3A%2F%2Fnimrod.gcm-corp.com%2F",
        "description": "Le solitaire n'est pas devenu le jeu de cartes le plus populaire au monde sans raison. Prêt à faire quelques parties ?",
        "category": "CARD",
        "difficultyLevel": "EASY"
      },
      {
        "name": "Bubble Shooter",
        "imageUrl": "https://res.cloudinary.com/dhaektb1h/image/upload/v1743623109/bubble_shooter_sg1ztp.jpg",
        "url": "https://html5.gamedistribution.com/27673bc45d2e4b27b7cd24e422f7c257/?gd_sdk_referrer_url%3Dhttp%3A%2F%2Fnimrod.gcm-corp.com%2Fgames_front_iframe%2F%26locale%3Dfr-fr",
        "description": "Bienvenue dans l’univers des bulles qui n’attendent que tes tirs pour exploser. Assemble les bulles de même couleur pour former un grand « flop ». Joue avec adresse pour venir à bout de la partie !",
        "category": "ARCADE",
        "difficultyLevel": "MEDIUM"
      },
      {
        "name": "Geometry Vibes",
        "imageUrl": "https://res.cloudinary.com/dhaektb1h/image/upload/v1743646842/ff3b75b3-574f-4611-af80-7b373092952a.png",
        "url": "https://html5.gamedistribution.com/b94a8549d5b5405eb640d0b242638055/?timestamp=-62135596800&amp;countryCode=fr&amp;siteid=88&amp;channelid=1&amp;siteLocale=fr&amp;locale=fr&amp;gd_sdk_referrer_url=https%3A%2F%2Fwww.jeux.fr%2Fjeu%2Fgeometry-vibes-x-ball",
        "description": "Défie-toi dans un monde de géométries et de rythmes ! Conduis ton personnage à travers des niveaux de plus en plus difficiles en évitant les obstacles.",
        "category": "ARCADE",
        "difficultyLevel": "HARD"
      },
      {
        "name": "Flappy Bird",
        "imageUrl": "https://res.cloudinary.com/dhaektb1h/image/upload/v1743648135/191750b7-958f-449e-a99e-fee4b9b8aa12.png",
        "url": "https://html5.gamedistribution.com/7ac9bb63716c46a9a6333fa93f54391f/?timestamp=-62135596800&amp;countryCode=fr&amp;siteid=88&amp;channelid=1&amp;siteLocale=fr&amp;locale=fr&amp;gd_sdk_referrer_url=https%3A%2F%2Fwww.jeux.fr%2Fjeu%2Fflappy-bird",
        "description": "Aide l'oiseau à voler à travers les tuyaux sans les toucher ! Appuie sur l'écran pour faire monter l'oiseau et évite les obstacles pour survivre le plus longtemps possible.",
        "category": "ARCADE",
        "difficultyLevel": "HARD"
      },
      {
        "name": "Moto X3M",
        "imageUrl": "https://res.cloudinary.com/dhaektb1h/image/upload/v1743649259/c9d93b2a-2a87-4085-92d0-18ce8304c2f2.png",
        "url": "https://html5.gamedistribution.com/5b0abd4c0faa4f5eb190a9a16d5a1b4c/",
        "description": "Démarrez votre moteur et préparez-vous à des courses de moto époustouflantes ! Sautez, faites des acrobaties et dépassez vos adversaires pour atteindre la ligne d'arrivée en premier !",
        "category": "ACTION",
        "difficultyLevel": "MEDIUM"
      },
      {
        "name": "Merge Fruit",
        "imageUrl": "https://res.cloudinary.com/dhaektb1h/image/upload/v1743650156/d3d9b4a5-bb33-4639-9fe0-c7ca45e2c4a9.png",
        "url": "https://html5.gamedistribution.com/2dee9d404697435aa76111eb4015e1d5/",
        "description": "Fusionne des fruits pour créer des combinaisons délicieuses ! Échange les fruits pour créer des séries et atteindre les objectifs pour passer au niveau suivant !",
        "category": "STRATEGY",
        "difficultyLevel": "EASY"
      },
      {
        "name": "Sniper Reloaded",
        "imageUrl": "https://res.cloudinary.com/dhaektb1h/image/upload/v1743650859/a8426697-e19d-4e57-9aa0-aedd0640ea53.png",
        "url": "https://html5.gamedistribution.com/da901db358b44d62ba8f35c9ff031a19/?",
        "description": "Devenez un tireur d'élite et éliminez les cibles ennemies avec précision ! Utilisez vos compétences de sniper pour atteindre les objectifs et passer au niveau suivant.",
        "category": "ACTION",
        "difficultyLevel": "MEDIUM"
      },
      {
        "name": "Skydom",
        "imageUrl": "https://res.cloudinary.com/dhaektb1h/image/upload/v1743652087/5a22c785-867f-4347-b392-0fc857b9aa86.png",
        "url": "https://html5.gamedistribution.com/ae10263247c44278b33c845ff1c2df80/?",
        "description": "Échange les pièces pour créer des combinaisons explosables ! Alignez trois ou plus pièces de la même couleur pour les faire disparaître et atteindre les objectifs.",
        "category": "ARCADE",
        "difficultyLevel": "EASY"
      },
      {
        "name": "Hotel Tycoon",
        "imageUrl": "https://res.cloudinary.com/dhaektb1h/image/upload/v1743652627/76e23c0c-a8df-40c2-90cd-d68f652d8130.png",
        "url": "https://html5.gamedistribution.com/c35eb9b0918b42b1b01d6d256e02a332/?",
        "description": "Gérez votre propre hôtel de rêve ! Recrutez des employés, améliorez les chambres et les services pour attirer les clients et augmenter vos profits.",
        "category": "ADVENTURE",
        "difficultyLevel": "MEDIUM"
      },
      {
        "name": "Football Legends",
        "imageUrl": "https://res.cloudinary.com/dhaektb1h/image/upload/v1743653584/3b18d3d7-552e-44cd-b480-c9d35851e429.png",
        "url": "https://html5.gamedistribution.com/ecd138ae69cf4e92b5f5cdd328b6b62e/?timestamp=-62135596800&amp;countryCode=fr&amp;siteid=88&amp;channelid=1&amp;siteLocale=fr&amp;locale=fr&amp;gd_sdk_referrer_url=https%3A%2F%2Fwww.jeux.fr%2Fjeu%2Ffootball-legends-2021",
        "description": "Jouez au football avec les plus grandes légendes du sport ! Dans ce jeu de football, affrontez vos adversaires et utilisez vos compétences pour marquer des buts et gagner des matchs.",
        "category": "ACTION",
        "difficultyLevel": "MEDIUM"
      },
      {
        "name": "Chess Grandmaster",
        "imageUrl": "https://res.cloudinary.com/dhaektb1h/image/upload/v1743654536/22326cb2-1ac9-4d30-90df-c3ab4af25c89.png",
        "url": "https://html5.gamedistribution.com/1b52d7c4cad04672891412279ebbbe5d/?",
        "description": "Mettez vos compétences d'échecs à l'épreuve contre les meilleurs joueurs virtuels ! Dans ce jeu d'échecs classique, utilisez vos connaissances des ouvertures, des tactiques et des stratégies pour battre vos adversaires.",
        "category": "BOARD",
        "difficultyLevel": "MEDIUM"
      }
    ];
  }
}
