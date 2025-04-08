import { Component, Input, OnInit } from '@angular/core';
import { HeaderItem } from '../../interface/header-fluid.interface';
import { SharedModule } from '../../shared.module';

@Component({
  standalone: true,
  selector: 'app-header-fluid',
  templateUrl: './header-fluid.component.html',
  styleUrls: ['./header-fluid.component.scss'],
  imports: [SharedModule],
})
export class HeaderFluidComponent implements OnInit {
  @Input() headerItems: HeaderItem[] = []; // Đảm bảo khai báo @Input()

  ngOnInit() {
    console.log(this.headerItems); // Kiểm tra xem headerItems có được truyền vào không
  }

  public isMenuItem(item: HeaderItem): boolean {
    return item.type === 'menu';
  }

  public onItemClick(item: HeaderItem): void {
    if (item.isCurrentPage) {
      console.log(`${item.content} is the current page`);
    } else {
      console.log(`Navigating to ${item.content}`);
    }
  }

  public onItemKeydown(event: KeyboardEvent, item: HeaderItem): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault(); // Ngăn hành vi mặc định
      this.onItemClick(item); // Gọi hàm click
    }
  }
}
