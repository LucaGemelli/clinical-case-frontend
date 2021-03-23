import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NewAnamnesePageService } from './new-anamnese-page.service';

@Component({
    selector: 'app-new-anamnese-page',
    templateUrl: './new-anamnese-page.component.html',
    styleUrls: ['./new-anamnese-page.component.scss'],
})
export class NewAnamnesePageComponent implements OnInit {
    
    constructor(private router: Router, private service: NewAnamnesePageService) {}

    ngOnInit(): void {}

    handleNewHospitalization(form: any) {
        this.service.create(form.value)
            .subscribe(anamneseSucess => {
                form.resetForm();
                this.router.navigate(['/anamnese']); 
            });
    }
    
}
