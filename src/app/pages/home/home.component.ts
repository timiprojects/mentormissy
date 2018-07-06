import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: []
})
export class HomeComponent implements OnInit {

  event:any;

  constructor( private _service: EventsService ) { }

  ngOnInit() {
    this.getEvent()
  }

  getEvent () {
    this._service.getLatestEvent()
      .subscribe((res: any) => {
        this.event = res
      }, (error: any) => {
        console.log(error);
      })
  }

}
