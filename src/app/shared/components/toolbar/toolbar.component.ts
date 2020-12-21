import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';
import { RouteMetadata } from '../../models/route-metadata';
import { RouterService } from '../../services/router.service';
import { SidenavService } from '../../services/sidenav.service';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

    public buttons: any[];
    public showButtonsFromRoute = false;
    public isOverflowVisible = false;
    public settingsButton: any;
    private routerConfig: RouteMetadata[];

    @Input() orientation: string;
    @Input() routePath: string;
    @Input() settingsPath: string;

    @HostListener('window:resize') onResize(): void {
        this.updateButtonVisibility();
    }

    constructor(
        private elementRef: ElementRef,
        private routerService: RouterService,
        private sideNavService: SidenavService) { }

    ngOnInit(): void {
        this.routerConfig = this.routerService.getRouterConfigMetadata();
        this.showButtonsFromRoute = (this.routePath != null);
        this.initializeButtonsFromRoute();
        this.initializeSettingsButton();
        this.updateButtonVisibility();
    }

    sidenavToggle(path: string): void {
        this.sideNavService.toggle(path);
    }

    private initializeButtonsFromRoute(): void {
        if (this.showButtonsFromRoute === false) { return; }

        this.buttons = this.routerConfig
            .find((route: RouteMetadata) => {
                return route.path === this.routePath;
            })
            ?.children
            ?.filter((route: RouteMetadata) => {
                return route.path !== this.settingsPath;
            })
            .map((route: RouteMetadata, index: number) => {
                return {
                    id: index,
                    path: route.fullPath,
                    icon: route.icon,
                    label: route.label,
                    bottom: 48 * (index + 1)
                };
            }) ?? [];
    }

    private initializeSettingsButton(): void {
        if (this.showButtonsFromRoute === false) { return; }

        const settingsRoute = this.routerConfig
            .find((route: any) => {
                return route.path === this.routePath;
            })
            ?.children
            ?.find((route: any) => {
                return route.path === this.settingsPath;
            });

        if (settingsRoute != null) {
            this.settingsButton = {
                path: settingsRoute.path,
                icon: settingsRoute.icon,
                label: settingsRoute.label
            };
        }
    }

    private updateButtonVisibility(): void {
        if (this.showButtonsFromRoute === false) { return; }

        const height = this.elementRef.nativeElement.getBoundingClientRect().height;

        this.buttons = this.buttons.map((button) => {
            button.visible = button.bottom < height - 100;
            return button;
        });

        this.isOverflowVisible = this.buttons.some((button) => {
            return button.visible === false;
        });
    }
}
