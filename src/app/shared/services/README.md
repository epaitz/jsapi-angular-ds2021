## Shared Services

BaseService

The BaseService class currently only contains an updateStatus() method used to update a Subject of type ServiceStatus. This was done so the method did not have to be reapeated in any service that had a ServiceStatus.

HttpClientService

The HttpClientService is used to centralize methods for all of the HTTP verbs (i.e. GET, POST, PUT, and DELETE). Currenlty only the GET verb has been added to this service. This service also supports the RestResponse model. The naming convention is get(), post(), put(), and delete() are for HTTP calls with a REST API that supports the RestResponse style. The getIt(), postIt(), putIt(), and deleteIt() are for HTTP calls with a REST API that does not support the RestRespons style. 

RouterService

SidenavService
