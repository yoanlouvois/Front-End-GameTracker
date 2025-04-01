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
      actions: ['https://placehold.co/55x55', 'https://placehold.co/51x55', 'https://placehold.co/55x55']
    },
    {
      name: 'Gautier3',
      avatar: 'https://placehold.co/61x61',
      actions: ['https://placehold.co/55x55', 'https://placehold.co/51x55', 'https://placehold.co/55x55']
    },
    {
      name: 'Momo28',
      avatar: 'https://placehold.co/61x61',
      actions: ['https://placehold.co/55x55', 'https://placehold.co/51x55', 'https://placehold.co/55x55']
    },
    {
      name: 'Bakame1',
      avatar: 'https://placehold.co/61x61',
      actions: ['https://placehold.co/55x55', 'https://placehold.co/51x55', 'https://placehold.co/55x55']
    }
  ];
  constructor(private router: Router) { }
  goAjouterAmi() {
    this.router.navigate(['/AjouterAmi']);
  }
  goDiscussions() {
    this.router.navigate(['/Discussions']);
  }
}
