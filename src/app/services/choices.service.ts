import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

interface Choice {
  cho_id: number
  cho_text: string
  cho_answer: number
  cho_status: number
  cho_P: number
  cho_r: number
  cho_qt_id: number
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ChoicesService {

  constructor(private http: HttpClient) { }

  insert(cho_text, cho_answer, cho_P, cho_r, cho_qt_id) {
    let data = { 'cho_text':cho_text, 'cho_answer':cho_answer, 'cho_P':cho_P, 'cho_r':cho_r, 'cho_qt_id':cho_qt_id }
    return this.http.post('http://10.80.6.160:1045/cho', JSON.stringify(data), httpOptions)
  }

}
