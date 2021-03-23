import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class NewAnamnesePageService {

    API: string = 'http://localhost:8080/api-prontuario-eletronico/anamneses';
    
    constructor(private http: HttpClient) {}

    create(anamnese) {
        return this.http.post(this.API, anamnese);
    }
}
