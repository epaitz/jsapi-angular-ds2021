export class RouteMetadata {
    constructor(
        public label: string,
        public path: string,
        public fullPath: string,
        public icon?: string,
        public children?: RouteMetadata[]
    ) { }
}
