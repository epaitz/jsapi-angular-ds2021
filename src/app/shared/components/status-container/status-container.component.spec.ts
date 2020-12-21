import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatusContainerComponent } from './status-container.component';

describe('StatusContainerComponent', () => {
    let component: StatusContainerComponent;
    let fixture: ComponentFixture<StatusContainerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ StatusContainerComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(StatusContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
