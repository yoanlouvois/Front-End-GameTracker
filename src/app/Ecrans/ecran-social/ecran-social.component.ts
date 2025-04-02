import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ecran-social',
  imports: [CommonModule],
  templateUrl: './ecran-social.component.html',
  styleUrls: ['./ecran-social.component.scss']
})
export class EcranSocialComponent {
  friends = [
    {
      name: 'LionelPessi34',
      avatar: 'https://placehold.co/61x61',
      discussion: 'https://placehold.co/55x55',
      supprimer: 'https://placehold.co/55x55',
    },
    {
      name: 'Gautier3',
      avatar: 'https://placehold.co/61x61',
      discussion: 'https://placehold.co/55x55',
      supprimer: 'https://placehold.co/55x55',
    },
    {
      name: 'Momo28',
      avatar: 'https://placehold.co/61x61',
      discussion: 'https://placehold.co/55x55',
      supprimer: 'https://placehold.co/55x55',
    },
    {
      name: 'Bakame1',
      avatar: 'https://placehold.co/61x61',
      discussion: 'https://placehold.co/55x55',
      supprimer: 'https://placehold.co/55x55',
    }
  ];
  constructor(private router: Router) { }
  goAjouterAmi() {
    this.router.navigate(['/AjouterAmi']);
  }
  goDiscussions(friendName: string) {
    this.router.navigate(['/Discussions', friendName]);
  }

}
