import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class NewCasePageService {

    API: string = 'https://cors-anywhere.herokuapp.com/https://clinicalcase-back-end.herokuapp.com/api-enfermagem/casos';
    
    constructor(private http: HttpClient) {}

    create(identificacao) {
        return this.http.post(this.API, {
            identificacao: identificacao,
            dataHora: new Date().toISOString(),
            // @TODO - Get current logged user
            usuario: {
                id: 1,
                nome: "Usuário Padrão",
                email: "aluno@gmail.com"
            }
        });
    }
}
