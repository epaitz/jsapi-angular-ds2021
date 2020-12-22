# ArcGIS API for JavaScript with Angular

This project was created for the Developer Summit 2021 ArcGIS JavaScript API and Angular presentation. The project was used to demonstrate several aspects of Angular and the ArcGIS JavaScript API 4.18 or later. This can be considered a starter application to help Angular developers create a single page map-centric application using the ArcGIS JavaScript API.

The project touches on the following Packages

- Angular
- Angular Material
- Angular Flex-Layout (used to create an adapative layout)
- Angular In-Memory Web API
- ArcGIS JavaScript API (v4.18)
- Jasmine Testing using mocks with createSpyObj
- Karma Code Coverage

The project also contains the following custom components and services

- [Status Container](src/app/shared/components)
- [Toolbar](src/app/shared/components) (vertical toolbar with overflow)
- [HttpClientService](src/app/shared/services) (service to wrap the HttpClient)
- [BaseService](src/app/shared/services)
- [RouterService](src/app/shared/services)
- [SidenavService](src/app/shared/services)
- [RestResponse](src/app/shared/models)
- [RouteMetadata](src/app/shared/models)
- [ServiceStatus](src/app/shared/models)
- [Helpers](src/app/shared/helpers)

There are a few configuration changes that have to me made to an Angular Project so that it works wtih the ArcGIS JavaScript API (v4.18).

- angular.json

Add the following to the architect/build/options section of the angular.json file.

```
    "assets": [
      {
        "glob": "**/*",
        "input": "node_modules/@arcgis/core/assets",
        "output": "/assets/"
      },
      "src/favicon.ico",
      "src/assets"
    ]
```


