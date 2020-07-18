import { ManEmpRegistrationService } from './../_services/man-emp-registration.service';
import { AuthenticationService } from './../_services/authentication.service';
import { Manager } from './../_models/manager';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';


@Component({ templateUrl: './home.component.html' })
export class HomeComponent implements OnInit {
    currentUser: Manager;
    users : any;

    constructor(
        private authenticationService: AuthenticationService,
        private userService: ManEmpRegistrationService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;  
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    // deleteUser(id: number) {
    //     this.userService.delete(id)
    //         .pipe(first())
    //         .subscribe(() => this.loadAllUsers());
    // }

    public delteUser(id:number){
        let resp= this.userService.deleteUser(id);
        resp.subscribe((data)=>this.users=data);
       }


            public loadAllUsers(){
                let resp=this.userService.getUsers();
                resp.subscribe(users => this.users = users);
                  }
    }
