import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StanzaService {
  
  constructor(private httpClient: HttpClient) { 
 }
  getStanze() {
    this.httpClient.get('http://localhost/GameCards/jsonapi/node/stanza_delle_carte').subscribe((result)=>{console.log(result)})

  }

}
