import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-new-component',
  imports: [
    RouterOutlet
  ],
  templateUrl: './ecran-accueil.html',
  styleUrl: './ecran-accueil.scss'
})
export class EcranAccueil {

}
