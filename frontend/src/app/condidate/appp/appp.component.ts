import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-appp',
  templateUrl: './appp.component.html',
  styleUrls: ['./appp.component.css']
})
export class ApppComponent {

  pdfData: { name: string, email: string, phone: string } = { name: '', email: '', phone: '' };
  constructor(private http: HttpClient) {
    this.http.post<any>('http://localhost:8000/f/u?name=yassine&email=karim.hmidi@ensi-uma.tn&phone=12345678&ide=254&id=102&date=2023-07-29&namee=yas&title=k', "hh").subscribe((data) => {
      console.log(data)
    }
    );
  }
  add() {

  }
}