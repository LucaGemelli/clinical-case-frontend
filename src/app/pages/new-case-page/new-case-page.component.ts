import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-new-case-page',
    templateUrl: './new-case-page.component.html',
    styleUrls: ['./new-case-page.component.scss'],
})
export class NewCasePageComponent implements OnInit {
    isAdding: boolean;

    pacientChart: string[] = [];

    newPacientChart: string;
    
    constructor() {}

    ngOnInit(): void {}

    handleNewCase(value: any) {
        let response = {
            identificacao: value.identificacao,
            tratar: Boolean(value.tratar),
            pacientChart: this.pacientChart
        }

        console.log('FORM:', response);
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
