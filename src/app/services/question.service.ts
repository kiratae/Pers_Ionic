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

  insert(qt_text, qt_status, qt_type) {
    let data = { 'qt_text': qt_text, 'qt_status': qt_status, 'qt_type':qt_type }
    return this.http.post('http://10.80.6.160:1045/que', data)
  }

  get_all() {
    return this.http.get('http://10.80.6.160:1045/que').pipe(map((res) => res.json()))
  }

}
