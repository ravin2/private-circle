import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() searchKeyToTable = new EventEmitter<any>();

  constructor() { }

  applyFilter(event: Event): void {
    this.searchKeyToTable.emit(event);
  }
}
