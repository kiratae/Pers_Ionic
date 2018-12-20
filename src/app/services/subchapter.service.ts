import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubchapterService {

  constructor(private http: HttpClient) { }

  fecth(cht_id){
    return this.http.get('http://10.80.6.160:1045/scht/'+cht_id)
  }

  delete(scht_id) {
    console.log('Deleting : scht_id = '+scht_id)
    this.http.delete('http://10.80.6.160:1045/scht/'+scht_id).subscribe((res: any) => {
    }, error => console.log(error))
  }
}

}
