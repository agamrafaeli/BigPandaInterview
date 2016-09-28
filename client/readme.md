BigPanda Interview - App Client
==========================

### Run a local server that serves the client
To run a local server that serves up the client run the following commands from inside this folder:
```
npm install
gulp
```

Then browse to the address:
> http://localhost:3000

The client will only have the full functionality if you also run the server from the server folder.

###Client App Architecture
####Giving Credit
The client is written in Angular2 using TypeScript over a project generated with the Yo generator.
> This project was generated with [yo angular2-typescript generator](https://github.com/shibbir/generator-angular2-typescript) version 0.8.1.

The app's code is in the `src` directory. Using `gulp` it is extremely easy to compile the project's code to JS for production use. 

#####Base Files
- `index.html`: The base HTML file of the app. It calls the `comment-feed` component which is the main component of the app
- `mainStyles.css`: The main CSS file that defines styles that persist throughout the rest of the project.
- `main.ts`, `polyfills.ts`, `vendor.ts`: These are all files that perform imports and basic running functions of the Angular2 app.

#####Base objects
- The app has one model called `comment` which is defined in `comment.ts`
- The app has a service called `comment.service` which exposes two methods: `getComments` and `submitComment`

#####components:
- `commentwriter`: this component has a UI to get input from the user and uses `comment.service` to submit written comments.
- `commentdisplay`: this component has a UI to display comments and uses `comment.service` to get the comments which it displays.
- `commentfeed`: this is a parent component that manages `commentwriter` and `commentdisplay`