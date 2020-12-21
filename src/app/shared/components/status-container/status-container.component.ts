import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServiceStatus } from '../../models/service-status';

@Component({
    selector: 'app-status-container',
    templateUrl: './status-container.component.html',
    styleUrls: ['./status-container.component.css']
})
export class StatusContainerComponent implements OnInit {

    @Input() serviceStatus: ServiceStatus;
    @Input() message = 'Please wait...';
    @Output() refresh: EventEmitter<any> = new EventEmitter();

    constructor() { }

    ngOnInit(): void { }

    onRefresh(): void {
        this.refresh.emit();
    }
}
