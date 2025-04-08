// inline-notification.component.ts
import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { CustomNotification } from '../../interface/types/notification.interface';
import { NotificationService } from '../../services/inline-notification.services';

@Component({
  selector: 'app-inline-notification',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './inline-notification.component.html',
  styleUrls: ['./inline-notification.component.scss'],
})
export class InlineNotificationComponent implements OnInit {
  notifications: CustomNotification[] = [];

  constructor(private readonly notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationService.notification$.subscribe(notifs => {
      this.notifications = notifs;
      console.log('notifications', this.notifications);
    });
  }

  onClose(id: number): void {
    this.notificationService.removeNotification(id);
  }
}
