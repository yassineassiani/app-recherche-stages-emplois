import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-appl',
  templateUrl: './appl.component.html',
  styleUrls: ['./appl.component.css']
})
export class ApplComponent {
  pdfData: { name: string, email: string, phone: string } = { name: '', email: '', phone: '' };
  selectedFile: any
  parameter: any
  constructor(private route: ActivatedRoute, private http: HttpClient) {

    this.http.post('http://localhost:8000/f/u?name=yassine&email=karim.hmidi@ensi-uma.tn&phone=12345678&ide=254&id=102&date=2023-07-29&namee=yas&title=k', "hh").subscribe((data) => {
      console.log(data)

    });

  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }
  add() {
    console.log(this.pdfData.email, this.pdfData.phone, this.pdfData.email, this.selectedFile)
    this.route.paramMap.subscribe(params => {
      this.parameter = params.get('id');
      this.http.get<any>('http://localhost:8000/f/s/' + this.parameter).subscribe((d) => {
        console.log(d.name)
      })


    })
  }
}
