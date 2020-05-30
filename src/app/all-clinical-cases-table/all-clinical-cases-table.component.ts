import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

export interface ClinicalCase {
    identificacao: string;
    creator: string;
}

const myClinicalCases: ClinicalCase[] = [
    { identificacao: 'Prática I - Manhã - Paciente Maria', creator: 'Jean' },
    { identificacao: 'Prática Enfermagem II - Tarde - Paciente Jorge', creator: 'Lucca', },
    { identificacao: 'Prática Enfermagem IV - Noite - Paciente: Vinicius', creator: 'Bruno', },
];

@Component({
  selector: 'app-all-clinical-cases-table',
  templateUrl: './all-clinical-cases-table.component.html',
  styleUrls: ['./all-clinical-cases-table.component.scss']
})
export class AllClinicalCasesTableComponent implements OnInit {
    myClinicalCasesColumns: string[] = ['identificacao', 'creator', 'actions'];
    dataSource = new MatTableDataSource(myClinicalCases);

    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    ngOnInit(): void {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }
}
