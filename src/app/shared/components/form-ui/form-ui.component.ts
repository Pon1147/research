import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-form-ui',
  imports: [SharedModule],
  templateUrl: './form-ui.component.html',
  styleUrl: './form-ui.component.scss'
})
export class FormUiComponent {
  // Nơi khai báo các biến
header = "Log In";
label = "Rembmer ID";


onIndeterminateChange($event: boolean) {
throw new Error('Method not implemented.');
}
onChange($event: boolean) {
throw new Error('Method not implemented.');
}

}
