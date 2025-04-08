import { Component } from '@angular/core';
import { HeaderFluidComponent } from '../../shared/components/header-fluid/header-fluid.component';
import { HeaderItem } from '../../shared/interface/header-fluid.interface';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-home',
  imports: [HeaderFluidComponent, SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  headerItems: HeaderItem[] = [
    { type: 'item', content: 'Catalog', title: 'Catalog' },
    { type: 'item', content: 'Docs', isCurrentPage: true },
    {
      type: 'menu',
      title: 'Manage',
      menuItems: [
        { type: 'item', content: 'Link 1' },
        { type: 'item', content: 'Link 2' },
        { type: 'item', content: 'Link 3' },
      ],
    },
  ];
}
