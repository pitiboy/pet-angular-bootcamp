# Workshop for this step

Goals:

* Add a new module.
* Add several new components to the module.
* Add a new route.

-----

1. Use the Angular CLI to create a dashboard module.

```
ng generate module dashboard --routing
```

(On StackBlitz, right-click the app folder and choose to generate a
new module. Enter "dashboard" at the prompt.)

2. Generate the videoDashboard component and all nested components. Add
   the 'dashboard/' prefix, so they are added to the dashboard module.
   For example, your commands may look something like this:

```
ng generate component dashboard/videoDashboard
ng generate component dashboard/videoList
ng generate component dashboard/videoPlayer
ng generate component dashboard/statFilters
```

(The stat graphs component will be added later, time permitting.)

(On StackBlitz, right-click the dashboard folder and choose to
generate each new component. Enter "videoDashboard" or
"video-dashboard" at the prompt.

3. Set up routing.

Add a route to the videoDashboard component, using lazy loading.

4. Assemble your static application.

Use the components you generated in step 2 to reconstruct the video
stat tracker app in the dashboard component. As you begin, of course,
the components will be placeholders without actual functionality.
