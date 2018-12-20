import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';

interface Level {
  sub_id: number
  sub_name_th: string
  sub_name_eng: string
  sub_code_th: string
  sub_code_eng: string
  sub_objective: string
  sub_status: number
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor(private http: HttpClient) { }

  get_all() {
    return this.http.get('http://10.80.6.160:1045/sub')
  }

}
