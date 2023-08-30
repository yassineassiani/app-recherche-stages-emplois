import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-condidate',
  templateUrl: './condidate.component.html',
  styleUrls: ['./condidate.component.css']
})
export class CondidateComponent {
  parameter: any;
  private apiUrl = 'http://localhost:8000/f/q/'
  k: any; // Vous pouvez définir une interface pour le type de "k" pour une meilleure typage.

  constructor(private route: ActivatedRoute, private http: HttpClient,) {
    this.route.paramMap.subscribe(params => {
      this.parameter = params.get('id')!;

      this.http.get<any>('http://localhost:8000/f/p/' + this.parameter).subscribe((data) => {
        this.k = data;

        // Appel de la fonction pour ouvrir le fichier à partir de data.content

      });
    });
  }
  g(f: any) {
    console.log(f)
    this.http.get('http://localhost:8000/f/v/' + f).subscribe((data) => {

      console.log(data)

    })
    this.http.get<any>('http://localhost:8000/f/p/' + this.parameter).subscribe((data) => {

      this.k = data


    })



  }
  d(f: any) {
    console.log(f)
    this.http.get('http://localhost:8000/f/q/' + f, { responseType: 'arraybuffer' }).subscribe(
      (response: ArrayBuffer) => {
        console.log(response)
        const blob = new Blob([response], { type: 'application/pdf' });

        // Créer un lien de téléchargement pour le blob.
        const url = window.URL.createObjectURL(blob);

        // Créer un élément d'ancre et le déclencher pour démarrer le téléchargement.
        const link = document.createElement('a');
        link.href = url;
        link.download = 'cv'; // Remplacez 'your_file_name.extension' par le nom souhaité du fichier avec son extension.
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);


        // Libérer l'URL de l'objet blob.
        window.URL.revokeObjectURL(url);
        // Créer un blob à partir du tableau de bytes téléchargé.
        console.log(response)
      })

  }

  logout() {
    localStorage.clear();
  }
}


