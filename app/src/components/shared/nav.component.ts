import { Component } from '@angular/core';
import {GlobalService} from '../../services/global.service';
import {Router} from '@angular/router';
@Component({
	selector : 'navig',
	templateUrl : '../app/src/components/shared/nav.component.html',
	styleUrls : ['../app/src/components/shared/nav.component.css']
})
export class NavComponent {
	user: string;
	
	constructor(private service:GlobalService,private router:Router){
		this.user=this.service.username;
		
		// if(this.user==undefined){
		// 	this.router.navigate(['login']);			
		// }
	}
	signout(){
		this.service.username='';
		this.service.userlogged=false;
		this.router.navigate(['login']);
	}
}