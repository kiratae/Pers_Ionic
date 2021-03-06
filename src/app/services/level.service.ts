import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';

interface Level {
  lv_id: number
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
    console.log(lv_name_th)
    console.log(lv_name_eng)
    console.log(lv_status)
    let data = { 'lv_name_th':lv_name_th, 'lv_name_eng':lv_name_eng, 'lv_status':lv_status }
    this.http.post('http://10.80.6.160:1045/lvl', JSON.stringify(data), httpOptions).subscribe()
  }
  delete(lv_id) {
    console.log('Deleting : lv_id = '+lv_id)
    this.http.delete('http://10.80.6.160:1045/lvl/'+lv_id).subscribe((res: any) => {
    }, error => console.log(error))
  }
  update(lv_id, lv_name_th, lv_name_eng , lv_status) {

    let data = { 'lv_id':lv_id,'lv_name_th':lv_name_th, 'lv_name_eng':lv_name_eng  , 'lv_status': lv_status}
    console.log(data)
    return this.http.put('http://10.80.6.160:1045/lvl', JSON.stringify(data), httpOptions)
  }
  get_by_key(lv_id) {
    return this.http.get('http://10.80.6.160:1045/lvl/'+lv_id)
  }
}
