import { Component, Input ,Pipe, PipeTransform} from '@angular/core';
import {FormService} from '../../services/form.service';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component ({
  selector : 'view',
  templateUrl : '../app/src/components/view/view.component.html',
  styleUrls : ['../app/src/components/view/view.component.css']
})
export class ViewComponent {	  
   data: any[];
  
   updateform: boolean= true;
   hideupdate: boolean= false;
   skillList : string[] = ["Angular2", "Typescript", "HTML", "JavaScript"];
   updateForm:FormGroup;

   constructor(private formservice: FormService,private fb: FormBuilder){
     this.getdata();
   }

   ngOnInit() {
    this.updateForm= this.fb.group({
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
    })
}
 
   getdata()
   {
     this.data = this.formservice.getFormData();
   }
   delete(data)
   {
     this.formservice.deleteFormData(data.empid);
     this.getdata();
   }
   update(data) {
     //this.updateForm.controls['empid'].setValue(data.empid); //to set individual values
     this.updateForm.setValue(data);
     this.updateform = false;
     this.hideupdate = true;
   }
   updateval(empdata)
   {
     this.formservice.updateFormData(empdata);
     this.getdata();
     this.updateform= true;
     this.hideupdate = false;
    }
}
