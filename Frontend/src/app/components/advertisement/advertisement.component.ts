import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.css']
})
export class AdvertisementComponent implements OnInit {
  advertisementId: string = '';
  advertisementData: any = {};
  programmingLanguages: any = [];
  users: any = [];
  comments: any = []; // Variable para almacenar los comentarios

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    const advertisementIdParam = this.route.snapshot.paramMap.get('advertisementId');
    if (advertisementIdParam) {
      this.advertisementId = advertisementIdParam;
    } else {
      console.error("No se proporcionó un ID de anuncio en la URL");
      return;
    }

    this.apiService.getAdvertisementData(this.advertisementId).subscribe(
      (response) => {
        if (response.error) {
          console.error('Error al obtener los datos del anuncio:', response.message);
        } else {
          this.advertisementData = response.data;
          console.log(this.advertisementData);
        }
      },
      (error) => {
        console.error('Error al obtener los datos del anuncio:', error);
      }
    );

    this.getProgrammingLanguages();
    this.getUsers();
    this.getComments(); // Obtener los comentarios al inicializar el componente
  }

  getProgrammingLanguages() {
    this.apiService.getProgrammingLanguages().subscribe((programmingLanguages: any) => {
      this.programmingLanguages = programmingLanguages;
       console.log('ProgrammingLanguages:', programmingLanguages);
    });
  }

  getUsers() {
    this.apiService.getUsers().subscribe((users: any) => {
      this.users = users;
       console.log('Users:', users);
    });
  }

  getComments() {
    this.apiService.getComments().subscribe((comments: any) => {
      this.comments = comments;
      console.log('Comments:', comments);
    });
  }

  // Método para obtener una matriz de la longitud de la calificación
  getRatingArray(rating: number): any[] {
    return Array(rating).fill(0);
  }
}
