# angular-gulp-seed

This is a basic starter project to initialize your project using [AngularJS](http://angularjs.org/) and [Gulp](http://gulpjs.com/). It follows MVC architecture and uses the perfect app structure to enhance productivity.

This seed contains a sample AngularJS application with useable Gulp tasks which comes in handy for the build process. This app also uses [Bower](https://bower.io/) as the client-side package manager.

In this seed app, `UI-router` is used for routing using states. This seed has sample states, controllers and much more.

### Prerequisites

You must have [Git](http://git-scm.com/) and node.js and its package manager [npm](http://nodejs.org/) installed.

### Getting Started

To get you started you can simply clone the angular-seed repository and install the dependencies:

Clone the angular-seed repository using the command and change the directory to the root folder.

```
git clone https://github.com/mohitvirli/angular-gulp-seed.git
cd angular-gulp-seed
```

For installing dependencies in this project which would install the core packages using node and the angular packages using bower

I have set pre-install script which installs bower too. Run this command to install the dependencies.

```
npm install
```
After completing this command, run the following command to install the bower components which would install them in `app/bower_components`. This folder is predefined in `.bowerrc` file in the root folder.

```
bower install
```

### Using Gulp

I have written some useful tasks in gulp to manage the build and for development web server.

For serving the app locally, Use

```
gulp serve
```

The above task uses [BrowserSync](https://www.browsersync.io/) which enables hosting and also implements live-reloading (Which basically means, the hosted app reloads everytime you save any changes in code). You would be redirected to the app at `http://localhost:3000`.

For Building the production version which would make your app ready for deployment use the following command.

```
gulp build
```

The above command minifies the js and css files and concatenates them too. The vendor and user js and css files are seperated into different files. All the production file can be found in `dist/` folder. 


### Directory Layout

```
app/                    --> all of the source files for the application
  bower_components/     --> all the angular components and the custom dependencies would be found here
  js/           		--> all the app specific javascript files
  	main.js             	--> Main JavaScript file
  	main.config.js      	--> Angular configuration file
  	main.controllers.js 	--> All the app controllers are written in this file
  	main.directives.js  	--> Custom directives are implemented in this file
  	main.filters.js     	--> custom filters are implemented in this file
  	main.services.js 		--> All the app services are written in this file
  css/                	--> The user defined Stylesheets are in here
    main.css                --> The main CSS file
  views/                --> the partial views or templates
    sample1.html            --> the partial template
    sample2.html            --> the other partial template
  index.html            --> app layout file (the main html template file of the app)
dist/                   --> The build would be found here which could be pushed to production
```

### Contribute 

As this my first open source project please have a look at this and suggest feedbacks, better contribute. 