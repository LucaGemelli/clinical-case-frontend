import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class NewHospitalizationPageService {

    API: string = 'http://localhost:8080/api-prontuario-eletronico/internacoes'
 
    constructor(private http: HttpClient) {}

    create(newHospitalization) {
        return this.http.post(this.API, {
            status: newHospitalization.status,
    });
    }
}
