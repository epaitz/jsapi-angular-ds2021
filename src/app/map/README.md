## Bookmarks Component

The BookmarksComponent is tied to the /bookmarks route and is currently empty but can be used to display a list of bookmarks where the user can zoom to an individual bookmark, delete a bookmark and create a new bookmark. 

## Map Contents

The MapContentsComponetn is tied to the /contents route and is currently empty but can be used to display the layers currently on the map.

## Map View Component

The MapViewComponent, is a sub-component to the MapComponent, and is where the ESRI MapView is added to the DOM. It uses the MapFactory and the MapService to get the WebMap JSON and initialize the Map and MapView objects. 

## Notifications Component

The NotificationsComponent is tied to the /notifications route and is currently empty. 

## Search Component

The SearchComponent is tied to the /search route and is currently empty.

## Settings Component

The SettingsComponent is tied to the /settings route and is currently empty.

## Map Component

The MapComponent is the component tied to the /map route and contains the Toolbar, Sidenav, and MapView components. 

## Map Factory

The MapFactory is a service that will initialize the WebMap and MapView and store a reference to the DOM used to create the MapView so that is can be added and removed from the DOM so that the parent component (MapViewComponent) can be destroyed and recreated as the route is navigated. 

## Map Service

The MapService is an Angular Service used to talk to a REST API (or Portal) to fetch the WebMap JSON. What is not shown is the ability to force the WebMap to be reloaded from the server. This might not be something we want for a WebMap but its something that would work well for the BookmarksService. Usually what I have done is add a bolean to the initialize method, for example initializeWebMap(reload = false). If reload is true then you can ignore if the current webMap is null or not and just make an HTTP call. 

Another enhancement would be to not make the HTTP call if the service status is loading. No need to make a second call when the first one has not finished yet. This would require a way to cancel the HTTP call because if refresh = ture and status = loading then you need to cancel the current HTTP call and execute a new HTTP call. There is an example of how to cancle the HTTP GET in the HttpClientService. 
