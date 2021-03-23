import { Component, OnInit } from '@angular/core';
import { NewHospitalizationPageService } from './new-hospitalization-page.service';

@Component({
    selector: 'app-new-hospitalization-page',
    templateUrl: './new-hospitalization-page.component.html',
    styleUrls: ['./new-hospitalization-page.component.scss'],
})
export class NewHospitalizationPageComponent implements OnInit {

    constructor(private newHospitalizationPageService : NewHospitalizationPageService) {}
    
    newHosp = false;

    ngOnInit(): void {}

    newHospitalization() {
        this.newHosp = true;
    }

    handleNewHospitalization(form: any) {
        let value = form.value;
        var request = {
            status: value.status
        }
        this.newHospitalizationPageService.create(request);
    }
}
