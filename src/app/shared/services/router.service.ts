import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { RouteMetadata } from '../models/route-metadata';

@Injectable({
    providedIn: 'root'
})
export class RouterService {

    constructor(private router: Router) { }

    getRouterConfigMetadata(): RouteMetadata[] {
        return this.processRoutes(null, this.router.config);
    }

    private processRoutes(parent: Route, routes: Route[]): RouteMetadata[] {
        if (routes == null) { return null; }

        return routes
            .filter((route: Route) => {
                return route.data != null;
            })
            .map((route: Route) => {
                return new RouteMetadata(
                    route.data.label,
                    route.path,
                    (parent != null ? '/' + parent.path + '/' + route.path : route.path),
                    route.data.icon,
                    this.processRoutes(route, route.children)
                );
            });
    }
}
