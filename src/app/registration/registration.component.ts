import { Manager } from '../_models/manager';
import { Component, OnInit,NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ManEmpRegistrationService } from '../_services/man-emp-registration.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  manager: Manager=new Manager()
  message:any;
  submitted = false;

  constructor(private service:ManEmpRegistrationService, private router: Router) { }

  ngOnInit() {
  }


  newManager(): void {
    this.submitted = false;
    this.manager = new Manager();
  }
  

  public registerNow(){
let resp=this.service.doRegistration(this.manager);
resp.subscribe((data)=>this.message=data);
  }

}
