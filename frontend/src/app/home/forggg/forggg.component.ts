import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { ForgService } from 'src/app/sevise/forg.service';

@Component({
  selector: 'app-forggg',
  templateUrl: './forggg.component.html',
  styleUrls: ['./forggg.component.css']
})
export class ForgggComponent implements OnDestroy {
  g: boolean
  w: boolean
  constructor(private http: HttpClient, private share: ForgService) {
    this.g = false
    this.w = false

  }
  ngOnDestroy(): void {
    console.log("hhhhhhhhhhhhhhhhhhh")
  }
  add(f: any) {
    console.log(f.value)
    if (f.value["password"] == "" || f.value["password2"] == "") {
      this.g = true
      this.w = false

    }
    else if (f.value["password"] != f.value["password2"]) {
      this.w = true
      this.g = false

    }
    else {
      f.value['email'] = localStorage.getItem('email')

      this.http.post("http://localhost:8000/a/m", f.value).subscribe(data => {
        console.log(data)
        this.share.x = false

      })




    }

  }

}
