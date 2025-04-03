import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { radixArrowRight } from '@ng-icons/radix-icons';

@Component({
  selector: 'app-form-ui',
  imports: [SharedModule, NgIcon],
  templateUrl: './form-ui.component.html',
  styleUrl: './form-ui.component.scss',
  viewProviders: [provideIcons({ radixArrowRight })],
})
export class FormUiComponent {
  // Nơi khai báo các biến
  header = 'Log In';
  label = 'Rembmer ID';

  onIndeterminateChange($event: boolean) {
    throw new Error('Method not implemented.');
  }
  onChange($event: boolean) {
    throw new Error('Method not implemented.');
  }
}
