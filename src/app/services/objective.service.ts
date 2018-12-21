import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';

interface Objective {
  obj_id: number
  obj_name: string
  obj_status: number
  obj_scht_id: number
  obj_lv_id: number
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ObjectiveService {

  constructor(private http: HttpClient) { }

  fecth(scht_id){
    return this.http.get('http://10.80.6.160:1045/obj/'+scht_id)
  }
  delete(obj_id) {
    console.log('Deleting : obj_id = '+obj_id)
    this.http.delete('http://10.80.6.160:1045/obj/'+obj_id).subscribe((res: any) => {
    }, error => console.log(error))
  }
  insert(obj_name, obj_status, obj_scht_id, obj_lv_id) {

    let data = { 'obj_name':obj_name, 'obj_status':obj_status, 'obj_scht_id':obj_scht_id, 'obj_lv_id':obj_lv_id }
    console.log(data)
    return this.http.post('http://10.80.6.160:1045/obj', JSON.stringify(data), httpOptions)
  }
  //mean
  update(obj_id, obj_name, obj_status, obj_scht_id, obj_lv_id) {

    let data = { 'obj_id':obj_id,'obj_name':obj_name, 'obj_status':obj_status, 'obj_scht_id':obj_scht_id, 'obj_lv_id':obj_lv_id}
    console.log(data)
    return this.http.put('http://10.80.6.160:1045/obj', JSON.stringify(data), httpOptions)
  }

  get_by_key(obj_id) {
    console.log('Deleting : obj_id = '+obj_id)
    return this.http.get('http://10.80.6.160:1045/obj/'+obj_id)
  }

  get_by_edit(obj_id) {
    console.log('get_by_edit : obj_id = '+obj_id)
    return this.http.get('http://10.80.6.160:1045/obj_by_key/'+obj_id)
  }
}
