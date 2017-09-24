import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx'
import {Observer} from "rxjs/Observer";
import {Subscription} from "rxjs/Subscription";

require('file?name=[name].[ext]!./home.component.tpl.html');
require('file?name=[name].[ext]!./home.component.css');

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.tpl.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  numberSubscription:Subscription;
  customSubscription:Subscription;

  constructor() { }

  ngOnInit() {
    // const numbers = Observable.interval(1000);
    const numbers = Observable.interval(1000).map((num:number)=>{
      return num*2;
    });
    this.numberSubscription = numbers.subscribe((number:number)=>{
      console.log(number);
    })

    const custom = Observable.create((observer:Observer<string>)=>{
      setTimeout(()=>{
        observer.next('first package')
      },2000)
      setTimeout(()=>{
        observer.next('second package')
      },4000)
      setTimeout(()=>{
        observer.error('this doesnt work')
      },5000)
      /*setTimeout(()=>{
        observer.complete()
      },5000)*/
    })

    this.customSubscription = custom.subscribe(
        (value:string)=>{
          console.log(value);
        },
        (value:string)=>{
          console.log(value);
        },
        ()=>{
          console.log("completed");
        }
    )

  }


  ngOnDestroy(): void {
    this.numberSubscription.unsubscribe();
    this.customSubscription.unsubscribe();
  }
}
