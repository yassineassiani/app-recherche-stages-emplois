import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-servisec',
  templateUrl: './servisec.component.html',
  styleUrls: ['./servisec.component.css']
})
export class ServisecComponent {

  k: any
  constructor(private http: HttpClient) {

    this.http.get('http://localhost:8000/f/je').subscribe((data) => {
      console.log(data)
      this.k = data


    });

  }
  selectedOption: string = '';
  radioOptions = ['Mechanical', 'Computing', 'Humaine ressource ', 'Accouting', 'Administration', 'Automobile', 'Finance', 'Marketing'];
  add(f: any) {
    console.log(f.value['radioGroup'])
    this.http.get('http://localhost:8000/f/je/' + f.value['radioGroup']).subscribe((data) => {
      console.log(data)
      this.k = data
      console.log(data)
    });

  }



}
