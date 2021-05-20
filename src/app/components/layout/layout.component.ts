// tslint:disable
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent {
  searchKey: any;
  details: any = [];

  sendSerchKeyToTable(data) {
    this.searchKey = data;
  }
  sendDetails(data) {
    this.details = data;
  }
}
