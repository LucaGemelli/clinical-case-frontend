import { Component, OnInit } from '@angular/core';

import { NewCasePageService } from './new-case-page.service';

@Component({
    selector: 'app-new-case-page',
    templateUrl: './new-case-page.component.html',
    styleUrls: ['./new-case-page.component.scss'],
})
export class NewCasePageComponent implements OnInit {
    isAdding: boolean;

    pacientChart: string[] = [];

    newPacientChart: string;
    
    constructor(private service: NewCasePageService) {}

    ngOnInit(): void {}

    handleNewCase(form: any) {
        // @TODO - When API is updated, send pacient chart
        let value = form.value,
            request = {
                identificacao: value.identificacao,
                tratar: Boolean(value.tratar),
                pacientChart: this.pacientChart
            }

        this.service.create(request.identificacao)
            .subscribe(() => { form.resetForm(); });
    }

    showAddPacientChart() {
        this.isAdding = true;
    }

    handleAddNewPacientChart() {
        if (this.newPacientChart) {
            this.pacientChart.push(this.newPacientChart);
            this.newPacientChart = '';
            this.isAdding = false;
        }
    }
    
    handleRemovePacientChart(index: number) {
        this.pacientChart.splice(index, 1);
    }
}
