import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { ServiceStatus } from '../shared/models/service-status';
import { ServiceStatusTypes } from '../shared/models/service-status.types';
import { BaseService } from '../shared/services/base.service';
import { HttpClientService } from '../shared/services/http-client.service';

@Injectable({
    providedIn: 'root',
  })
export class MapService extends BaseService {

    private webMap: any;
    private webMapSubject: ReplaySubject<any>;
    private webMapStatusSubject: ReplaySubject<ServiceStatus>;

    constructor(private httpClientService: HttpClientService) {
        super();
        this.webMapSubject = new ReplaySubject(1);
        this.webMapStatusSubject = new ReplaySubject(1);
    }

    initializeWebMap(): void {
        if (this.webMap == null) {
            this.updateStatus(this.webMapStatusSubject, ServiceStatusTypes.loading);
            this.httpClientService
                .getIt('api/webmap')
                .subscribe(
                    (webMap: any) => {
                        this.webMap = webMap;
                        this.webMapSubject.next(this.webMap);
                        this.updateStatus(this.webMapStatusSubject, ServiceStatusTypes.content);
                    },
                    (error) => {
                        this.updateStatus(this.webMapStatusSubject, ServiceStatusTypes.error, error);
                    }
                );
        }
    }

    getWebMap(): Observable<any> {
        return this.webMapSubject.asObservable();
    }

    getWebMapStatus(): Observable<ServiceStatus> {
        return this.webMapStatusSubject.asObservable();
    }
 }
