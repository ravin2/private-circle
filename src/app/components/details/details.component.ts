import { Component, Input, OnChanges } from '@angular/core';
import { Details } from '../../models/details-data';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnChanges {
  @Input() details: Details[];

  companyList: Details[];


  ngOnChanges(): void {
    if (this.details) {
      this.companyList = this.details;
    }
  }
}
