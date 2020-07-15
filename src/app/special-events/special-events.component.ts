import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {

  sevents = <any>[];
  constructor(private _specialeventService:EventService,
                private _router:Router) { }

  ngOnInit() {
    this._specialeventService.getSpecialEvents()
    .subscribe(
      res =>{
        res => console.log(res);
        this.sevents = res
      },
      err =>{
         if(err instanceof HttpErrorResponse){
           if(err.status === 401){
             this._router.navigate(['/login'])
           }
         }
      }
    )
  }
}
