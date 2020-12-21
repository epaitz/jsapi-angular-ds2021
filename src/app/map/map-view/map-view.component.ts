import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ServiceStatus } from 'src/app/shared/models/service-status';
import { MapFactory } from '../map.factory';
import { MapService } from '../map.service';

@Component({
    selector: 'app-map-view-component',
    templateUrl: './map-view.component.html',
    styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit, OnDestroy {

    @ViewChild('mapViewDiv', { static: true }) private elementRef: ElementRef;

    public serviceStatus$: Observable<ServiceStatus>;
    private ngUnsubscribe: Subject<any> = new Subject();

    constructor(
        private mapService: MapService,
        private mapFactory: MapFactory) { }

    ngOnInit(): void {
        this.serviceStatus$ = this.mapService.getWebMapStatus();

        this.mapService.getWebMap()
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe((webMap) => {
                this.mapFactory.initializeMapView(this.elementRef, webMap);
            });

        this.mapService.initializeWebMap();
    }

    ngOnDestroy(): void {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
        this.mapFactory.removeMapViewContainer(this.elementRef);
    }

    refresh(): void {

    }
}
