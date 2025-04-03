import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
//import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { GameListComponent } from '../game-list/game-list.component';


@Component({
  selector: 'app-new-component',
  imports: [CommonModule, GameListComponent],
  templateUrl: './ecran-accueil.html',
  styleUrl: './ecran-accueil.scss'
})
export class EcranAccueil implements OnInit {

  constructor() {}

  ngOnInit(): void {

  }
}
