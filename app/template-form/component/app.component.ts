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
  }

  defaultQuestion:string ="pet"
  answer:string ="";

  @ViewChild('f') signupForm:NgForm;

  /*onSubmit(form:NgForm){
    console.log(form)
  }*/

  onSubmit(){
    console.log(this.signupForm);
  }
}
