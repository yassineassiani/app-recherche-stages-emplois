import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pdfData: { name: string, email: string, phone: string } = { name: '', email: '', phone: '' };
  selectedFile: any;
  fileContent: any
  d: any
  gg: any
  myDate: Date = new Date();
  parameter: any;
  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.http.post('http://localhost:8000/f/u?name=yassine&email=karim.hmidi@ensi-uma.tn&phone=12345678&ide=254&id=102&date=2023-07-29&namee=yas&title=k', "hh").subscribe((data) => {
      console.log(data)

    });
    this.gg = 0

  }



}


