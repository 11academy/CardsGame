import { Component, OnInit } from '@angular/core';
import { StanzaService } from '../stanza.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stanze',
  templateUrl: './stanze.component.html',
  styleUrls: ['./stanze.component.css']
})
export class StanzeComponent implements OnInit {
stanze: any;
  constructor(private httpClient:HttpClient, private stanzaService:StanzaService) {
    
   }

  getStanze() {
    this.httpClient.get('http://localhost/GameCards/jsonapi/node/stanza').subscribe((result) => { 
  
 this.stanze = result['data'];console.log(this.stanze)})


  }

  ngOnInit() {
  }

}
