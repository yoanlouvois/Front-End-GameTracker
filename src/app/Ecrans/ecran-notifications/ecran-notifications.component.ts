import { Component } from '@angular/core';
import {getUserNotifications} from '../../services/fn/notification-controller/get-user-notifications';

@Component({
  selector: 'app-ecran-notifications',
  imports: [],
  templateUrl: './ecran-notifications.component.html',
  styleUrl: './ecran-notifications.component.scss'
})
export class EcranNotificationsComponent {
  username = 'Grimkujow9';
  protected readonly getUserNotifications = getUserNotifications;
}
