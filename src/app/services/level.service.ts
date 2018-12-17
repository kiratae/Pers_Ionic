import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LevelService {

  
  constructor(private http: Http) { }

  get_all() {
    return this.http.get('http://10.80.6.160:1045/lvl').pipe(map((res) => res.json()))
  }
}
