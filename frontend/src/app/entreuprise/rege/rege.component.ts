import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-rege',
  templateUrl: './rege.component.html',
  styleUrls: ['./rege.component.css']
})
export class RegeComponent {
  v: any
  z: any
  l: any

  constructor(private http: HttpClient) {
    this.v = 0;
    this.z = 0;
    this.l = 0;

  }

  add(f: any) {
    if (f.value["email"] == "" || f.value["password"] == "" || f.value["name"] == "" || f.value["password2"] == "" || f.value["domain"] == "" || f.value["location"] == "") {
      this.z = 0
      this.l = 0
      this.v = 1

    }
    else if (f.value["password"] != f.value["pass2"]) {
      this.v = 0
      this.l = 0
      this.z = 1

    }
    else {
      f.value["role"] = "e"
      console.log(f.value)
      this.http.post('http://localhost:8000/a/r', f.value).subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          this.z = 0
          this.v = 0
          this.l = 1
        }
      );
    }
  }
}


