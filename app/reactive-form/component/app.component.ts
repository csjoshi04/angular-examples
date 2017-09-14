import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

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

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'username':new FormControl(null),
      'email': new FormControl(null),
      'gender': new FormControl('male')
    });
  }

  onSubmit(){
    console.log(this.signupForm)
  }
}
