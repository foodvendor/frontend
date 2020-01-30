import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Menu } from '../model/menu/menu';
import { TodaysMenuService } from '../service/menu/todays-menu.service';




@Component({
  selector: 'app-todays-menu',
  templateUrl: './todays-menu.component.html',
  

})



export class TodaysMenuComponent implements OnInit {

  name = ''
  todaysMenu: any;
  // menu1=new Menu('Anda Curry','Gulab Jamun','Shengdana chatani',1);



  constructor(private route: ActivatedRoute,
    private menusvc:TodaysMenuService) {
    this.todaysMenu=new Menu();
  }

  ngOnInit() {
    // console.log( this.route.snapshot.params['name'] )
    this.name=this.route.snapshot.params['name'];
    // this.todaysMenu=this.menusvc.getTodaysMenu();
  }

}
