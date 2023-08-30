import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-applay',
  templateUrl: './applay.component.html',
  styleUrls: ['./applay.component.css']
})
export class ApplayComponent {
  pdfData: { name: string, email: string, phone: string } = { name: '', email: '', phone: '' };
  selectedFile: File | null = null;
  fileContent: any
  d: any
  gg: any
  myDate: Date = new Date();
  parameter: any;
  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {
    this.gg = 0

  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }
  add() {
    this.route.paramMap.subscribe(params => {
      this.parameter = params.get('id');
      interface i {
        fileData: String
      }

      if (this.selectedFile) {

        console.log(this.pdfData.name)
        const formData = new FormData();
        formData.append('file', this.selectedFile, this.selectedFile.name);
        const dateString = this.myDate.toISOString().slice(0, 10)
        console.log(this.selectedFile)



        formData.append('file', this.selectedFile, this.selectedFile.name);
        this.http.get<any>('http://localhost:8000/f/s/' + this.parameter).subscribe((d) => {
          console.log(d.name)
          console.log(d.title)

          this.http.post<any>('http://localhost:8000/f/u?name=' + this.pdfData.name + '&email=' + this.pdfData.email + '&phone=' + this.pdfData.phone + '&ide=' + this.parameter + '&id=' + localStorage.getItem("id") + '&date=' + dateString + '&namee=' + d.name + "&title=" + d.title, formData).subscribe((data) => {
            console.log(data)
          }
          );

        })

        this.router.navigate(['/hc']);
      }

    })


  }
}






