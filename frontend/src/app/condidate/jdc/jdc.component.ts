import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jdc',
  templateUrl: './jdc.component.html',
  styleUrls: ['./jdc.component.css']
})
export class JdcComponent {
  parameter: any;
  k: any = {}

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.route.paramMap.subscribe(params => {
      this.parameter = params.get('id');
      this.http.get('http://localhost:8000/f/s/' + this.parameter).subscribe((data) => {
        console.log(data)
        this.k = data

      })
    })
  }

}
