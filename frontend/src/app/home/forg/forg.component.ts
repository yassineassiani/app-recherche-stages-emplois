import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ForgService } from 'src/app/sevise/forg.service';

@Component({
  selector: 'app-forg',
  templateUrl: './forg.component.html',
  styleUrls: ['./forg.component.css']
})
export class ForgComponent {
  g: any
  constructor(private http: HttpClient, private router: Router, private share: ForgService) {
    console.log(localStorage.getItem("email"))

    this.g = 0
  }
  add(f: any) {
    console.log(f.value)
    localStorage.setItem("email", f.value["email"])
    this.http.post('http://localhost:8000/a/f', f.value).subscribe(data => {
      try {
        this.share.y = true

        this.router.navigate(['/forgg']);

      } catch (error) {


      }


    }



    );



  }

}
