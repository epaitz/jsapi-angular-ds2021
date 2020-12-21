import { InMemoryDataService } from './in-memory-data.service';

describe('InMemoryDataService', () => {
    let inMemoryDataService: InMemoryDataService;

    beforeEach(() => {
        inMemoryDataService = new InMemoryDataService();
    });

    it('should be created', () => {
        expect(inMemoryDataService).toBeTruthy();
    });
});
