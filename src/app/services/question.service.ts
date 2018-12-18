import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

interface Question {
  qt_id: number
  qt_text: string
  qt_status: number
  qt_type: number
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  insert(qt_text, qt_status, qt_type) {
    let data = { 'qt_text':qt_text, 'qt_status':qt_status, 'qt_type':qt_type }
    return this.http.post('http://10.80.6.160:1045/qt', JSON.stringify(data), httpOptions)
  }

  update(qt_id, qt_text, qt_status, qt_type) {
    let data = { 'qt_id':qt_id,'qt_text':qt_text, 'qt_status':qt_status, 'qt_type':qt_type }
    console.log(data)
    this.http.put('http://10.80.6.160:1045/qt', JSON.stringify(data), httpOptions).subscribe()
  }

  delete(qt_id) {
    console.log('Deleting : qt_id = '+qt_id)
    this.http.delete('http://10.80.6.160:1045/qt/'+qt_id).subscribe((res: any) => {
      console.log(res['status'])
    }, error => console.log(error))
  }

  get_all() {
    return this.http.get('http://10.80.6.160:1045/qt')
  }

}
