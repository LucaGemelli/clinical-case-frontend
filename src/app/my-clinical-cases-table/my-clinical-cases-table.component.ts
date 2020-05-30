import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

export interface ClinicalCase {
    identificacao: string;
    code: string;
}

const myClinicalCases: ClinicalCase[] = [
    { identificacao: 'Prática I - Manhã - Paciente Maria', code: 'A8D14' },
    { identificacao: 'Prática Enfermagem II - Tarde - Paciente Jorge', code: '6488D', },
    { identificacao: 'Prática Enfermagem IV - Noite - Paciente: Vinicius', code: '7B36B', },
];

@Component({
    selector: 'app-my-clinical-cases-table',
    templateUrl: './my-clinical-cases-table.component.html',
    styleUrls: ['./my-clinical-cases-table.component.scss'],
})
export class MyClinicalCasesTableComponent implements OnInit {
    myClinicalCasesColumns: string[] = ['identificacao', 'code', 'actions'];
    dataSource = new MatTableDataSource(myClinicalCases);

    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    ngOnInit(): void {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }
}
