import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Anamnese } from './Anamnese';

@Injectable({
    providedIn: 'root',
})
export class MyAnamneseTableService {

    API: string = 'http://localhost:8080/api-prontuario-eletronico/anamneses';
    
    constructor(private http: HttpClient) {}

    list() {
        return this.http.get<Anamnese[]>(this.API);
    }
}
