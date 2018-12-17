import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';

interface Question {
  qt_id: number
  qt_text: string
  qt_status: number
  qt_type: number
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/x-www-form-urlencoded',
  })
}

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  insert(qt_text, qt_status, qt_type) {
    let data = { 'qt_text':qt_text, 'qt_status':qt_status, 'qt_type':qt_type }
    this.http.post('http://10.80.6.160:1045/que', JSON.stringify(data))
  }

  update(qt_id, qt_text, qt_status, qt_type) {

    let data = { 'qt_id':qt_id,'qt_text':qt_text, 'qt_status':qt_status, 'qt_type':qt_type }
    console.log(data)
    this.http.put('http://10.80.6.160:1045/que', JSON.stringify(data)).subscribe()
  }

  delete(qt_id) {
    console.log('Deleting : qt_id = '+qt_id)
    this.http.delete('http://10.80.6.160:1045/que/'+qt_id).subscribe((res: any) => {
    }, error => console.log(error))
  }

  get_all() {
    return this.http.get('http://10.80.6.160:1045/que')
  }

}
