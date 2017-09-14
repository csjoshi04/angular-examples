import {Component, ElementRef, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

require('file?name=[name].[ext]!./app.component.tpl.html');
require('file?name=[name].[ext]!./app.component.css');

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.tpl.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  suggestUserName() {
    const suggestedName = 'Superuser';
    /*this.signupForm.setValue({
      userData :{
        username : suggestedName,
        email : ""
      },
      secret: "pet",
      questionAnswer : "",
      gender: "male"
    })*/
    this.signupForm.form.patchValue({
      userData :{
        username : suggestedName
      }
    })
  }

  defaultQuestion:string ="pet"
  answer:string ="";
  genders = ['male','female']
  user:{};

  @ViewChild('f') signupForm:NgForm;

  /*onSubmit(form:NgForm){
    console.log(form)
  }*/

  onSubmit(){
    console.log(this.signupForm);
    this.user = this.signupForm.value
    this.signupForm.reset();
  }
}
