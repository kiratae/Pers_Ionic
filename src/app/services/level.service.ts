import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';

interface Level {
  lv_name_th: string
  lv_name_eng: string
  lv_status: number
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class LevelService {

  
  constructor(private http: HttpClient) { }

  get_all() {
    return this.http.get('http://10.80.6.160:1045/lvl')
  }

  insert(lv_name_th, lv_name_eng, lv_status) {
    let data = { 'lv_name_th':lv_name_th, 'lv_name_eng':lv_name_eng, 'lv_status':lv_status }
    this.http.post('http://10.80.6.160:1045/lvl', JSON.stringify(data))
  }
}
