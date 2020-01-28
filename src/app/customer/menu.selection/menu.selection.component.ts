import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { WelcomeDataService } from 'src/app/service/data/welcome-data.service';
@Component({
  selector: 'app-menu.selection',
  templateUrl: './menu.selection.component.html',
  styleUrls: ['./menu.selection.component.css']
})
export class MenuSelectionComponent implements OnInit {

  menuSelect = new FormGroup({
    tiffin: new FormGroup({
      fullBox: new FormControl(''),
      halfBox1: new FormControl(''),
      halfBox2: new FormControl(''),
    }),

    item1: new FormControl(''),
    item2: new FormControl('')
  });
  constructor(private service:WelcomeDataService) { }

  ngOnInit() {
  }

}
