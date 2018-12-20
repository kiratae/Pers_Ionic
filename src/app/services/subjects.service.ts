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

  delete(sub_id) {
    console.log('Deleting : sub_id = '+sub_id)
    this.http.delete('http://10.80.6.160:1045/sub/'+sub_id).subscribe((res: any) => {
    }, error => console.log(error))
  }

  insert(sub_code_th, sub_code_en, sub_name_th, sub_name_en, sub_objective, sub_status) {
    console.log(sub_code_th)
    console.log(sub_code_en)
    console.log(sub_name_th)
    let data = { 'sub_code_th':sub_code_th, 'sub_code_en':sub_code_en, 'sub_name_th':sub_name_th, 'sub_name_en':sub_name_en, 'sub_objective':sub_objective, 'sub_status':sub_status}
    this.http.post('http://10.80.6.160:1045/sub', JSON.stringify(data), httpOptions).subscribe()
  }
  update(sub_id,sub_code_th, sub_code_en, sub_name_th, sub_name_en, sub_objective, sub_status) {

    let data = { 'sub_id':sub_id,'sub_code_th':sub_code_th, 'sub_code_en':sub_code_en, 'sub_name_th':sub_name_th, 'sub_name_en':sub_name_en, 'sub_objective':sub_objective, 'sub_status':sub_status}
    console.log(data)
    return this.http.put('http://10.80.6.160:1045/sub', JSON.stringify(data), httpOptions)
  }
  get_by_key(sub_id) {
    console.log('Deleting : sub_id = '+sub_id)
    return this.http.get('http://10.80.6.160:1045/sub/'+sub_id)
  }
}
