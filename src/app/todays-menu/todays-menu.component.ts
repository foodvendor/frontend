import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../service/student/login.service';


export class Menu {
  constructor(
   public sabji:string, 
   public sweetDish:string, 
   public chatani:string,
   public quantity :number
  ){ 

  }
}


@Component({
  selector: 'app-todays-menu',
  templateUrl: './todays-menu.component.html',
  

})



export class TodaysMenuComponent implements OnInit {

  name=''

  menu1=new Menu('Anda Curry','Gulab Jamun','Shengdana chatani',1);
 


  constructor(private route:ActivatedRoute
    
    ) {
    
   }

  ngOnInit() {
   // console.log( this.route.snapshot.params['name'] )
   this.name=this.route.snapshot.params['name'];
  }


  
  
}
