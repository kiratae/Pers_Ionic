import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: Http) { }

  get_all() {
    return this.http.get('http://10.80.6.160:1045/que').pipe(map((res) => res.json()))
  }

}
