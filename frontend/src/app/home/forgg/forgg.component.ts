import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ForgService } from 'src/app/sevise/forg.service';

@Component({
  selector: 'app-forgg',
  templateUrl: './forgg.component.html',
  styleUrls: ['./forgg.component.css']
})
export class ForggComponent implements OnDestroy {
  g: any
  id: any
  constructor(private http: HttpClient, private router: Router, private share: ForgService) {
    this.g = 0

  }
  add(f: any) {

    if (f.value['code'] != "") {
      console.log(f.value)
      console.log(localStorage.getItem("email"))
      this.http.get<any>("http://localhost:8000/a/f/" + localStorage.getItem("email")).subscribe(data => {
        console.log(data)


        this.id = data.id
        console.log(this.id)

        if (f.value["code"] == data.code) {
          this.share.x = true
          this.share.y = false
          this.router.navigate(['/forggg']);


        }
        else {
          this.g = 1
        }


      })
    }
  }

  ngOnDestroy() {
    console.log(this.id)
    this.http.delete("http://localhost:8000/a/w/" + this.id).subscribe(data => {
    })



  }

}
