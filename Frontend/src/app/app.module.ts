import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './components/logout/logout.component';
import { ApiService } from './services/api.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactComponent } from './components/contact/contact.component';
import { AdvertisementComponent } from './components/advertisement/advertisement.component';
import { MisAnunciosComponent } from './components/mis-anuncios/mis-anuncios.component';
import { CrearAnuncioComponent } from './components/crear-anuncio/crear-anuncio.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { AdvertisementManagementComponent } from './components/advertisement-management/advertisement-management.component';
import { AdminEditUserComponent } from './components/admin-edit-user/admin-edit-user.component';
import { FavouriteListComponent } from './components/favourite-list/favourite-list.component';



// import { AuthService } from './auth.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    LogoutComponent,
    NavbarComponent,
    ProfileComponent,
    AboutusComponent,
    ContactComponent,
    AdvertisementComponent,
    MisAnunciosComponent,
    CrearAnuncioComponent,
    UserManagementComponent,
    AdvertisementManagementComponent,
    AdminEditUserComponent,
    FavouriteListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Asegúrate de tener un AppRoutingModule o nombre similar
    RouterModule, // Agrega RouterModule aquí
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
