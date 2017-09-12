import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
require('file?name=[name].[ext]!./home.component.tpl.html');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.tpl.html'
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onLoadServers(){
    this.router.navigate(['/servers'])
  }

  onLoadServer(id:number){
    this.router.navigate(['/servers', id, "edit"], {queryParams:{allowEdit: '1'}, fragment : "loading"})
  }

}
