import { Component, OnInit } from '@angular/core';

export interface Bill {
  date: Number;
  morning: String;
  evening: String;
}

const BILL_DATA: Bill[] = [
  { date: 1, morning: '', evening: '' },
  { date: 2, morning: '', evening: '' },
  { date: 3, morning: '', evening: '' },
  { date: 4, morning: '', evening: '' }
];

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})


export class BillComponent implements OnInit {

  displayedColumns: string[] = ['Date', 'Morning', 'Evening'];
  dataSource=BILL_DATA;
  constructor() {
  }


  ngOnInit() {
  }

}
