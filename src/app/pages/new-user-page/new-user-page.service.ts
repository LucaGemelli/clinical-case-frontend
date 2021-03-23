import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class NewUserPageService {

    API: string = 'http://localhost:8080/api-prontuario-eletronico/usuarios'
 
    constructor(private http: HttpClient) {}

    create(newUser) {
        return this.http.post(this.API, {
                nome: newUser.nome,
                email: newUser.email,
                senha: newUser.senha,
                perfil: {
                    value: newUser.perfil
                }
        });
    }
}
