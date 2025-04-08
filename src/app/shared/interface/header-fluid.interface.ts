export interface HeaderItem {
  type: 'item' | 'menu'; // Bắt buộc
  content?: string; // Tùy chọn
  title?: string; // Tùy chọn
  isCurrentPage?: boolean; // Tùy chọn
  menuItems?: HeaderItem[]; // Tùy chọn
}
