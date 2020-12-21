import { Component, OnInit } from '@angular/core';
import config from '@arcgis/core/config.js';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    ngOnInit(): void {
        config.assetsPath = '/assets';
    }
}
