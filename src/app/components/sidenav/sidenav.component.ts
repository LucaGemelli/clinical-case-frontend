import { Component, OnInit } from '@angular/core';

export interface Page {
    icon: string, 
    title: string, 
    href: string, 
}

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
    pages: Page[] = [
        { icon: 'home', title: 'Pacientes', href: '/anamnese' },
        { icon: 'assignment_ind', title: 'Novo Paciente', href: '/anamnese/novo' },
        { icon: 'group_add', title: 'Novo Usuário', href: '/user/novo' },
    ];
    
    constructor() {}

    ngOnInit(): void {}
}
