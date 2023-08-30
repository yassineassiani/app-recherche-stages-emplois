import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-postc',
  templateUrl: './postc.component.html',
  styleUrls: ['./postc.component.css']
})
export class PostcComponent {
  d: any
  gg: any
  constructor(private http: HttpClient, private router: Router) {
    this.gg = 0
    console.log(localStorage.getItem('email'))
  }
  add(f: any) {
    console.log(localStorage.getItem("id"))
    f.value["name"] = localStorage.getItem("nom")
    f.value["idc"] = localStorage.getItem("id")
    f.value['date'] = new Date()
    f.value['email'] = localStorage.getItem('email')

    this.d = f.value
    if (this.d['categ'] == "" || this.d['name'] == "" || this.d["title"] == "" || this.d['des'] == "" || this.d['tel'] == "" || this.d['adress'] == "") {
      this.gg = 1;
    }
    else {

      this.http.post('http://localhost:8000/f/pc', f.value).subscribe(
        (data) => {
          console.log(data);
        },

      );
      this.router.navigate(['/servcon']);
    }




  }

}
