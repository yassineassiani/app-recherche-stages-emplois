import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-serv',
  templateUrl: './serv.component.html',
  styleUrls: ['./serv.component.css']
})
export class ServComponent {
  k: any; // Vous pouvez définir une interface pour le type de "k" pour une meilleure typage.

  constructor(private http: HttpClient) {

    this.http.post<any>('http://localhost:8000/f/u?name=yassine&email=karim.hmidi@ensi-uma.tn&phone=12345678&ide=254&id=102&date=2023-07-29&namee=yas&title=k', "hh").subscribe((data) => {
      console.log(data)
    }
    );

    this.http.get<any>('http://localhost:8000/f/jee/' + localStorage.getItem("id")).subscribe((data) => {
      this.k = data;

      // Appel de la fonction pour ouvrir le fichier à partir de data.content

    });
  }
  g(f: any) {
    console.log(f)

    this.http.delete('http://localhost:8000/f/l/' + f).subscribe((data) => {
      console.log(data)
    })
    this.http.get<any>('http://localhost:8000/f/jee/' + localStorage.getItem("id")).subscribe((data) => {
      this.k = data;

      // Appel de la fonction pour ouvrir le fichier à partir de data.content

    });

  }
  logout() {
    localStorage.clear();
  }

}
