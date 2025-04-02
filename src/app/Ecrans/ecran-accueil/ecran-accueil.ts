import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
//import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { TokenService } from '../../services/token/token.service';


@Component({
  selector: 'app-new-component',
  imports: [CommonModule],
  templateUrl: './ecran-accueil.html',
  styleUrl: './ecran-accueil.scss'
})
export class EcranAccueil implements OnInit {
  token: string | null = null;

  constructor(private tokenService: TokenService) {}

  ngOnInit(): void {
    this.token = this.tokenService.token;
  }
}
