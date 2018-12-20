import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';

interface Chapter {
  cht_id: number
  cht_sequence: number
  cht_code: string
  cht_name: string
  cht_status: number
  cht_sub_id: number
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ChapterService {

  constructor(private http: HttpClient) { }

  fecth(sub_id){
    return this.http.get('http://10.80.6.160:1045/cht/'+sub_id)
  }

  insert(cht_name, cht_status) {
    console.log(cht_name)
    console.log(cht_status)
    let data = { 'cht_name':cht_name, 'cht_status':cht_status }
    this.http.post('http://10.80.6.160:1045/cht', JSON.stringify(data), httpOptions).subscribe()
  }

  delete(cht_id) {
    console.log('Deleting : cht_id = '+cht_id)
    this.http.delete('http://10.80.6.160:1045/cht/'+cht_id).subscribe((res: any) => {
    }, error => console.log(error))
  }
}
