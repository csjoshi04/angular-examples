import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs/Observable";

require('file?name=[name].[ext]!./app.component.tpl.html');
require('file?name=[name].[ext]!./app.component.css');

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.tpl.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];
  signupForm:FormGroup;
  forbiddenUserNames:string[] = ["Chris","Anna"];

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username':new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null,[Validators.required, Validators.email],this.forbiddenEmails.bind(this)),
      }),
      'hobbies': new FormArray([]),
      'gender': new FormControl('male')
    });

    this.signupForm.valueChanges.subscribe((value)=>{
      console.log(value);
    })

    this.signupForm.statusChanges.subscribe((status)=>{
      console.log(status);
    })

    this.signupForm.setValue({
      userData :{
        username : "CJ",
        email : "dasd@dasda.com"
      },
      gender: "male",
      hobbies:[]
    })
  }

  onSubmit(){
    console.log(this.signupForm)
    this.signupForm.reset();
  }

  onAddHobby(){
    let control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get("hobbies")).push(control)
  }

  forbiddenNames(formControl:FormControl):{[s: string]:boolean}{
    if(this.forbiddenUserNames.indexOf(formControl.value) > -1){
      return {'nameIsForbidden':true};
    }
    return null;
  }

  forbiddenEmails(formControl:FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if(formControl.value == "test@test.com"){
          resolve({'emailIsForbidden':true})
        }else{
          resolve(null);
        }
      },1500)
    })
    return promise;
  }
}
