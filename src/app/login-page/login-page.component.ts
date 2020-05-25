import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit(): void { }

    handleLogin(value: any) {
        // Check in API if email and password are valid, if valid redirect to home page
        // Cache a cookie with authentication or something like that

        this.router.navigate(['/home']);
    }
}
