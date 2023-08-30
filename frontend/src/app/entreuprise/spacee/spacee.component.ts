import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-spacee',
  templateUrl: './spacee.component.html',
  styleUrls: ['./spacee.component.css']
})
export class SpaceeComponent {

  k: any
  constructor(private http: HttpClient) {

    this.http.get('http://localhost:8000/f/y/' + localStorage.getItem('nom')).subscribe((data) => {
      console.log(data)
      this.k = data


    });

  }
  logout() {
    localStorage.clear();
  }
}
