import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class HomeComponent {
  constructor(private router: Router, private http: HttpClient) {
    console.log(localStorage.getItem("nom"))



  }

  g() {
    this.router.navigate(['/log'])
  }

}
