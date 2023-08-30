import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-jobsc',
  templateUrl: './jobsc.component.html',
  styleUrls: ['./jobsc.component.css']
})
export class JobscComponent {
  k: any
  constructor(private http: HttpClient) {

    this.http.get('http://localhost:8000/f/j').subscribe((data) => {
      console.log(data)
      this.k = data


    });

  }
  selectedOption: string = '';
  radioOptions = ['Mechanical', 'Computing', 'Humaine ressource ', 'Accouting', 'Administration', 'Automobile', 'Finance', 'Marketing'];
  add(f: any) {
    console.log(f.value['radioGroup'])
    this.http.get('http://localhost:8000/f/j/' + f.value['radioGroup']).subscribe((data) => {
      console.log(data)
      this.k = data
      console.log(data)
    });

  }

}
