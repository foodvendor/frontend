import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { WelcomeDataService } from 'src/app/service/data/welcome-data.service';
@Component({
  selector: 'app-menu.selection',
  templateUrl: './menu.selection.component.html',
  styleUrls: ['./menu.selection.component.css']
})
export class MenuSelectionComponent implements OnInit {

  disableFull: boolean;
  disableHalf1: boolean;
  disableHalf2: boolean;
  menuSelect = new FormGroup({
    tiffin: new FormGroup({
      fullBox: new FormControl(''),
      halfBox1: new FormControl(''),
      halfBox2: new FormControl(''),
    }),

    item1: new FormControl(''),
    item2: new FormControl('')
  });
  constructor(private service: WelcomeDataService) {
    this.disableFull = false;
    this.disableHalf1 = true;
    this.disableHalf2 = true;
  }

  onItemChange(event) {
    // console.log("Radio button value is ",event.target.value);
    switch (event.target.value) {
      case "half1":
        this.disableFull = this.disableHalf2 = true;
        this.disableHalf1 = false;
        break;
      case "half2":
        this.disableFull = this.disableHalf1 = true;
        this.disableHalf2 = false;
        break;
      case "full":
        this.disableHalf1 = this.disableHalf2 = true;
        this.disableFull = false;
        break;
    }
  }

  ngOnInit() {
  }

}
