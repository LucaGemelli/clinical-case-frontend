import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MyAnamneseTableService } from './my-anamnese-table.service';
import { Anamnese } from './Anamnese';

export interface Page {
    icon: string, 
    href: string, 
}

@Component({
    selector: 'app-my-anamnese-table',
    templateUrl: './my-anamnese-table.component.html',
    styleUrls: ['./my-anamnese-table.component.scss'],
})
export class MyAnamneseTableComponent implements OnInit {
    myAnamneseColumns: string[] = ['nome', 'informante', 'acoes'];

    page: Page = { icon: 'coronavirus', href: '/internacao' };

    dataSource;

    myAnamnese: Anamnese[];

    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    constructor(private service: MyAnamneseTableService) {}

    ngOnInit(): void {
        this.service.list()
            .subscribe((response: any) => {
                this.myAnamnese = response.content.map((anamnese: any, index: number): Anamnese => {
                    const {id, nome, informante, sexo,
                           dataNascimento, quantidadeFilhos,
                           estadoCivil, profissao, endereco,
                           naturalidade, motivoInternacao
                           } = anamnese;
                    
                    return {
                        id,
                        nome, 
                        informante,
                        sexo,
                        dataNascimento,
                        quantidadeFilhos,
                        estadoCivil,
                        profissao,
                        endereco,
                        naturalidade,
                        motivoInternacao,
                    }
                });

                this.dataSource = new MatTableDataSource(this.myAnamnese);
        
                this.dataSource.sort = this.sort;
                this.dataSource.paginator = this.paginator;
                // @TODO - Make Angular Material Paginator work with API
            });
    }
}
