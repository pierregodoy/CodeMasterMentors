import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-advertisement-management',
  templateUrl: './advertisement-management.component.html',
  styleUrls: ['./advertisement-management.component.css']
})
export class AdvertisementManagementComponent implements OnInit {
  advertisements: any = [];


  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadAdvertisement();
  }

  loadAdvertisement() {
    this.apiService.getAdvertisements().subscribe((advertisements: any[]) => {
      this.advertisements = advertisements;
    });
  }

  eliminarAnuncio(advertisementId: string) {
    this.apiService.deleteAdvertisement(advertisementId).subscribe(
      response => {
        console.log('Anuncio eliminado exitosamente:', response);
        // Realizar cualquier acción adicional después de eliminar el anuncio
      },
      error => {
        console.error('Error al eliminar el anuncio:', error);
        // Manejar el error en caso de que ocurra
      }
    );
  }
}

