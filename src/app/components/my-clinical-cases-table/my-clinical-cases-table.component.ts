import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { MyClinicalCasesTableService } from './my-clinical-cases-table.service';
import { ClinicalCase } from './ClinicalCase';

@Component({
    selector: 'app-my-clinical-cases-table',
    templateUrl: './my-clinical-cases-table.component.html',
    styleUrls: ['./my-clinical-cases-table.component.scss'],
})
export class MyClinicalCasesTableComponent implements OnInit {
    myClinicalCasesColumns: string[] = ['identificacao', 'code', 'tratando'];
    
    dataSource;

    myClinicalCases: ClinicalCase[];

    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    constructor(private service: MyClinicalCasesTableService) {}

    ngOnInit(): void {
        this.service.list()
            .subscribe((response: any) => {
                this.myClinicalCases = response.content.map((clinicalCase: any, index: number): ClinicalCase => {
                    const { identificacao, code } = clinicalCase;
                    
                    return {
                        identificacao, 
                        code,
                        // @TODO - Update field "tratando" with API later
                        // @TODO - "index % 2 ? true : false" can be removed later, this is just to have different values as for now
                        tratando: index % 2 ? true : false
                    }
                });

                this.dataSource = new MatTableDataSource(this.myClinicalCases);
        
                this.dataSource.sort = this.sort;
                this.dataSource.paginator = this.paginator;
                // @TODO - Make Angular Material Paginator work with API
            });
    }
}
