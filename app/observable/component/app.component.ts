import {Component, OnInit} from '@angular/core';
import {UsersService} from "../service/users.service";

require('file?name=[name].[ext]!./app.component.tpl.html');
require('file?name=[name].[ext]!./app.component.css');

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.tpl.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit{

  user1Activated:boolean;
  user2Activated:boolean;

  constructor(private usersService:UsersService){}

  ngOnInit(): void {
    this.usersService.subject.subscribe((id:number)=>{
      if(id===1){
        this.user1Activated = true;
      }else if(id===2){
        this.user2Activated = true;
      }
    })
  }
}
