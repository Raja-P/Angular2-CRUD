import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

export interface admin {
    username: string;
    password: string;

}
@Injectable()
export class GlobalService{

admins:admin[];
userlogged=false;
username:string;
private headers = new Headers({'Content-Type': 'application/json'});
//private dataurl='app/empdata';

    constructor(private http:Http){}

    getAdmin()
    {
            this.http.get('../app/src/assets/data/admin.json')
                .subscribe((res: Response) => {
                    this.admins = res.json();
            }); 
    }
    validateAdmin(user,password)
    {
        let validflag=false;
        for(let i=0;i<this.admins.length;i++)
        {
            if(user===this.admins[i].username&&password===this.admins[i].password)
            {
                validflag=true;
                this.userlogged=true;
                this.username=user;
            }
        }
        if(validflag===true)
        return true;
        else
        return false;   
    }
   /*putToDb(emp):Promise<>{
        this.http
        .post(this.dataurl,JSON.stringify(emp),{headers:this.headers})
        .toPromise()
        .then(res => res.json().data);
    }*/
}