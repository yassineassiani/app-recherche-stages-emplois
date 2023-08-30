import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-poste',
  templateUrl: './poste.component.html',
  styleUrls: ['./poste.component.css']
})
export class PosteComponent {
  d: any
  gg: any
  constructor(private http: HttpClient, private router: Router) {
    this.gg = 0
  }
  add(f: any) {
    f.value['date'] = new Date()
    f.value["name"] = localStorage.getItem("nom")
    this.d = f.value
    if (this.d['categ'] == "" || this.d['name'] == "" || this.d["title"] == "" || this.d['des'] == "" || this.d['exp'] == "" || this.d['location'] == "") {
      this.gg = 1;
    }
    else {
      this.http.post('http://localhost:8000/f/pe', f.value).subscribe(
        (data) => {
          console.log(data);
        },

      );
      this.router.navigate(['/spacee']);
    }



  }

}
