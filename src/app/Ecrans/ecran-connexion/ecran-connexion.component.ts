import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIcon} from '@angular/material/icon';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {NgFor, NgIf} from '@angular/common';
import {CommonModule} from '@angular/common';
import {MatButton, MatIconButton} from '@angular/material/button';
import {Router} from '@angular/router';
import {AuthenticationRequest} from '../../services/models/authentication-request';
import {AuthenticationControllerService} from '../../services/services/authentication-controller.service';
import {TokenService} from '../../services/token/token.service';

@Component({
  selector: 'app-ecran-connexion',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatIcon,
    MatLabel,
    MatFormField,
    MatIconButton,
    MatInput,
    MatButton,
    NgIf,
    CommonModule
  ],
  templateUrl: './ecran-connexion.component.html',
  styleUrl: './ecran-connexion.component.scss'
})
export class EcranConnexionComponent {

  authRequest: AuthenticationRequest = {login: '', password: ''};
  errorMsg: Array<String> = [];

  constructor(
    private router: Router,
    private authService: AuthenticationControllerService,
    private tokenService: TokenService
    ) { }

  goToInscription() {
    this.router.navigate(['/Inscription']);
  }

  goToAccueil(){
    this.router.navigate(['/Home'])
  }

  login() {
    this.errorMsg = [];
    this.authService.authenticate({
      body:this.authRequest
    }).subscribe({
      next:(res) => {
        this.tokenService.token = res.accessToken as string;
        this.router.navigate(['Home']);
      },
      error: (err) => {
        console.log(err);
        if(err.error.validationErrors) {
          this.errorMsg = err.error.validationErrors
        }else{
          this.errorMsg.push(err.error.errorMsg);
        }
      }
    });
  }
}
