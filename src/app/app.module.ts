import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login';
import { RegistrationComponent } from './registration/registration.component';
import { SearchDeleteComponent } from './search-delete/search-delete.component';
import { AlertComponent } from './_components';
import { JwtInterceptor } from './_helpers';
import { ManEmpRegistrationService } from './_services/man-emp-registration.service';




@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    SearchDeleteComponent,
    HomeComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ManEmpRegistrationService],// useClass: JwtInterceptor, multi: true],
  bootstrap: [AppComponent]
})
export class AppModule { }
