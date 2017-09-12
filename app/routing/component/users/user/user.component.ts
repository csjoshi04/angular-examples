import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

require('file?name=[name].[ext]!./user.component.tpl.html');

@Component({
  selector: 'app-user',
  templateUrl: './user.component.tpl.html'
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription:Subscription;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.user={
      id : this.route.snapshot.params["id"],
      name : this.route.snapshot.params["name"]
    }
    this.paramsSubscription = this.route.params.subscribe((updatedParams:Params)=>{
      this.user.id= updatedParams['id'];
      this.user.name= updatedParams['name']
    })
  }


  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}
