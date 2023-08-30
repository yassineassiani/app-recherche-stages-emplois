import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnDestroy {
  f: any
  w: any
  constructor(private http: HttpClient, private router: Router) {
    this.f = 0
    this.w = 0
  }

  add(f: any) {

    if (f.value["email"] == "" || f.value["password"] == "") {
      this.w = 0
      this.f = 1
    }

    else {
      localStorage.setItem("email", f.value["email"])
      interface ApiResponse {
        name: string;
        id: any
        // Autres propriétés si nécessaires
      }
      interface Api {

        token: String;
        toke: String;
        role: string

      }


      // Utilisation de l'interface pour typage de la réponse
      this.http.post<Api>('http://localhost:8000/a/a', f.value).subscribe(
        (data) => {

          console.log(data.role)
          this.http.get<ApiResponse>('http://localhost:8000/a/b/' + f.value['email']).subscribe(
            (da) => {

              localStorage.setItem("nom", da.name)
              localStorage.setItem("id", da.id)

              console.log(f.value["email"])
              console.log(localStorage.getItem("email"))

              console.log(localStorage.getItem("nom"), localStorage.getItem("id"));
            })
          if (data.role == "c") {

            this.router.navigate(['/hc']);

          }
          else {
            this.router.navigate(['/he']);

          }
        },
        (error) => {
          this.f = 0;
          this.w = 1;
        }
      );
    }
  }
  ngOnDestroy() {
    localStorage.setItem("email", "hhhhhhhhhhhhh")
    console.log("hhhhhhhhhhhhhhhhhhhhh")
  }
}

