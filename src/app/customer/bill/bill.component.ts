import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  day: Number;
  dataTable: any;
  constructor() {
    this.day = 1;
    this.dataTable = [];
  }


  ngOnInit() {
    for (let i = 1; i <= 31; i++)
      this.dataTable[i] = i;
  }

}
