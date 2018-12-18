import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {

  constructor(private http: HttpClient) { }

  fecth(sub_id){
    return this.http.get('http://10.80.6.160:1045/cht/'+sub_id)
  }

}
