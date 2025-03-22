import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,  // Composant standalone
  imports: [RouterModule],  // Importer le module de routage et le composant HelloPage
})
export class AppComponent {
  title = 'Mon Application';
}
