import { ServiceStatusTypes } from './service-status.types';

export class ServiceStatus {
    constructor(
        public type: ServiceStatusTypes,
        public error?: any) {
    }
}
