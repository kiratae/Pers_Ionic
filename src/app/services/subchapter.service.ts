import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';

interface subchapter {
  scht_id: number
  scht_cht_id: number
  scht_sequence: string
  scht_name: string
  scht_status: number
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SubchapterService {

  constructor(private http: HttpClient) { }

  fecth(cht_id){
    return this.http.get('http://10.80.6.160:1045/scht/'+cht_id)
  }

  insert(scht_cht_id, scht_sequence, scht_name, scht_status) {
    console.log(scht_name)
    let data = { 'scht_cht_id':scht_cht_id, 'scht_sequence':scht_sequence, 'scht_name':scht_name, 'scht_status':scht_status}
    return this.http.post('http://10.80.6.160:1045/scht', JSON.stringify(data), httpOptions)
  }

  delete(scht_id) {
    console.log('Deleting : scht_id = '+scht_id)
    this.http.delete('http://10.80.6.160:1045/scht/'+scht_id).subscribe((res: any) => {
    }, error => console.log(error))
  }

  update(scht_id,scht_sequence, scht_name, scht_status, scht_cht_id) {

    let data = { 'scht_id':scht_id,'scht_sequence':scht_sequence, 'scht_name':scht_name, 'scht_status':scht_status, 'scht_cht_id':scht_cht_id}
    console.log(data)
    return this.http.put('http://10.80.6.160:1045/scht', JSON.stringify(data), httpOptions)
  }

  get_by_key(scht_id) {
    console.log('Deleting : scht_id = '+scht_id)
    return this.http.get('http://10.80.6.160:1045/scht/'+scht_id)
  }

  get_by_edit(scht_id) {
    console.log('Deleting : scht_id = '+scht_id)
    return this.http.get('http://10.80.6.160:1045/scht_by_key/'+scht_id)
  }


}
