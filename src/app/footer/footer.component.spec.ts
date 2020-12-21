import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
    let footerComponent: FooterComponent;
    let componentFixture: ComponentFixture<FooterComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                FooterComponent
            ],
            imports: [
                MatToolbarModule
            ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        componentFixture = TestBed.createComponent(FooterComponent);
        footerComponent = componentFixture.componentInstance;
    });

    it('ngOnInit_shouldInitializeComponent', () => {
        componentFixture.detectChanges();
        expect(footerComponent).toBeTruthy();
    });
});
