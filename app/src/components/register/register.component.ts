import { Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {GlobalService} from '../../services/global.service';
import {FormService} from '../../services/form.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {employee} from '../../interfaces/employee.interface';

@Component ({
  selector : 'register',
  templateUrl : '../app/src/components/register/register.component.html',
  styleUrls : ['../app/src/components/register/register.component.css'] 
})
export class RegisterComponent implements OnInit{
  router: Router;
	public emp: employee;
  skillList : string[] = ["Angular2", "Typescript", "HTML", "JavaScript"];
  
  skillset=[
    {name:"Angular2",selected:false},
    {name:"Typescript",selected:false},
    {name:"HTML",selected:false},
    {name:"JavaScript",selected:false},
  ]
	constructor(_router: Router, private formservice: FormService, private fb: FormBuilder){  
	   this.router = _router;
   }
   registerForm: FormGroup;
   field:boolean;
   ngOnInit() {
    this.registerForm= this.fb.group({
    empid:['', Validators.compose([Validators.required, Validators.pattern('[0-9]{6}')])],
    empname:['',Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z\ ]+$')])],
    phone:['', Validators.compose([Validators.required, Validators.pattern('[0-9]{10}')])],
    email :['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
    designation:['', Validators.required],
    location:['', Validators.required],
    address:['', Validators.required],
    experience:['', Validators.compose([Validators.required, Validators.pattern('[0-9]{1}')])],
    skill: this.fb.group({
       Angular2:'',
       Typescript:'',
       HTML: '',
       JavaScript: '' 
    })
    // console.log(this.registerForm.controls.empid);
    })
}

 register(reg: employee) {
    this.formservice.setFormData(reg);
    this.router.navigate(['view']); 
  }
}