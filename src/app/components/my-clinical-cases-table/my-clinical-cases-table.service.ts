import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ClinicalCase } from './ClinicalCase';

@Injectable({
    providedIn: 'root',
})
export class MyClinicalCasesTableService {

    API: string = 'https://cors-anywhere.herokuapp.com/https://clinicalcase-back-end.herokuapp.com/api-enfermagem/casos';
    
    constructor(private http: HttpClient) {}

    list() {
        return this.http.get<ClinicalCase[]>(this.API);
    }
}
