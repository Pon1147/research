import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InlineNotificationComponent } from './shared/components/inline-notification/inline-notification.component';
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InlineNotificationComponent, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'research';
  // form-ui.component.ts
}
