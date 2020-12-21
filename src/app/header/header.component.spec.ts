import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
    let headerComponent: HeaderComponent;
    let componentFixture: ComponentFixture<HeaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                HeaderComponent
            ],
            imports: [
                RouterTestingModule,
                MatToolbarModule,
                MatIconModule,
                MatMenuModule
            ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        componentFixture = TestBed.createComponent(HeaderComponent);
        headerComponent = componentFixture.componentInstance;
    });

    it('ngOnInit_shouldInitializeComponent', () => {
        componentFixture.detectChanges();
        expect(headerComponent).toBeTruthy();
    });
});
