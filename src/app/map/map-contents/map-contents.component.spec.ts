import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapContentsComponent } from './map-contents.component';

describe('MapContentsComponent', () => {
    let component: MapContentsComponent;
    let fixture: ComponentFixture<MapContentsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ MapContentsComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MapContentsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
