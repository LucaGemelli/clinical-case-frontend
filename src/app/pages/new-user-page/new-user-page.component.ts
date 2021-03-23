import { Component, OnInit } from '@angular/core';
import { NewUserPageService } from './new-user-page.service';

@Component({
    selector: 'app-new-user-page',
    templateUrl: './new-user-page.component.html',
    styleUrls: ['./new-user-page.component.scss'],
})
export class NewUserPageComponent implements OnInit {

    constructor(private newUserPageService : NewUserPageService) {}
    
    ngOnInit(): void {}

    handleNewUser1(form: any) {
        let value = form.value;
        var request = {
            nome: value.nome,
            email: value.email,
            senha: value.senha,
            perfil: value.perfil
        }
        this.newUserPageService.create(request);
    }
}
