import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

export interface ClinicalCase {
    identificacao: string;
    code: string;
    criador: string;
    tratando: boolean;
}

const myClinicalCases: ClinicalCase[] = [
    { identificacao: 'Prática I - Manhã - Paciente Maria', code: 'A8D14', criador: 'Bruno', tratando: true },
    { identificacao: 'Prática Enfermagem II - Tarde - Paciente Jorge', code: '6488D', criador: 'Luca', tratando: false },
    { identificacao: 'Prática Enfermagem IV - Noite - Paciente: Vinicius', code: '7B36B', criador: 'Eduardo', tratando: true },
];

@Component({
    selector: 'app-my-clinical-cases-table',
    templateUrl: './my-clinical-cases-table.component.html',
    styleUrls: ['./my-clinical-cases-table.component.scss'],
})
export class MyClinicalCasesTableComponent implements OnInit {
    myClinicalCasesColumns: string[] = ['identificacao', 'code', 'criador', 'tratando'];
    dataSource = new MatTableDataSource(myClinicalCases);

    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    ngOnInit(): void {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }
}
