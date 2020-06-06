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
        { icon: 'notifications', title: 'Notificações', href: '/notificacoes' },
        { icon: 'home', title: 'Meus Casos', href: '/casos' },
        { icon: 'assignment_ind', title: 'Criar Caso', href: '/casos/novo' },
        { icon: 'insert_chart_outlined', title: 'Relatórios', href: '/relatorios' },
        { icon: 'check_box', title: 'Checklist', href: '/checklist' },
    ];
    
    constructor() {}

    ngOnInit(): void {}
}
