import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data} from "@angular/router";

require('file?name=[name].[ext]!./error-page.component.tpl.html');

@Component({
    selector: 'error-page',
    templateUrl: './error-page.component.tpl.html'
})
export class ErrorPageComponent implements OnInit{
    errorMessage:string;
    constructor(private route:ActivatedRoute){}

    ngOnInit(): void {
        this.route.data.subscribe((data:Data)=>{
            this.errorMessage = data['message'];
        })
    }
}
