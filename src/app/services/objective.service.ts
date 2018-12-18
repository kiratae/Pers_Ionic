import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ObjectiveService {

  constructor(private http: HttpClient) { }

  fecth(scht_id){
    return this.http.get('http://10.80.6.160:1045/obj/'+scht_id)
  }

}
