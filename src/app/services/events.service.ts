import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }

  getLatestEvent () {
    return this.http.get('https://mmissy.herokuapp.com/api/v1/latest/');
  }

  getAll() {
    return this.http.get('https://mmissy.herokuapp.com/api/v1/event/');
  }
}

export interface Events {
  count: number;
  next: String;
  previous: String;
  results:[
    {
      name:String;
      state: String;
      city: String;
      date: String;
    }
  ]
}
