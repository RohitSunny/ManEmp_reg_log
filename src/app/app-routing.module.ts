import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { SearchDeleteComponent } from './search-delete/search-delete.component';
import { LoginComponent } from './login';
import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  // {path:"",redirectTo:"register",pathMatch:"full"},
   {path:"register",component:RegistrationComponent},
   {path:"search",component:SearchDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const appRoutingModule = RouterModule.forRoot(routes);

