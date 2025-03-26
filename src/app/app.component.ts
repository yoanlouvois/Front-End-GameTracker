import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HeaderComponent} from './Components/header/header.component';
import {LayoutComponent} from './Components/layout/layout.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,  // Composant standalone
  imports: [RouterModule, HeaderComponent, LayoutComponent],  // Importer le module de routage et le composant HelloPage
})
export class AppComponent {
  title = 'Mon Application';
}
