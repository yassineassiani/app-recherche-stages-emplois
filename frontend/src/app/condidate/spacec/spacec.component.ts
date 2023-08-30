import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-spacec',
  templateUrl: './spacec.component.html',
  styleUrls: ['./spacec.component.css']
})
export class SpacecComponent {
  parameter: any;
  k: any; // Vous pouvez définir une interface pour le type de "k" pour une meilleure typage.

  constructor(private route: ActivatedRoute, private http: HttpClient) {


    this.http.get<any>('http://localhost:8000/f/o/' + localStorage.getItem("id")).subscribe((data) => {
      this.k = data;

      // Appel de la fonction pour ouvrir le fichier à partir de data.content

    });
  }
  logout() {
    localStorage.clear();
  }

}
