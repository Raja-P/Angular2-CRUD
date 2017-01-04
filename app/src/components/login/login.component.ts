import  { Component } from '@angular/core';

import {Router} from '@angular/router';
import {GlobalService} from '../../services/global.service';

export interface User {
    username: string;
    password: string;
}

@Component ({
  selector : 'login',
  templateUrl : '../app/src/components/login/login.component.html',
  styleUrls : ['../app/src/components/login/login.component.css']

})
export class LoginComponent {
	user: User;
  uservalid:boolean;
  submitted:boolean=false;
	constructor(private router: Router, private globalservice:GlobalService){} 
   
   ngOnInit() {
    this.user = {
      username: '',
      password: ''
    }
  this.globalservice.getAdmin();
  if(this.globalservice.userlogged==true)
  {
    this.router.navigate(['register']);
  }
  }

	// login(data) : void {
	// 	this.router.navigate(['register']); 	
	// }
	login(model: User, isValid: boolean) {
    // call API to save customer
    this.submitted=true;
    this.uservalid=this.globalservice.validateAdmin(model.username,model.password);
    if(isValid===true && this.uservalid===true){
    //console.log(model, isValid);
    //console.log(model.username,model.password);
    this.router.navigate(['register']); 
	}
  }
}