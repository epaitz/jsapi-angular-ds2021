import { ServiceStatus } from '../shared/models/service-status';
import { ServiceStatusTypes } from '../shared/models/service-status.types';
import { MapService } from './map.service';
import { of } from 'rxjs';

describe('MapService', () => {

    let mapService: MapService;
    let mockHttpService: any;

    beforeEach(() => {
        mockHttpService = jasmine.createSpyObj('mockHttpService', ['get']);
        mapService = new MapService(mockHttpService);
    });

    it('getWebMapStatus_shouldReturnLoadingContentServiceStatus', (done) => {

        let count = 0;
        const webMap = {};
        mockHttpService.get.and.returnValue(of(webMap));

        mapService
            .getWebMapStatus()
            .subscribe((serviceStatus: ServiceStatus) => {

                if (count === 0) {
                    expect(serviceStatus.type).toBe(ServiceStatusTypes.loading);
                }

                if (count === 1) {
                    expect(serviceStatus.type).toBe(ServiceStatusTypes.content);
                    done();
                }

                count++;
            });

        mapService.initializeWebMap();
    });
});
