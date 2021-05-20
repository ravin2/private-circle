  // tslint:disable

import { Component, Input, Output, EventEmitter, OnChanges, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TABLEDATA } from '../../Data/table.data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnChanges , OnInit {

  @Input() searchKey: any ;
  @Output() sendDetails = new EventEmitter<any>();

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'details'];
  dataSource = new MatTableDataSource(TABLEDATA);
  selectedRowIndex: string;

  ngOnInit(): void {
    this.selectedRowIndex = TABLEDATA[0].listName;
    this.sendDetails.emit(TABLEDATA[0].details);
  }

  ngOnChanges(): void {
    if (this.searchKey) {
      const filterValue = (this.searchKey.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
      this.selectedRowIndex = '';
      this.sendDetails.emit([]);
    }
  }

  viewDetails(data){
    this.selectedRowIndex = data.listName;
    this.sendDetails.emit(data.details);
  }
}
