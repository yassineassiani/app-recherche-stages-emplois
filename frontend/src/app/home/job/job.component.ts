import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForgService } from 'src/app/sevise/forg.service';


@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  currentPage = 0;
  cur: any
  tot: any
  totalPages = 0;
  vosDonnees = []
  k: any
  x: any
  y: any
  constructor(private http: HttpClient, private votreService: ForgService) {
    this.x = 0

    this.http.get('http://localhost:8000/f/j').subscribe((data) => {





    });

  }
  ngOnInit() {
    this.loadData();
  }
  selectedOption: string = '';
  radioOptions = ['Mechanical', 'Computing', 'Humaine ressource ', 'Accouting', 'Administration', 'Automobile', 'Finance', 'Marketing'];
  add(f: any) {
    this.cur = 0
    this.tot = 0
    this.x = 1
    console.log(f.value['radioGroup'])
    this.y = f.value['radioGroup']
    this.http.get('http://localhost:8000/f/j/' + f.value['radioGroup']).subscribe((data) => {

      this.k = data

    });

    this.loadDat(f.value['radioGroup'])

  }
  loadDat(d: string) {
    this.votreService.getVotreDat(this.cur, 2, d).subscribe(data => {
      this.vosDonnees = data.content;
      this.tot = data.totalPages;
      console.log(data.content)
      this.k = data.content

    });
  }

  loadData() {
    this.votreService.getVotreData(this.currentPage, 2).subscribe(data => {
      this.vosDonnees = data.content;
      this.totalPages = data.totalPages;

      this.k = data.content
    });
  }
  nextPage() {
    if (this.x == 0) {
      if (this.currentPage < this.totalPages - 1) {
        this.currentPage++;
        this.loadData();
      }
    }
    else {
      if (this.cur < this.tot - 1) {
        this.cur++;
        this.loadDat(this.y);
      }

    }
  }

  prevPage() {
    if (this.x == 0) {

      if (this.currentPage > 0) {
        this.currentPage--;
        this.loadData();
      }
    } else {
      if (this.currentPage > 0) {
        this.cur--;
        this.loadDat(this.y);
      }

    }
  }

}
