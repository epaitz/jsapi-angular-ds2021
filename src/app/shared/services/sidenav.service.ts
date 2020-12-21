import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SidenavService {

    private sidenavOpened = true;
    private sideNavOpenedSubject: ReplaySubject<boolean>;
    private path: string;

    constructor(private router: Router) {
        this.sideNavOpenedSubject = new ReplaySubject(1);
        this.sideNavOpenedSubject.next(this.sidenavOpened);
    }

    getSidenavOpened(): Observable<boolean> {
        return this.sideNavOpenedSubject.asObservable();
    }

    open(path: string): void {
        this.path = path;
        this.sidenavOpened = true;
        this.sideNavOpenedSubject.next(this.sidenavOpened);
    }

    close(path: string): void {
        this.path = path;
        this.sidenavOpened = false;
        this.sideNavOpenedSubject.next(this.sidenavOpened);
    }

    toggle(path: string): void {
        if (this.path == null || this.path.toLowerCase() !== path.toLowerCase()) {
            this.open(path);
        } else {
            this.path = path;
            this.sidenavOpened = !this.sidenavOpened;
            this.sideNavOpenedSubject.next(this.sidenavOpened);
        }
    }
}
