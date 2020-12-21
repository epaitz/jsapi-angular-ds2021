import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
    providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

    constructor() { }

    createDb(): any {
        const webmap = {
            operationalLayers: [
                {
                    id: '1234567890',
                    layerType: 'ArcGISMapServiceLayer',
                    url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/PoolPermits/MapServer',
                    visibility: true,
                    opacity: 1,
                    title: 'Pool Permits'
                }
            ],
            baseMap: {
                baseMapLayers: [
                {
                    id: 'defaultBasemap',
                    layerType: 'ArcGISTiledMapServiceLayer',
                    url: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer',
                    visibility: true,
                    opacity: 1,
                    title: 'Topographic'
                }
                ],
                title: 'Topographic'
            },
            spatialReference: {
                wkid: 102100,
                latestWkid: 3857
            },
            initialState: {
                viewpoint: {
                    targetGeometry: {
                        xmin: -13075816.404716644,
                        ymin: 4014771.4695451558,
                        xmax: -13073005.679717692,
                        ymax: 4016869.786173813,
                        spatialReference: {
                            wkid: 102100,
                            latestWkid: 3857
                        }
                    }
                },
            },
            authoringApp: 'WebMapViewer',
            authoringAppVersion: '4.1',
            version: '2.4'
        };
        return {
            webmap
        };
    }
}
