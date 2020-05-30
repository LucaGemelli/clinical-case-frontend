import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
    navigationLinks: any[] = [
        { icon: 'home', title: 'Home', page: '/home' },
        { icon: 'insert_chart_outlined', title: 'Relatórios', page: '/reports' },
        { icon: 'check_box', title: 'Checklist', page: '/checklist' }
    ];
    
    constructor() {}

    ngOnInit(): void {}
}
