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
        { icon: 'home', title: 'Home', href: '/home' },
        { icon: 'insert_chart_outlined', title: 'Relatórios', href: '/reports' },
        { icon: 'check_box', title: 'Checklist', href: '/checklist' }
    ];
    
    constructor() {}

    ngOnInit(): void {}
}
