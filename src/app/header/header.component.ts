import { Component, OnInit } from '@angular/core';
import { RouteMetadata } from '../shared/models/route-metadata';
import { RouterService } from '../shared/services/router.service';
import { SidenavService } from '../shared/services/sidenav.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    public routes: RouteMetadata[];

    constructor(
        private routerService: RouterService,
        private sidenavService: SidenavService) { }

    ngOnInit(): void {
        this.routes = this.routerService.getRouterConfigMetadata();
    }

    sidenavOpen(path: string): void {
        this.sidenavService.open(path);
    }
}
