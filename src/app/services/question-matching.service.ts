import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class QuestionMatchingService {

  constructor(private http: HttpClient) { }

  insert(qm_scht_id, qm_obj_id, qm_qt_id) {
    let data = { 'qm_scht_id':qm_scht_id, 'qm_obj_id':qm_obj_id, 'qm_qt_id':qm_qt_id }
    return this.http.post('http://10.80.6.160:1045/qm', JSON.stringify(data), httpOptions)
  }

}
