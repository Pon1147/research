import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-table-ui',
  imports: [SharedModule],
  templateUrl: './table-ui.component.html',
  styleUrl: './table-ui.component.scss',
})
export class TableUiComponent {}
