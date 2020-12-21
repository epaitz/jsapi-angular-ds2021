## Status Container Component

The Status Container Component can be used to display various status states for any part of the application. The componet works with the ServiceStatus model that currently has an enumeration of 'loading', 'content', 'empty', and 'error'. The component has a default input message and an output refresh event. The refresh event can be used to retry the operation that is in an error state. When the state is set to 'loading' the Status Container will display the Angular Material Progress Spinner and a message. If the state is set to 'error' an error icon will be displayed with the generic message 'An error has occurred' and a Material Accordion can be expaned to show the error details. In the 'content' state the component will simply just show the content that is being wrapped. 

This component, and the ServiceStauts model, can be expanded to support other states or Template inputs can be added for each state so that the status template can be changed as needed.

## Toolbar Component
