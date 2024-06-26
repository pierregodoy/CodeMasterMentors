import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactComponent } from './components/contact/contact.component';
import { AdvertisementComponent } from './components/advertisement/advertisement.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { AdvertisementManagementComponent } from './components/advertisement-management/advertisement-management.component';
import { MisAnunciosComponent } from './components/mis-anuncios/mis-anuncios.component';
import { CrearAnuncioComponent } from './components/crear-anuncio/crear-anuncio.component';
import { AdminEditUserComponent } from './components/admin-edit-user/admin-edit-user.component';
import { FavouriteListComponent } from './components/favourite-list/favourite-list.component';


const routes: Routes = [

  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'advertisement/:advertisementId', component: AdvertisementComponent },
  {path: 'userManagement', component: UserManagementComponent},
  {path: 'adManagement', component: AdvertisementManagementComponent},
  {path: 'editUser', component: AdminEditUserComponent},
  { path: 'favouriteList', component: FavouriteListComponent },




  { path: 'profile/:userId', component: ProfileComponent },
  { path: 'mis-anuncios/:userId', component: MisAnunciosComponent},
  { path: 'crear-anuncio', component: CrearAnuncioComponent},



  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent } //la darrera!!!
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
