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
  delete(obj_id) {
    console.log('Deleting : obj_id = '+obj_id)
    this.http.delete('http://10.80.6.160:1045/obj/'+obj_id).subscribe((res: any) => {
    }, error => console.log(error))
  }
}
