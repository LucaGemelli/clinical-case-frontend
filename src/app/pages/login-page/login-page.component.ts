import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginPageService } from './login-page.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

    constructor(private router: Router, private loginPageService : LoginPageService) {}

    login = true;

    ngOnInit(): void { }

    forgotPassword() {
        this.login = false;
    }

    resetPassword (form: any) {
        let value = form.value;
        var email = value.email;
        this.loginPageService.reset(email);
    }

    handleLogin(form: any) {
        let value = form.value;
        var user = {
            email: value.email,
            senha: value.senha
        }

        this.loginPageService.valid(user).subscribe(users=> {
            if(users == true) {
                this.router.navigate(['/anamnese']);      
            }
        });
    }
}