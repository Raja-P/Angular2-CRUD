import { Injectable } from '@angular/core';

@Injectable()
export class FormService {
    formdata: Array<any>=[];
    setFormData(data){
        this.formdata.push(data); 
    }
    getFormData(){
        return this.formdata;
    }
    deleteFormData(dataId)
    {
        for(let i=0;i<this.formdata.length;i++)
        {
            if(this.formdata[i].empid==dataId)
            {
                this.formdata.splice(i,1);
            }
        }
    }
    updateFormData(empdata)
    {
       for(let i =0 ;i < this.formdata.length;i++ ) 
       {
           if(this.formdata[i].empid == empdata.empid) 
           {
               this.formdata[i] = empdata;
           }
       }
    }
}
